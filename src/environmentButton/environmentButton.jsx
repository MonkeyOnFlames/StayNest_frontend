import "./environmentButton.css";

const EnvironmentButton = ({environments}) => {
    return(
  <button>
    <div className="enivronment-container">
      {environments.map((environment) =>
        environment === "BIKE" ? (
          <div key={environment} className="env-button">
            Bike
          </div>
        ) : environment === "CHARGE_POST" ? (
          <div key={environment} className="env-button">
            Charge post
          </div>
        ) : environment === "KWH" ? (
          <div key={environment} className="env-button">
            Kwt
          </div>
        ) : environment === "RECYCLE" ? (
          <div key={environment} className="env-button">
            Recycle
          </div>
        ) : environment === "SOLAR_POWER" ? (
          <div key={environment} className="env-button">
            Solar power
          </div>
        ) : (
          ""
        )
      )}
      ;
    </div>
  </button>
  )
};

export default EnvironmentButton;
