// src/components/results/SignatureBlock.jsx

export default function SignatureBlock({ timestamp }) {
  return (
    <footer className="hidden print:block text-center text-xs text-black mt-8 border-t pt-2">
      Middle Tennessee State University · Jones College of Business · Real Estate Studies Program
      <br />
      Report generated on {timestamp}
    </footer>
  );
}
