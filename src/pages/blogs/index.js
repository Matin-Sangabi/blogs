import BlogPage from "@/components/blogs/blogPage";
import http from "@/services/httpRequest";


const Blogs = ({ categories }) => {
  return <BlogPage categories={categories} />;
};

export default Blogs;

export async function getServerSideProps(ctx) {
  const { data: category } = await http.get(`post-category`);
  return {
    props: {
      categories: category.data,
    },
  };
}
