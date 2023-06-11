import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ArchiveAdd, Copy, CopySuccess, More, UserAdd } from "iconsax-react";
import { toast } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

const MenuAccordion = ({ url }) => {
  const [copied, setCopied] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const coppyHandler = () => {
    setCopied(true);
    toast.success("link copied to clipboard", {
      icon: <CopySuccess className="text-green-600" />,
    });
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        className="text-slate-600  hover:text-salte-800 transition-all ease-in-out duration-200 text-2xl px-2  py-1 hover:bg-gray-300 rounded-lg"
      >
        <More />
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="flex flex-col gap-y-5"
      >
        <div className="flex items-center gap-x-2 cursor-pointer px-4 py-2 w-full hover:bg-gray-300 hover:bg-opacity-70 transition-all ease-in-out duration-150">
          <UserAdd size={20} variant="Bulk" className=" text-cyan-900" />
          <span className="text-sm">Follow</span>
        </div>
        <div className="flex items-center gap-x-2 cursor-pointer px-4 py-2 w-full hover:bg-gray-300 hover:bg-opacity-70 transition-all ease-in-out duration-150">
          <ArchiveAdd size={20} variant="Bulk" className="text-cyan-900" />
          <span className="text-sm">Save </span>
        </div>
        <div className="px-4 py-2 w-full hover:bg-gray-300 hover:bg-opacity-70 transition-all ease-in-out duration-150 ">
          <CopyToClipboard
            text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${url}`}
            onCopy={coppyHandler}
          >
            <button type="button" className=" flex items-center gap-x-2">
              {copied ? (
                <>
                  <CopySuccess
                    size={20}
                    variant="Bulk"
                    className="text-green-600"
                  />
                  <span className="text-xs text-green-600">copied</span>
                </>
              ) : (
                <>
                  <Copy size={20} variant="Bulk" className="text-cyan-900" />
                  <span className="text-sm">Copy url</span>
                </>
              )}
            </button>
          </CopyToClipboard>
        </div>
      </Menu>
    </>
  );
};

export default MenuAccordion;
/**<CopySuccess className="text-green-600" />
                  <span>link copied</span> */
