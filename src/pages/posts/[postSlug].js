import Author from "@/components/author/author";
import SocialPost from "@/components/posts/SocialPost";
import PostComment from "@/components/posts/comments";
import Prose from "@/components/typography/prose";
import Layout from "@/container/layout";
import http from "@/services/httpRequest";
import { PlayCircle, User } from "iconsax-react";
import React, { useEffect, useState } from "react";

const PostList = ({ posts }) => {
  const [openComment, setOpenComment] = useState(false);
  useEffect(() => {
    if (openComment) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [openComment]);
  return (
    <Layout>
      <div className="max-w-screen-xl px-2 mx-auto mt-8">
        {/* post  Social header*/}
        <SocialPost
          date={posts.updatedAt}
          url={posts.slug}
          onPostComment={() => setOpenComment(true)}
          likeCount={posts.likesCount}
        />
        {/* posts detail */}
        <div className="flex w-full flex-col gap-y-6 mt-10">
          <h1 className="text-3xl py-3 track line-clamp-5 w-full md:text-4xl lg:text-5xl text-slate-800 font-bold">
            {posts.titleBrief}
          </h1>
          {/* post author */}
          <div className="w-full flex flex-row items-center justify-between pt-4">
            <Author
              name={posts.author.name}
              biography={posts.author.biography}
            />
            <div className="flex items-center gap-x-2 flex-row">
              <span className="text-slate-400 text-sm font-semibold">
                {posts.readingTime} min
              </span>
              <span className="w-2 h-2 bg-slate-400 rounded-full"></span>
              <div className="hidden lg:flex items-center gap-x-2 hover:underline cursor-pointer">
                <h2 className="text-sm font-semibold text-slate-800">
                  Try Audio
                </h2>
                <PlayCircle
                  variant="Bulk"
                  size={24}
                  className=" fill-slate-800"
                />
              </div>
            </div>
          </div>
          {/* typography */}
          <Prose text={posts.text} />
          <PostComment
            openComment={openComment}
            closeComment={() => setOpenComment(false)}
            comments = {posts.comments}
          />
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
