import { Typography } from "@mui/material";
import Link from "next/link";

const Crumb = ({ text, href, last = false }) => {
  if (last) {
    return <Typography>{text}</Typography>;
  }
  return <Link href={href}>{text}</Link>;
};

export default Crumb;
