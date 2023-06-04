import { ArrowDown2 } from "iconsax-react";

const AccordionHeader = ({ onClikc, accordion }) => {
  return (
    <div
      className="flex items-center justify-between cursor-pointer"
      onClick={onClikc}
    >
      <span className="text-xl font-bold text-slate-800">Categories</span>
      <span
        className={`text-slate-800 ${
          accordion ? "rotate-180" : "rotate-0"
        } transition-all ease-in-out duration-300`}
      >
        <ArrowDown2 size={16} />
      </span>
    </div>
  );
};

export default AccordionHeader;
