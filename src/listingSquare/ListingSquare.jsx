import "./listing-square.css";

function ListingSquare({ name, imageLink, onClick, environments }) {
  return (
    <button className="square" onClick={onClick}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageLink})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="bottom-container">
        <div className="environment-circle"></div>
        <div classname="text-container">
          <p>{name}</p>
        </div>
      </div>
    </button>
  );
}

export default ListingSquare;
