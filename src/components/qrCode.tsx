"use client";

import QRCode from "react-qr-code";

export function QrCode({ value }: { value: string }) {
  return (
    <div className="h-auto mx-auto max-w-[250px] w-full p-6 bg-white rounded-xl">
      <QRCode
        size={250}
        bbox="2rem"
        fgColor="#0073f5"
        style={{
          height: "auto",
          maxWidth: "100%",
          width: "100%",
        }}
        value={value}
        viewBox={`0 0 250 250`}
      />
    </div>
  );
}
