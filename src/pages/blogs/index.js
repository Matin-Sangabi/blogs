import Accordions from "@/components/accordion/accordions";
import SearchBar from "@/components/searchBar/searchbar";
import Layout from "@/container/layout";
const categoriesNavigation = [
  { name: "React.js", path: "React.js" },
  { name: "Vue.js", path: "Vue.js" },
  { name: "Nuxt.js", path: "Nuxt.js" },
  { name: "next.js", path: "next.js" },
];
const topPostsNAvigation = [
  { title: "React best js libary" },
  { title: "NExt best js libary" },
  { title: "vue.js in world verry simple and like it" },
  { title: "fluuter  Vs React-native" },
];
const BlogPages = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto container mt-8">
        <div className="grid md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] gap-4 ">
          {/* sidebar */}
          <div className="hidden md:flex flex-col gap-y-7 md:row-span-2 md:col-span-3 select-none ">
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
          </div>
          {/* main */}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPages;
