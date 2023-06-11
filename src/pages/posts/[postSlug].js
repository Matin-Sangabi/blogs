import SocialPost from "@/components/posts/SocialPost";
import Layout from "@/container/layout";
import http from "@/services/httpRequest";

const PostList = ({ posts }) => {
  console.log(posts);
  return (
    <Layout>
      <div className="max-w-screen-xl px-2 mx-auto mt-8">
        {/* post  Social header*/}
        <SocialPost date={posts.updatedAt} url={posts.slug} />
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
