import React from "react";
import NextBreadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Link from "next/link";
import { useRouter } from "next/router";
const LayoutBreadCrumbs = () => {
  const router = useRouter();
  const { asPath } = router;
// Either lookup a nice label for the subpath, or just titleize it
//   const getDefaultTextGenerator = React.useCallback((subpath) => {
//     return {
//       "post": "Posts",
//       "settings": "User Settings",
//     }[subpath] || titleize(subpath);
//   }, [])
  // Assuming `fetchAPI` loads data from the API and this will use the
  // parameter name to determine how to resolve the text. In the example,
  // we fetch the post from the API and return it's `title` property
//   const getTextGenerator = React.useCallback((param, query) => {
//     return {
//       "post_id": () => await fetchAPI(`/posts/${query.post_id}/`).title,
//     }[param];
//   }, []);

  if (asPath !== "/") {
    return (
      <div className="w-full bg-white py-4 shadow-lg mt-10">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto container p-2">
          <Link href={"/"} className="text-3xl font-bold text-slate-800">
            {asPath.split("/")[1]}
          </Link>
          <NextBreadcrumbs />
        </div>
      </div>
    );
  }
};

export default LayoutBreadCrumbs;
