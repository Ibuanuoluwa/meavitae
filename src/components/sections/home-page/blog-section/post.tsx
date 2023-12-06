import styled from "styled-components";

type postProps = {
  img: string;
  title: string;
  description: string;
};

function Post({ img, title, description }: postProps) {
  return (
    <PostStyle className="w-[32%] flex flex-col">
      <div>
        <img src={img} alt={title} className="w-full" />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg">
        <span> {description}</span>

        <a href="/" className="text-purple decoration-none ml-2">
          Read More
        </a>
      </p>
    </PostStyle>
  );
}

const PostStyle = styled.div`
  p {
    span {
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export default Post;
