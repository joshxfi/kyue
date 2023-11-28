"use client";

import { toast } from "sonner";
import { Html5Qrcode } from "html5-qrcode";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import { Icons } from "@/components/utils";
import { isMobile } from "react-device-detect";

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

                router.push(`/demo/status/${decodedText}`);
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
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      {!hasPerms && (
        <div className="h-auto max-w-[600px] w-full flex flex-col items-center justify-center space-y-8 rounded-xl">
          <Icons.qrcode className="text-7xl" />

          <button
            type="button"
            onClick={scanQrCode}
            className="rounded-md bg-zinc-900 text-white border border-zinc-800 lg:px-8 lg:py-4 px-6 py-3 font-medium"
          >
            Request Camera Access
          </button>
        </div>
      )}
      <div id="reader" className="w-[600px]"></div>
    </div>
  );
}
