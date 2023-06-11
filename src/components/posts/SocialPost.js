import { DateCalculate } from "@/utils/DateCalculate";
import {
  Blogger,
  Facebook,
  Instagram,
  Link21,
  More,
  CopySuccess,
  Copy,
} from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";
const SocialPost = ({ date }) => {
  const [copied, setCopied] = useState(false);
  const coppyHandler = () => {
    setCopied(true);
    toast.success("link copied to clipboard", {
      icon: <CopySuccess className="text-green-600" />,
    });
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  
  return (
    <div className="p-2 w-full flex flex-col items-start justify-between lg:flex-row lg:items-center gap-y-2">
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1 text-base font-semibold text-slate-800">
          <h1>Published in</h1>
          <Blogger />
          <h1>Blogger</h1>
        </div>
        <span className="w-2 h-2 bg-slate-400 rounded-full "></span>
        <span className="text-slate-500 text-sm">{DateCalculate(date)}</span>
      </div>
      {/* socail media burron */}
      <div className="flex items-center gap-x-8">
        <Link href={``} className="text-slate-700 hover:text-blue-800">
          <Facebook />
        </Link>
        <Link href={``} className="text-slate-700 hover:text-blue-800">
          <Instagram />
        </Link>
        <Link href={``} className="text-slate-700 hover:text-orange-800">
          <Link21 />
        </Link>
        <CopyToClipboard text="matin sangabi" onCopy={coppyHandler}>
          <button type="button" className="text-slate-500 hover:text-gray-800">
            {copied ? (
              <div className="flex items-center gap-x-2 p-2 text-green-600 ">
                <CopySuccess className="text-green-600" />
                <span>link copied</span>
              </div>
            ) : (
              <Copy />
            )}
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default SocialPost;
/**
 * <CopyToClipboard text="matin sangabi" onCopy={coppyHandler}>
          <button type="button" className="text-slate-500 hover:text-gray-800">
            <Link21 />
          </button>
        </CopyToClipboard>
 */
