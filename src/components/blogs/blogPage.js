import Accordions from "@/components/accordion/accordions";
import PostsList from "@/components/posts/postsList";
import SearchBar from "@/components/searchBar/searchbar";
import Layout from "@/container/layout";
import { categoriesNavigation } from "@/utils/CategoriesNavigation";

const topPostsNAvigation = [
  { title: "React best js libary" },
  { title: "NExt best js libary" },
  { title: "vue.js in world verry simple and like it" },
  { title: "fluuter  Vs React-native" },
];

const BlogPage = ({ categories, posts }) => {
  return (
    <Layout>
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid md:grid-cols-12 gap-6 mt-6">
          {/* sidebar */}
          <section className="hidden md:flex flex-col gap-y-7 md:row-span-2 md:col-span-3 select-none ">
            {/* search bar */}
            <SearchBar />
            {/* category accordion */}
            <Accordions
              panel={"panel2"}
              title={"Categories"}
              accordionNavigation={categories}
            />
            {/* Top postes accordion */}
            <Accordions
              panel={"panel1"}
              title={"Top Posts"}
              accordionNavigation={topPostsNAvigation}
            />
          </section>
          {/* main */}
          <PostsList posts={posts} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
