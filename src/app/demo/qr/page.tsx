"use client";

import QRCode from "react-qr-code";

export default function Scan() {
  return (
    <div className="pt-24 flex flex-col justify-center items-center">
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: "512px",
          width: "100%",
          padding: "24px",
          background: "white",
        }}
      >
        <QRCode
          size={512}
          bbox="2rem"
          fgColor="#0073f5"
          style={{
            height: "auto",
            maxWidth: "100%",
            width: "100%",
          }}
          value="hLJxOKV2Lg9LizAiwBxANmTR0e_NcUMQoUoj"
          viewBox={`0 0 512 512`}
        />
      </div>
    </div>
  );
}
