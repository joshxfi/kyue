import Link from "next/link";
import { Icons } from "@/components/utils";
import { QrCode } from "@/components/qrCode";

export default function Queue({ params }: { params: { orgId: string } }) {
  return (
    <div className="max-w-screen-sm mx-auto px-8 pt-16 font-grotesk">
      <div className="relative flex items-center justify-center">
        <Link href="/" className="text-3xl text-primary-200 absolute left-0">
          <Icons.arrowLeft />
        </Link>
        <p className="font-grotesk text-lg">Scan to Join Queue</p>
      </div>

      <div>
        <div className="pt-24 flex flex-col justify-center items-center">
          <QrCode orgId={params.orgId} />
        </div>
      </div>
    </div>
  );
}
