import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useRouter } from "next/router";
import Crumb from "./Crumb";
import { useMemo } from "react";
const NextBreadcrumbs = () => {
  const router = useRouter();

  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathWithOutQuery = router.asPath.split("?")[0];
      // break down the path between "/" and removing empty ent
      const asPathNestedRoutes = asPathWithOutQuery
        .split("/")
        .filter((r) => r.length > 0);
      //crumb object for each one
      const crumbList = asPathNestedRoutes.map((subpath, idx) => {
        // We can get the partial nested route for the crumb
        // by joining together the path parts up to this point.
        const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        const text = subpath;
        return { href, text };
      });
      //default : home
      return [{ href: "/", text: "home" }, ...crumbList];
    },
    [router]
  );
  
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {breadcrumbs.map((crumb, i) => (
        <Crumb key={i} {...crumb} last={i === breadcrumbs.length - 1} />
      ))}
    </Breadcrumbs>
  );
};

export default NextBreadcrumbs;
