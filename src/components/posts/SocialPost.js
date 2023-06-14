import { DateCalculate } from "@/utils/DateCalculate";
import {
  Blogger,
  Heart,
  Message,
} from "iconsax-react";
import Link from "next/link";
import MenuAccordion from "../menuAccordion/menuAccordion";
const SocialPost = ({ date , url , onPostComment  , likeCount}) => {

  return (
    <div className="p-2 w-full flex flex-col items-end justify-between sticky top-14 backdrop-blur-lg blur-0 opacity-100 lg:flex-row lg:items-center gap-y-2">
      <div className="hidden lg:flex items-center gap-x-4">
        <div className="flex  items-center gap-x-1 text-base font-semibold text-slate-800">
          <h1>Published in</h1>
          <Blogger />
          <h1>Blogger</h1>
        </div>
        <span className="w-2 h-2 bg-slate-400 rounded-full "></span>
        <span className="text-slate-500 text-sm">{DateCalculate(date)}</span>
      </div>
      {/* socail media burron */}
      <div className="flex items-center gap-x-8">
        <div className="relative">
        <button className="text-slate-700 hover:text-red-800 group">
          <Heart className="group-hover:fill-rose-600" />
        </button>
        <span className="text-sm">{likeCount}</span>
        </div>
        <button onClick={onPostComment} className="text-slate-700 hover:text-orange-800">
          <Message />
        </button>
        <MenuAccordion url={url} />
      </div>
    </div>
  );
};

export default SocialPost;
/**
 * <CopyToClipboard text="matin sangabi" onCopy={coppyHandler}>
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
 */
