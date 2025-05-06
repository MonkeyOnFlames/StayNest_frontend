import "./info-square.css";

const InfoSquare = ({ text, image }) => {
  return (
    <div className="info-container">
      <div className="info">{text}</div>
      <div className="image">{image}</div>
    </div>
  );
};

export default InfoSquare;
