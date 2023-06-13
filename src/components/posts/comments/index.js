import { Heart, More, Send2, User } from "iconsax-react";
import Comment from "./comment";

const PostComment = ({ openComment, closeComment }) => {
  return (
    <div
      className={`fixed inset-0 pt-20 w-full flex  flex-col justify-between z-50 overflow-hidden ${
        openComment ? "visible" : "invisible"
      }`}
    >
      <div
        className={`fixed inset-0 bg-gray-400 bg-opacity-70 -z-10 ${
          openComment ? "opacity-100" : "opacity-0"
        } transition-all ease-in-out duration-100`}
        onClick={closeComment}
      ></div>
      <div
        className={`flex-1 px-2  mx-auto ${
          openComment ? "translate-y-0" : "translate-y-full"
        } transition-all ease-in-out duration-200`}
      >
        <div className="max-w-screen-sm px-2 py-4 mx-auto container bg-slate-50 rounded-t-3xl shadow-md h-full flex flex-col justify-between z-50">
          {/* comment header */}
          <div className="flex flex-col gap-y-2 items-center max-w-screen-md">
            <span className="h-1 w-10 cursor-pointer rounded-2xl bg-gray-500"></span>
            <h1 className="text-center font-semibold text-slate-700">
              Comments
            </h1>
          </div>
          {/* Comments */}
          <div className="flex flex-col gap-y-2 flex-1 pt-8 px-4 max-h-[500px] scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-gray-400  scrollbar-track-gray-100  overflow-y-auto">
            {/* Comment */}
            {[1, 2, 3, 4].map((_, index) => (
              <Comment key={index} />
            ))}
          </div>

          {/* Insert Comment */}
          <div className="flex items-center gap-x-2 pt-2 border-t ">
            <span className="w-10 h-10 rounded-full flex items-center justify-center bg-cyan-900 text-white">
              <User />
            </span>
            <div className="flex items-center gap-x-2 relative w-full">
              <input
                className="border-none outline-none w-full py-2 ring-1 ring-gray-300 rounded-lg px-2 focus:shadow-lg focus:ring-gray-700 transition-all ease-in-out duration-200 font-semibold"
                placeholder="Enter Comment"
              />
              <button className="p-2 rounded-lg text-white bg-cyan-900">
                <Send2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostComment;
/**
 * <div
      className={`fixed inset-0 flex pt-20 w-full flex-col  bg-gray-400 overflow-hidden bg-opacity-70   ${
        openComment ? "opacity-100 z-40" : "opacity-0 -z-10"
      } transition-all ease-in-out duration-100 overflow-hidden `}
      onClick={closeComment}
    >
      <div className=""></div>
      <div
        className={`flex-1 px-2 w-full mx-auto  ${
          openComment ? "translate-y-0" : "translate-y-full"
        } transition-all ease-in-out duration-300`}
      >
       
      </div>
    </div>
 */
