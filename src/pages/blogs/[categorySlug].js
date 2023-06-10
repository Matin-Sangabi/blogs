import BlogPage from "@/components/blogs/blogPage";
import http from "@/services/httpRequest";
import queryString from "query-string";
const BlogSlug = ({ categories, posts }) => {
  if (!posts.docs.length) {
    return <div>loading ...</div>;
  } else {
    return <BlogPage categories={categories} posts={posts} />;
  }
};

export default BlogSlug;
export async function getServerSideProps(ctx) {
  const { query } = ctx;

  const { data: posts } = await http.get(
    `posts?${queryString.stringify(query)}`
  );

  const { data: category } = await http.get(`post-category`);
  return {
    props: {
      posts: posts.data,
      categories: category.data,
    },
  };
}
