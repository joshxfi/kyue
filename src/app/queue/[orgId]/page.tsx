"use client";

import { toast } from "sonner";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { QueueData } from "@/types";
import { Loader, QrCode } from "@/components";
import { Button, Modal, QueueContainer } from "@/components/utils";

export default function Queue({ params }: { params: { orgId: string } }) {
  const [name, setName] = useState("");
  const [queueId, setQueueId] = useState("default");
  const [modalOpen, setModalOpen] = useState(false);
  const [scannedModal, setScannedModal] = useState(false);

  const handleGenerate = async () => {
    const qId = nanoid(12);
    setQueueId(qId);
    setModalOpen(false);

    const q = query(
      collection(db, "queue"),
      orderBy("timestamp", "desc"),
      limit(1)
    );

    let latestQueue = 0;

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.exists()) {
        latestQueue = doc.data().queueNumber;
      }
    });

    try {
      await setDoc(doc(db, "queue", qId), {
        name,
        orgId: params.orgId,
        queueNumber: latestQueue + 1,
        timestamp: serverTimestamp(),
        isScanned: false,
      });
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleCancel = async () => {
    try {
      setName("");
      await deleteDoc(doc(db, "queue", queueId));
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const [value, loading] = useDocument(doc(db, "queue", queueId));
  const { isScanned } = (value?.data() as QueueData) ?? {};

  useEffect(() => {
    if (isScanned) {
      setName("");
      setScannedModal(true);
    }
  }, [isScanned]);

  return (
    <QueueContainer title="Generate QR Code">
      <Modal
        isOpen={modalOpen}
        title="Get in Queue"
        description={`Hello ${name}, how would you like to proceed?`}
        onClose={() => setModalOpen(false)}
        handleConfirm={[
          {
            text: "Student Account",
            fn: handleGenerate,
          },
          { text: "Cashier", fn: handleGenerate },
        ]}
      />

      <Modal
        isOpen={scannedModal}
        title="Success"
        description="You are now in queue. Use your phone to track the status."
        onClose={() => setScannedModal(false)}
        handleConfirm={[
          {
            text: "Proceed",
            fn: () => setScannedModal(false),
          },
        ]}
      />

      <div className="pt-32 flex flex-col justify-center items-center">
        {loading ? (
          <Loader className="h-12 w-12" />
        ) : value?.exists() && !isScanned ? (
          <div>
            <QrCode
              value={`${
                typeof window !== "undefined" && window.location.origin
              }/queue/status?org=${params.orgId}&id=${queueId}`}
            />

            <Button
              dark
              type="button"
              className="mt-4 font-normal w-full"
              action={handleCancel}
            >
              Cancel Queue
            </Button>
          </div>
        ) : (
          <div className="space-y-2 flex flex-col">
            <input
              type="text"
              value={name}
              maxLength={7}
              onChange={(e) => setName(e.target.value)}
              className="px-6 py-3 outline-none bg-secondary-200 border border-secondary-100 rounded"
              placeholder="Enter your name"
            />

            <Button
              type="button"
              action={() => {
                if (!name) {
                  toast.error("Please enter your name.");
                } else {
                  setModalOpen(true);
                }
              }}
            >
              Generate QR Code
            </Button>
          </div>
        )}
      </div>
    </QueueContainer>
  );
}
