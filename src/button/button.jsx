import "./button.css";

const Button = ({ onClick, text, width, height, fontSize }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      style={{
        width: `${width}rem`,
        height: `${height}rem`,
        fontSize: `${fontSize}rem`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
