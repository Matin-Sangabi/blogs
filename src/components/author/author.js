import { User } from "iconsax-react";

const Author = ({ name, biography }) => {
  return (
    <div className="flex items-center gap-x-3">
      <span className="w-14 h-14 rounded-full bg-gray-500 flex items-center justify-center text-slate-100">
        <User />
      </span>
      <div className="flex flex-col ">
        <span className="text-base md:text-lg text-slate-800 font-semibold first-letter:capitalize">
          {name}
        </span>
        <span className="text-sm text-slate-400 first-letter:capitalize font-semibold">
          {biography}
        </span>
      </div>
    </div>
  );
};

export default Author;
