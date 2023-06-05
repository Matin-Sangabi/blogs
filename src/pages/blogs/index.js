import Accordions from "@/components/accordion/accordions";
import BlogLinks from "@/components/links/bloglinks";
import SearchBar from "@/components/searchBar/searchbar";
import Layout from "@/container/layout";
import { categoriesNavigation } from "@/utils/CategoriesNavigation";
import {
  Heart,
  HeartTick,
  ArchiveAdd,
  ArchiveTick,
  ArchiveSlash,
  MessageText,
  Clock,
} from "iconsax-react";

const topPostsNAvigation = [
  { title: "React best js libary" },
  { title: "NExt best js libary" },
  { title: "vue.js in world verry simple and like it" },
  { title: "fluuter  Vs React-native" },
];
const BlogPages = () => {
  return (
    <Layout>
      <div className="grid md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] gap-6 mt-6">
        {/* sidebar */}
        <section className="hidden md:flex flex-col gap-y-7 md:row-span-2 md:col-span-3 select-none ">
          {/* search bar */}
          <SearchBar />
          {/* category accordion */}
          <Accordions
            panel={"panel2"}
            title={"Categories"}
            accordionNavigation={categoriesNavigation}
          />
          {/* Top postes accordion */}
          <Accordions
            panel={"panel1"}
            title={"Top Posts"}
            accordionNavigation={topPostsNAvigation}
          />
        </section>
        {/* main */}
        <section className="md:col-span-9 grid grid-cols-6 gap-8 px-4 md:px-0">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((_, i) => (
            <div
              key={i}
              className="pb-2 bg-white rounded-lg shadow-md col-span-6 md:col-span-3 lg:col-span-2 flex flex-col gap-y-2"
            >
              {/* blogs img*/}
              <BlogLinks href={`/posts/`}>
                <div className="aspect-w-16 aspect-h-9 ">
                  <img
                    src={`/images/blogs/React.js.png`}
                    alt=""
                    className="w-full h-full object-cover object-center rounded-t-lg shadow-md"
                  />
                </div>
              </BlogLinks>
              {/* blog content */}
              <div className="flex flex-col items-start py-2 px-4 flex-1 justify-between">
                <span className="text-gray-400 text-sm font-normal">
                  React.js & next.js -{" "}
                  {new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                {/* blog data */}
                <BlogLinks href={`/posts/`}>
                  <h1 className="text-lg text-slate-800 font-bold">
                    {i === 2
                      ? "React.js with node.js complete this in order"
                      : "React.js vs Next.js"}
                  </h1>
                </BlogLinks>
                <h2 className="text-gray-500 font-normal pt-2">
                  next.js complete the react.js and freamwork for React and best
                  in SSR and SSG .
                </h2>
                {/* blog interaction */}
                <div className="flex flex-col gap-y-3 pt-3 w-full">
                  <BlogLinks href={"/blogs"}>
                    <div className="flex items-center gap-x-2">
                      <span className="w-7 h-7 rounded-full bg-cyan-800 flex items-center justify-center"></span>
                      <span className="text-xs text-slate-400">
                        Matin sangabi
                      </span>
                    </div>
                  </BlogLinks>
                  <div className="flex w-full  items-center justify-between">
                    <div className="flex gap-x-2">
                      <button className="p-1 flex items-center gap-x-2 rounded-md ring-1 ring-gray-600 hover:bg-gray-500 hover:text-slate-100 text-xs">
                        <MessageText size={14} />4
                      </button>
                      <button className="p-1 flex items-center gap-x-2 rounded-md ring-1 group ring-gray-600 hover:bg-gray-500 hover:text-slate-100 text-xs">
                        <Heart
                          className="group-hover:fill-rose-500 group-hover:text-rose-600"
                          size={14}
                        />
                        4
                      </button>
                      <button className="p-1 flex items-center gap-x-2 rounded-md ring-1 group ring-gray-600 hover:bg-gray-500 group hover:text-slate-100 text-xs">
                        <ArchiveAdd
                          size={14}
                          className="group-hover:fill-slate-100"
                        />
                      </button>
                    </div>
                    <div className="flex items-center gap-x-1 text-gray-400 text-sm">
                      <span className="">
                        <Clock size={14} />
                      </span>
                      <span>12 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default BlogPages;
