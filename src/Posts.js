const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => console.log(json));
      }}
    >
      Traer Datos
    </button>
  );
};
export default Posts;
