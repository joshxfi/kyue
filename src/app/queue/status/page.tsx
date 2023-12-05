"use client";

import { toast } from "sonner";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  collection,
  deleteDoc,
  doc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

import { db } from "@/lib/firebase";
import { QueueData } from "@/types";
import { Loader } from "@/components";
import { Card, Button, QueueContainer, Modal } from "@/components/utils";

export default function Status() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queueId = searchParams.get("id") ?? "";
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [value, loading] = useDocument(doc(db, "queue", queueId));
  const [serving, _loading] = useCollection(
    query(collection(db, "queue"), where("status", "==", "serving"))
  );
  const { name, queueNumber, status } = (value?.data() as QueueData) ?? {};

  const handleCancel = async () => {
    try {
      setModalOpen(false);
      setIsLoading(true);
      await deleteDoc(doc(db, "queue", queueId));
      router.push("/queue/scan");
      setIsLoading(false);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  useEffect(() => {
    if (!loading && !value?.exists()) {
      toast.error("Queue does not exist.");
      router.push("/queue/scan");
      return;
    }

    if (queueId && status === "fresh") {
      (async () => {
        await updateDoc(doc(db, "queue", queueId), {
          status: "scanned",
        });
      })();
    }
  }, [queueId, status, loading, value?.exists]);

  return (
    <QueueContainer title="Current Status">
      <Modal
        isOpen={modalOpen}
        title="Delete Queue"
        description="Are you sure you want to give up your queue position?"
        onClose={() => setModalOpen(false)}
        handleConfirm={[
          {
            text: "Yes, I'm sure",
            fn: handleCancel,
          },
        ]}
      />

      <div className="min-h-screen">
        {loading || isLoading ? (
          <Loader className="h-12 w-12 mt-32 mx-auto" />
        ) : (
          <>
            <div className="bg-secondary-200 rounded-xl mt-12 p-12 text-center">
              <h1 className="text-4xl mb-4">{queueNumber}</h1>
              <p className="text-zinc-400">{name}</p>
            </div>

            <div className="h-2 mt-3 bg-primary-200 rounded-full w-[60%]"></div>

            <p className="text-sm text-zinc-400 italic mt-2">
              Estimated time: 13 mins left
            </p>

            {serving?.docs && serving.docs.length > 0 && (
              <>
                <p className="mb-3 mt-24 text-zinc-400 text-sm">
                  Currently Serving
                </p>
                <div className="space-y-4">
                  {serving?.docs.map((doc) => {
                    const data = doc.data() as QueueData;

                    return (
                      <Card
                        key={doc.id}
                        heading={`${data.queueNumber.toString()} (${
                          data.name
                        })`}
                        subheading="Cashier 1"
                      />
                    );
                  })}
                </div>
              </>
            )}

            <Button
              className="mt-8 w-full font-normal"
              action={() => setModalOpen(true)}
            >
              Cancel Queue
            </Button>
          </>
        )}
      </div>
    </QueueContainer>
  );
}
