import { SearchNormal1 } from "iconsax-react";
const SearchBar = () => {
  return (
    <div className="flex items-center justify-between relative p-2 rounded-3xl shadow-md text-slate-800 bg-white">
      <input
        type="text"
        placeholder="Search ..."
        className="bg-white w-full border-none outline-none px-2"
      />
      <span className="text-slate-800 text-sm">
        <SearchNormal1 size={20} />
      </span>
    </div>
  );
};

export default SearchBar;
