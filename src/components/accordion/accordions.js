import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: ``,
  borderRadius: "20px",
  fontWeight: "bold",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary expandIcon={<ArrowDown2 size={16} />} {...props} />
))(({ theme }) => ({
  fontWeight: "bold",
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
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
        <Typography
          fontWeight={"bold"}
          className="text-slate-800 text-base font-bold"
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <ul className="flex flex-col gap-y-3 text-slate-800 font-semibold max-h-96 overflow-y-auto">
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
  return (
    <>
      <Link
        href={"/blogs"}
        className="px-6 py-2 font-semibold block border-b border-b-slate-200 last:border-b-0 last:pb-4 "
      >
        All Categories
      </Link>
      {navigation.map((nav, i) => (
        <Link
          key={i}
          href={`/blogs/${nav.englishTitle}`}
          className="px-6 py-2 font-semibold block border-b border-b-slate-200 last:border-b-0 last:pb-4 "
        >
          {nav.title}
        </Link>
      ))}
    </>
  );
}

function TopPostsAccordion({ topPosts }) {
  return topPosts.map((post, i) => (
    <Link
      key={i}
      href={`/posts`}
      className="flex px-6 items-start gap-x-4 text-slate-800 hover:bg-slate-800 hover:text-slate-300 rounded-lg transition-all ease-in-out duration-150 last:pb-4"
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
