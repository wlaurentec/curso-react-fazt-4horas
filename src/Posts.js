import React from "react";
import { VscAzure } from "react-icons/vsc";

const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((err) => console.log(err));
      }}
    > 
      <VscAzure />
      Traer posts
    </button>
  );
};

export default Posts;
