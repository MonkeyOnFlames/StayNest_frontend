import "./listing-square.css";

function ListingSquare({ id, name, imageLinks, onClick, environments }) {
  let shownImage = imageLinks[0];

  return (
    <button className="listing-square" onClick={onClick}>
      <div
        className="listing-image"
        style={{
          backgroundImage: `url(${shownImage})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="listing-bottom-container">
        {environments && (
          <div className="environment-circle-container">
            {environments.map((environment) =>
              environment === "BIKE" ? (
                <div key={1} className="listing-environment-circle">
                  B
                </div>
              ) : environment === "CHARGE_POST" ? (
                <div key={2} className="listing-environment-circle">
                  C
                </div>
              ) : environment === "KWH" ? (
                <div key={3} className="listing-environment-circle">
                  K
                </div>
              ) : environment === "RECYCLE" ? (
                <div key={4} className="listing-environment-circle">
                  R
                </div>
              ) : environment === "SOLAR_POWER" ? (
                <div key={5} className="listing-environment-circle">
                  S
                </div>
              ) : (
                ""
              )
            )}
          </div>
        )}

        <div className="listing-text-container">
          <p>{name}</p>
        </div>
      </div>
    </button>
  );
}

export default ListingSquare;
