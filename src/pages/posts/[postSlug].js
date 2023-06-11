import Layout from "@/container/layout";
import http from "@/services/httpRequest";
import { Blogger, Facebook, Instagram, Link21, More } from "iconsax-react";
import Link from "next/link";
const PostList = ({ posts }) => {
  return (
    <Layout>
      <div className="max-w-screen-xl px-2 mx-auto mt-8">
        {/* post  Social header*/}
        <div className="p-2 w-full flex flex-col items-start justify-between lg:flex-row lg:items-center gap-y-2">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1 text-base font-semibold text-slate-800">
              <h1>Published in</h1>
              <Blogger />
              <h1>Blogger</h1>
            </div>
            <span className="w-2 h-2 bg-slate-400 rounded-full "></span>
            <span className="text-slate-500 text-sm">{new Date(posts.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}</span>
          </div>
          {/* socail media burron */}
          <div className="flex items-center gap-x-8">
            <Link href={``} className="text-slate-700 hover:text-blue-800">
              <Facebook />
            </Link>
            <Link href={``} className="text-slate-700 hover:text-blue-800">
              <Instagram />
            </Link>
            <Link href={``} className="text-slate-700 hover:text-orange-800">
              <Link21 />
            </Link>
            <button type="button" className="text-slate-600 hover:text-gray-900"><More/></button>
          </div>
        </div>
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
