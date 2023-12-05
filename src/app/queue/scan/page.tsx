"use client";

import { toast } from "sonner";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { isMobile } from "react-device-detect";

import { Icons, Button, QueueContainer } from "@/components/utils";

export default function Scan() {
  const router = useRouter();
  const [hasPerms, setHasPerms] = useState(false);

  const scanQrCode = useCallback(() => {
    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          const cameraId = devices[0].id;
          setHasPerms(true);
          const html5QrCode = new Html5Qrcode("reader", true);
          html5QrCode
            .start(
              isMobile ? { facingMode: { exact: "environment" } } : cameraId,
              {
                fps: 30,
                qrbox: { width: 250, height: 250 },
                aspectRatio: 1,
              },
              (decodedText) => {
                html5QrCode
                  .stop()
                  .then(() => {})
                  .catch((err: any) => {
                    toast.error(err.message);
                  });

                router.push(decodedText);
              },
              (_) => {}
            )
            .catch((err) => {
              toast.error(err.message);
            });
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [router]);

  return (
    <QueueContainer title="Scan a QR Code">
      <div className="mt-52">
        {!hasPerms && (
          <div className="h-auto max-w-[600px] w-full flex flex-col items-center justify-center space-y-8 rounded-xl">
            <Icons.qrcode className="text-7xl" />

            <Button type="button" action={scanQrCode}>
              Request Camera Access
            </Button>
          </div>
        )}
        <div id="reader" className="max-w-[600px] w-full"></div>
      </div>
    </QueueContainer>
  );
}
