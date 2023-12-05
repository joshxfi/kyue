"use client";

import { toast } from "sonner";
import { useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "@/lib/firebase";
import { QueueData } from "@/types";
import { Loader } from "@/components";
import { Card, Button, QueueContainer, Modal } from "@/components/utils";

export default function Status() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState({} as QueueData);

  const [customers, loading] = useCollection(
    query(collection(db, "queue"), where("status", "==", "scanned"))
  );
  const [serving, _loading] = useCollection(
    query(collection(db, "queue"), where("status", "==", "serving"))
  );

  const handleServe = async () => {
    try {
      await updateDoc(doc(db, "queue", selected.id), {
        status: "serving",
      });
      setModalOpen(false);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleDone = async (data: QueueData) => {
    try {
      await deleteDoc(doc(db, "queue", data.id));
      toast.success(`Transaction completed for ${data.name}.`);
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <QueueContainer title="Cashier 1">
      <Modal
        isOpen={modalOpen}
        title="Serve Customer"
        description={`Ready to serve ${selected.name}? This will notify the customer.`}
        onClose={() => setModalOpen(false)}
        handleConfirm={[
          {
            text: "Proceed",
            fn: handleServe,
          },
        ]}
      />

      <div className="min-h-screen">
        {loading ? (
          <Loader className="h-12 w-12 mt-32 mx-auto" />
        ) : (
          <>
            {serving?.docs && serving.docs.length > 0 && (
              <>
                <p className="mb-3 mt-24 text-zinc-400 text-sm">
                  Currently Serving
                </p>
                <div className="space-y-4">
                  {serving?.docs.map((doc) => {
                    const data = { id: doc.id, ...doc.data() } as QueueData;

                    return (
                      <div
                        key={doc.id}
                        className="bg-secondary-200 p-6 rounded-xl border border-secondary-100 flex items-center space-x-4 justify-between"
                      >
                        <div>
                          <h3 className="text-lg">
                            {data.queueNumber.toString()}
                          </h3>
                          <p className="text-zinc-400">{data.name}</p>
                        </div>

                        <Button
                          action={() => handleDone(data)}
                          className="font-normal"
                          type="button"
                        >
                          Done
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {customers?.docs && customers.docs.length > 0 && (
              <>
                <p className="mb-3 mt-24 text-zinc-400 text-sm">
                  Pending Customers
                </p>
                <div className="gap-4 grid grid-cols-2">
                  {customers?.docs.map((doc) => {
                    const data = { id: doc.id, ...doc.data() } as QueueData;

                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => {
                          setSelected(data);
                          setModalOpen(true);
                        }}
                        className="text-left"
                      >
                        <Card
                          heading={data.queueNumber.toString()}
                          subheading={`Name/ID: ${data.name}`}
                        />
                      </button>
                    );
                  })}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </QueueContainer>
  );
}
