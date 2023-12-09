import postsData from "../../../../data/posts";
import Post from "../../../common/post";

export function BlogSection() {
  return (
    <div className="md:px-20 py-8 px-6 flex flex-col  mt-8 gap-8">
      <h1 className="header-one font-bold text-center ">Blogs</h1>
      <p className="md:text-2xl text-lg text-center">
        Learn more about how MeaVitae sees the world
      </p>
      <div className="flex md:flex-row flex-col mt-8 justify-between">
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
