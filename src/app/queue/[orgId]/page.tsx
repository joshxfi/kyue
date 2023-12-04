"use client";

import { nanoid } from "nanoid";
import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { db } from "@/lib/firebase";
import { QrCode } from "@/components/qrCode";
import { Button, Modal, QueueContainer } from "@/components/utils";
import { toast } from "sonner";

export default function Queue({ params }: { params: { orgId: string } }) {
  const [queueId, setQueueId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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

      <div className="pt-32 flex flex-col justify-center items-center">
        {!queueId ? (
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
              action={() => setQueueId("")}
            >
              Cancel Queue
            </Button>
          </div>
        )}
      </div>
    </QueueContainer>
  );
}
