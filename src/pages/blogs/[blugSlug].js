import BlogPage from "@/components/blogs/blogPage";
import http from "@/services/httpRequest";

const BlogSlug = ({categories}) => {
  return <BlogPage categories={categories} />;
};

export default BlogSlug;
export async function getServerSideProps(ctx) {
  const { data: category } = await http.get(`post-category`);
  return {
    props: {
      categories: category.data,
    },
  };
}
