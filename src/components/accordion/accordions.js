import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: ``,
  borderRadius: "20px",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const Accordions = ({ panel, title, accordionNavigation }) => {
  const [expended, setExpended] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpended(newExpanded ? panel : false);
  };
  return (
    <Accordion expanded={expended === panel} onChange={handleChange(panel)}>
      <AccordionSummary
        expandIcon={<ArrowDown2 size={16} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        className="bg-gray-50 border-none outline-none ring-0 text-sm rounded-2xl"
      >
        <Typography className="text-slate-800 text-base font-bold">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="">
        <ul className="flex flex-col gap-y-3 text-slate-800 font-semibold ">
          {panel === "panel1" ? (
            <TopPostsAccordion topPosts={accordionNavigation} />
          ) : (
            <CategoriesNavigation navigation={accordionNavigation} />
          )}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordions;

function CategoriesNavigation({ navigation }) {
  return navigation.map((nav, i) => (
    <Link
      key={i}
      href={`/blogs/${nav.path}`}
      className="w-full py-2 border-b border-b-slate-800 last:border-b-0"
    >
      {nav.name}
    </Link>
  ));
}

function TopPostsAccordion({ topPosts }) {
  console.log(topPosts);
  return topPosts.map((post, i) => (
    <Link
      key={i}
      href={`/posts`}
      className="flex p-2 items-start gap-x-4 text-slate-800"
    >
      <span className="text-3xl font-bold">{i + 1}</span>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">{post.title}</h1>
        <span className="text-sm text-slate-500">categorie - date</span>
      </div>
    </Link>
  ));
}
/**
 * !post href
 * /posts/${post.hashId}/${post.slug}
 */
