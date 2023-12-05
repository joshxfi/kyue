"use client";

import { toast } from "sonner";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";
import { QrCode } from "@/components/qrCode";
import { Button, Modal, QueueContainer } from "@/components/utils";
import { QueueData } from "@/types";

export default function Queue({ params }: { params: { orgId: string } }) {
  const [queueId, setQueueId] = useState("none");
  const [modalOpen, setModalOpen] = useState(false);
  const [scannedModal, setScannedModal] = useState(false);

  const handleGenerate = async () => {
    const qId = nanoid(12);
    setQueueId(qId);
    setModalOpen(false);

    try {
      await setDoc(doc(db, "queue", qId), {
        orgId: params.orgId,
        timestamp: serverTimestamp(),
        isScanned: false,
      });
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const [value] = useDocument(doc(db, "queue", queueId));
  const { isScanned } = (value?.data() as QueueData) ?? {};

  useEffect(() => {
    if (value?.exists() && isScanned) {
      setScannedModal(true);
    }
  }, [value?.data()]);

  return (
    <QueueContainer title="Scan to Join Queue">
      <Modal
        isOpen={modalOpen}
        title="Get in Queue"
        description="How would you like to proceed?"
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
        {isScanned || queueId === "none" ? (
          <Button dark type="button" action={() => setModalOpen(true)}>
            Generate QR Code
          </Button>
        ) : (
          <div>
            <QrCode
              value={`${
                typeof window !== "undefined" && window.location.origin
              }/queue/status?org=${params.orgId}&id=${queueId}`}
            />

            <Button
              className="mt-8 grid place-items-center"
              dark
              type="button"
              action={() => setQueueId("none")}
            >
              Cancel Queue
            </Button>
          </div>
        )}
      </div>
    </QueueContainer>
  );
}
