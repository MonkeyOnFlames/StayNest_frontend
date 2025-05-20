import "./environmentButton.css";
import Images from "../image/Recycle.jpg";
import Images2 from "../image/Bike.jpg";
import Images3 from "../image/ChargePost.jpg";
import Images4 from "../image/KWT.jpg";
import Images5 from "../image/SolarPower.jpg";

const EnvironmentButton = ({ environmentFilters }) => {
  return (
    <div className="enivronment-container">
      {environmentFilters.map((environmentFilter) =>
        environmentFilter === "BIKE" ? (
          <button key={environmentFilter} className="env-button">
            {" "}
            <img src={Images2} id="Bikeimg" alt="Bike logo" />
            Bike
          </button>
        ) : environmentFilter === "CHARGE_POST" ? (
          <button key={environmentFilter} className="env-button">
            {" "}
            <img src={Images3} id="ChargePostimg" alt="ChargePost logo" />
            Charge post
          </button>
        ) : environmentFilter === "KWH" ? (
          <button key={environmentFilter} className="env-button">
            {" "}
            <img src={Images4} id="KWTimg" alt="KWT logo" />
            Kwt
          </button>
        ) : environmentFilter === "RECYCLE" ? (
          <button key={environmentFilter} className="env-button">
            {" "}
            <img src={Images} id="Recycleimg" alt="Recycle logo" />
            Recycle
          </button>
        ) : environmentFilter === "SOLAR_POWER" ? (
          <button key={environmentFilter} className="env-button">
            {" "}
            <img src={Images5} id="SolarPowerimg" alt="SolarPower logo" />
            Solar power
          </button>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default EnvironmentButton;
