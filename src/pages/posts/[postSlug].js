import Layout from "@/container/layout";
import http from "@/services/httpRequest";

const PostList = ({posts}) => {
    console.log(posts);
  return (
    <Layout>
      <div className="max-w-screen-lg px-2 mx-auto">
        <h1>Psot list page</h1>
      </div>
    </Layout>
  );
};

export default PostList;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const {
    data: { data },
  } = await http.get(`/posts/${query.postSlug}`);
  return {
    props: {
      posts: data,
    },
  };
}
