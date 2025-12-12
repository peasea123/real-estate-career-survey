import { QRCodeSVG } from "qrcode.react";

export default function QR({ value, label }) {
  return (
    <div className="flex flex-col items-center text-center">
      <QRCodeSVG value={value} size={96} />
      {label && (
        <p className="mt-1 text-xs text-slate-600 print:text-black">{label}</p>
      )}
    </div>
  );
}
