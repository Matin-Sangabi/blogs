import { Heart, More, Send2, User } from "iconsax-react";

const PostComment = ({ openComment, closeComment }) => {
  return (
    <div
      className={`fixed inset-0 flex pt-20 w-full flex-col  bg-gray-400 overflow-hidden bg-opacity-70   ${
        openComment ? "opacity-100 z-50" : "opacity-0 -z-10"
      } transition-all ease-in-out duration-100 overflow-hidden `}
      // onClick={closeComment}
    >
      <div className=""></div>
      <div
        className={`flex-1 px-2 w-full mx-auto ${
          openComment ? "translate-y-0" : "translate-y-full"
        } transition-all ease-in-out duration-300`}
      >
        <div className="max-w-screen-sm px-2 py-4 mx-auto container bg-slate-50 rounded-t-3xl shadow-md h-full flex flex-col justify-between">
          {/* comment header */}
          <div className="flex flex-col gap-y-2 items-center max-w-screen-md">
            <span className="h-1 w-10 cursor-pointer rounded-2xl bg-gray-500"></span>
            <h1 className="text-center font-semibold text-slate-700">
              Comments
            </h1>
          </div>
          {/* Comments */}
          <div className="flex flex-col gap-y-2 flex-1 pt-8 px-4">
            {/* Comment */}
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
                  <More variant=""/>
                </button>
              </div>
              {/* Comment Detail*/}
              <p className="text-slate-800 px-4 font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* comment Action */}
              <div className="flex items-center justify-between px-4">
                <button className=""><Heart /></button>
                <button>reply</button>
              </div>
            </div>
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
