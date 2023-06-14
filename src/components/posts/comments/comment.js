import { Back, Heart, More, User } from "iconsax-react";

const Comment = ({ onReply, comment }) => {
  return (
    <div className="flex flex-col gap-y-4 py-3 border-b ">
      {/* Comment Author */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-900 text-white">
            <User />
          </span>
          <span className="font-semibold">Amenda</span>
          <span className="text-sm text-slate-500">Time</span>
        </div>
        <button className="rotate-90 text-slate-600">
          <More />
        </button>
      </div>
      {/* Comment Detail*/}
      <p className="text-slate-800 px-4 font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut sunt in culpa qui
        officia deserunt mollit anim id est laborum.
      </p>
      {/* comment Action */}
      <div className="flex items-center justify-end px-4">
        <button
          className="text-sm text-slate-500"
          onClick={() => onReply(comment)}
        >
          reply
        </button>
      </div>
    </div>
  );
};

export default Comment;
/**
 *
 */
