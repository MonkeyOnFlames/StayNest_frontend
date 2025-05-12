import "./environmentButton.css";

const EnvironmentButton = ({environments}) => {
    return(
    <div className="enivronment-container">
      {environments.map((environment) =>
        environment === "BIKE" ? (
          <button key={environment} className="env-button">
            Bike
          </button>
        ) : environment === "CHARGE_POST" ? (
          <button key={environment} className="env-button">
            Charge post
          </button>
        ) : environment === "KWH" ? (
          <button key={environment} className="env-button">
            Kwt
          </button>
        ) : environment === "RECYCLE" ? (
          <button key={environment} className="env-button">
            Recycle
          </button>
        ) : environment === "SOLAR_POWER" ? (
          <button key={environment} className="env-button">
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
