import BlogPage from "@/components/blogs/blogPage";
import http from "@/services/httpRequest";

const Blogs = ({ categories, posts }) => {
  return <BlogPage categories={categories} posts = {posts} />;
};

export default Blogs;

export async function getServerSideProps(ctx) {
  const { data: posts } = await http.get(`posts?page=1&limit=10`);
  const { data: category } = await http.get(`post-category`);
  return {
    props: {
      posts: posts.data,
      categories: category.data,
    },
  };
}
