import postsData from "../../../../data/posts";
import Post from "./post";

export function BlogSection() {
  return (
    <div className="px-24 py-8 flex flex-col mt-16 gap-8">
      <h1 className="text-5xl font-bold text-center ">Blogs</h1>
      <p className="text-2xl text-center">
        Learn more about how MeaVitae sees the world
      </p>
      <div className="flex mt-8 justify-between">
        {postsData.map((post, index) => (
          <Post
            title={post.title}
            description={post.description}
            img={post.img}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
