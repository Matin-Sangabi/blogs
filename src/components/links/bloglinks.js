import Link from "next/link";

const BlogLinks = ({ children, href, className = "" }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default BlogLinks;
