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
        {environments.map(
          (environment) => (
            environment === "BIKE" ? (
              <div key={1} className="environment-circle">B</div>
            ) : (environment === "CHARGE_POST" ? (
              <div key={2} className="environment-circle">C</div>
            ) : (environment === "KWH" ? (
              <div key={3} className="environment-circle">K</div>
            ) : (environment === "RECYCLE" ? (
              <div key={4} className="environment-circle">R</div>
            ) : (environment === "SOLAR_POWER" ? (
              <div key={5} className="environment-circle">S</div>
            ) :
            ""
          )
        )))))}

        <div className="text-container">
          <p>{name}</p>
        </div>
      </div>
    </button>
  );
}

export default ListingSquare;
