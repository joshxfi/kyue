"use client";

import { Icons } from "@/components/utils";
import { Html5Qrcode } from "html5-qrcode";
import Link from "next/link";
import { useCallback, useState } from "react";
import { toast } from "sonner";

export default function Scan() {
  const [hasPerms, setHasPerms] = useState(false);
  const [decoded, setDecoded] = useState("");

  const scanQrCode = useCallback(() => {
    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices && devices.length) {
          const cameraId = devices[0].id;
          setHasPerms(true);
          const html5QrCode = new Html5Qrcode("reader");
          html5QrCode
            .start(
              cameraId,
              {
                fps: 30,
                qrbox: { width: 250, height: 250 },
              },
              (decodedText) => {
                setDecoded(decodedText);
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
    <div className="pt-24 flex flex-col justify-center items-center">
      {!hasPerms && (
        <div className="h-[450px] w-[600px] flex flex-col items-center justify-center space-y-8 border border-secondary-100 rounded-xl">
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

      <p className="mt-8 mb-4">{decoded}</p>

      {decoded && (
        <Link
          href={`/demo/status/${decoded}`}
          className="rounded-md bg-zinc-900 text-white border border-zinc-800 lg:px-8 lg:py-4 px-6 py-3 font-medium"
        >
          Join Queue
        </Link>
      )}
    </div>
  );
}
