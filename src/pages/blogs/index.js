import AccordionHeader from "@/components/accordion/accordionHeader";
import SearchBar from "@/components/searchBar/searchbar";
import Layout from "@/container/layout";
import { useState } from "react";

const BlogPages = () => {
  const [openAccordion, setAccordion] = useState(false);
  const accordionHandleClick = () => {
    setAccordion(!openAccordion);
  };
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto container mt-8">
        <div className="grid md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] gap-4 ">
          {/* sidebar */}
          <div className="hidden md:flex flex-col gap-y-10 md:row-span-2 md:col-span-3 select-none ">
            {/* search bar */}
            <SearchBar />
            {/* category accordion */}
            <div className="flex flex-col rounded-xl bg-white bg-opacity-50 shadow-md py-2 px-4">
              {/* accordion header */}
              <AccordionHeader
                accordion={openAccordion}
                onClikc={accordionHandleClick}
              />
              {/* accordion content */}
              
            </div>
          </div>
          {/* main */}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPages;
