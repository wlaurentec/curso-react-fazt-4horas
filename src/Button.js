function Button({text, name = "Here"}) {
  console.log(text);
  return <button>{text} - {name}</button>;
}
export default Button;
