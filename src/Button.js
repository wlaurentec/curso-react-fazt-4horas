function Button({ text, name = "Here" }) {
  return (
    <button onClick={() => alert(text)}>
      {text} - {name}
    </button>
  );
}
export default Button;
