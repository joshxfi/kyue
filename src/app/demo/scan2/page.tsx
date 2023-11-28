"use client";

import { QrScanner } from "@/components/qrscanner";
import { useState } from "react";

export default function Scan() {
  const [decodedResults, setDecodedResults] = useState([] as any);
  const onNewScanResult = (decodedText: any, decodedResult: any) => {
    console.log("App [result]", decodedResult);
    setDecodedResults((prev: any) => [...prev, decodedResult]);
  };

  return (
    <div className="pt-24 flex flex-col justify-center items-center">
      <QrScanner
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />

      {decodedResults.map((d: any) => (
        <p key={d}>{d}</p>
      ))}
    </div>
  );
}
