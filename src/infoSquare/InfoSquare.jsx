import "./info-square.css";

const InfoSquare = ({ text, image }) => {
  return (
    <div className="info-container">
      <div className="info-info">{text}</div>
      <div className="info-image">{image}</div>
    </div>
  );
};

export default InfoSquare;
