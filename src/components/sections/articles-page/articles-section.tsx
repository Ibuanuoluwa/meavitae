import React from "react";
import styled from "styled-components";
import searchIcon from "../../../assets/icons/search-icon.svg";
import filterIcon from "../../../assets/icons/filter-icon.svg";
import Post from "../../common/post";
import postsData from "../../../data/posts";

export function ArticlesSection() {
  const ArticlesWrapper = styled.div`
    .input-container {
      border-radius: 8px;
      background: #f9f9f9;
      padding: 15px 20px;
    }
    @media (max-width: 768px) {
      .input-container {
        border-radius: 20px;
      }
    }
  `;
  return (
    <ArticlesWrapper className="md:px-20 md:py-6 px-6 py-10  ">
      <div className="flex justify-between relative items-center ">
        <div className="flex input-container items-center md:text-lg">
          <div className="absolute">
            <img src={searchIcon} alt="search" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent border-none outline-none pl-8 placeholder-primaryFont"
          />
          <div className="md:hidden right-8">
            <img src={filterIcon} alt="search" />
          </div>
        </div>
        <div className="hidden md:block">
          <select className="input-container md:text-lg">
            <option>All categories</option>
          </select>
        </div>
      </div>
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
    </ArticlesWrapper>
  );
}
