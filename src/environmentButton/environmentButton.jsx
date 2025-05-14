import "./environmentButton.css";
import Images from "../image/Recycle.jpg";
import Images2 from "../image/Bike.jpg";
import Images3 from "../image/ChargePost.jpg";
import Images4 from "../image/KWT.jpg";
import Images5 from "../image/SolarPower.jpg";

const EnvironmentButton = ({environments}) => {
    return(
    <div className="enivronment-container">
      {environments.map((environment) =>
        environment === "BIKE" ? (
          <button key={environment} className="env-button"> <img src={Images2} id="Bikeimg" alt="Bike logo" />
            Bike
          </button>
        ) : environment === "CHARGE_POST" ? (
          <button key={environment} className="env-button" > <img src={Images3} id="Recycleimg" alt="ChargePost logo" />
            Charge post
          </button>
        ) : environment === "KWH" ? (
          <button key={environment} className="env-button"> <img src={Images4} id="KWTimg" alt="KWT logo" />
            Kwt
          </button>
        ) : environment === "RECYCLE" ? (
          <button key={environment} className="env-button"> <img src={Images} id="Recycleimg" alt="Recycle logo" />
            Recycle
          </button>
        ) : environment === "SOLAR_POWER" ? (
          <button key={environment} className="env-button"> <img src={Images5} id="SolarPowerimg" alt="SolarPower logo" />
            Solar power
          </button>
        ) : (
          ""
        )
      )}
      
    </div>
  )
};

export default EnvironmentButton;
