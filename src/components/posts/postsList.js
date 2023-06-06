import BlogLinks from "@/components/links/bloglinks";
import {
  Heart,
  HeartTick,
  ArchiveAdd,
  ArchiveTick,
  ArchiveSlash,
  MessageText,
  Clock,
} from "iconsax-react";

const PostsList = ({ posts }) => {
  console.log(posts);
  return (
    <section className="md:col-span-9 grid grid-cols-6 gap-8 px-4 md:px-0">
      {posts.docs.map((post, i) => (
        <div
          key={i}
          className="pb-2 bg-white rounded-lg shadow-md col-span-6 md:col-span-3 lg:col-span-2 flex flex-col gap-y-2"
        >
          {/* blogs img*/}
          <BlogLinks href={`/posts/${post.hashId}/${post.slug}`}>
            <div className="aspect-w-16 aspect-h-9 ">
              <img
                src={`${post.coverImage}`}
                alt=""
                className="w-full h-full object-cover object-center rounded-t-lg shadow-md"
              />
            </div>
          </BlogLinks>
          {/* blog content */}
          <div className="flex flex-col items-start py-2 px-4 flex-1 justify-between">
            <span className="text-gray-400 text-sm font-normal">
              {post.category.title} -
              {new Date(post.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            {/* blog data */}
            <BlogLinks href={`/posts/${post.hashId}/${post.slug}`}>
              <h1 className="text-lg text-slate-800 font-bold">{post.title}</h1>
            </BlogLinks>
            <h2 className="text-gray-400 font-normal pt-2">
              {post.titleBrief}
            </h2>
            {/* blog interaction */}
            <div className="flex flex-col gap-y-3 pt-3 w-full">
              <BlogLinks href={"/blogs"}>
                <div className="flex items-center gap-x-2">
                  <span className="w-7 h-7 rounded-full bg-cyan-800 flex items-center justify-center"></span>
                  <span className="text-xs text-slate-400">
                    {post.author.name}
                  </span>
                </div>
              </BlogLinks>
              <div className="flex w-full  items-center justify-between">
                <div className="flex gap-x-2">
                  <button className="p-1 flex items-center gap-x-2 rounded-md ring-1 ring-gray-600 hover:bg-gray-500 hover:text-slate-100 text-xs">
                    <MessageText size={14} />
                    {post.commentsCount}
                  </button>
                  <button className="p-1 flex items-center gap-x-2 rounded-md ring-1 group ring-gray-600 hover:bg-gray-500 hover:text-slate-100 text-xs">
                    {post.isLiked ? (
                      <HeartTick
                        className="group-hover:fill-rose-500 group-hover:text-rose-600"
                        size={14}
                      />
                    ) : (
                      <Heart
                        className="group-hover:fill-rose-500 group-hover:text-rose-600"
                        size={14}
                      />
                    )}
                    {post.likesCount}
                  </button>
                  <button className="p-1 flex items-center gap-x-2 rounded-md ring-1 group ring-gray-600 hover:bg-gray-500 group hover:text-slate-100 text-xs">
                    {post.isbookmarked ? (
                      <ArchiveTick size={14} className="fill-slate-100" />
                    ) : (
                      <ArchiveAdd
                        size={14}
                        className="group-hover:fill-slate-100"
                      />
                    )}
                  </button>
                </div>
                <div className="flex items-center gap-x-1 text-gray-400 text-sm">
                  <span className="">
                    <Clock size={14} />
                  </span>
                  <span>{post.readingTime} min</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PostsList;
