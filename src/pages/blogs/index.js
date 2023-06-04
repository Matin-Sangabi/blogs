import SearchBar from "@/components/searchBar/searchbar";
import Layout from "@/container/layout";

const BlogPages = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto container mt-8">
        <div className="grid md:grid-cols-12 md:grid-rows-[70px_minmax(300px,_1fr)] gap-4">
          {/* sidebar */}
          <div className="hidden md:block md:row-span-2 md:col-span-3 select-none">
            {/* search bar */}
            <SearchBar />
            {/* accordion */}
            
          </div>
          {/* main */}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPages;
