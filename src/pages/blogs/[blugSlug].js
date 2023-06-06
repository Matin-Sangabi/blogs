import BlogPage from "@/components/blogs/blogPage";
import http from "@/services/httpRequest";

const BlogSlug = ({ categories, posts }) => {
  return <BlogPage categories={categories} posts={posts} />;
};

export default BlogSlug;
export async function getServerSideProps(ctx) {
  const { data: posts } = await http.get(`posts?page=1&limit=10`);

  const { data: category } = await http.get(`post-category`);
  return {
    props: {
      posts,
      categories: category.data,
    },
  };
}
