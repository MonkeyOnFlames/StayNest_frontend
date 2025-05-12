import "../home/home.css";
import InfoSquare from "../infoSquare/InfoSquare";
import image from "../image/StayNest.jpg";
import ListingSquare from "../listingSquare/ListingSquare";
import EnvironmentButton from "../environmentButton/environmentButton";
import Searchbar from "../searchbar/Searchbar";
import CollapsibleSection from "../searchbar/CollapsibleSection";
import Button from "../button/button";

const searchInput = (
  <input
    type="text"
    placeholder="Search for a listing..."
    className="search-form"
  />
);

const filters = [
  {
    icon: <div className="search-icon">i</div>,
    label: "Location",
    value: (
      <CollapsibleSection title="Sweden ">
        <p>Norge</p>
        <p>Stockholm</p>
      </CollapsibleSection>
    ),
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Listing Type",
    value: (
      <CollapsibleSection title="Residence ">
        <p>Garden</p>
        <p>House</p>
      </CollapsibleSection>
    ),
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Check In",
    value: (
      <CollapsibleSection title="22 May 2025 ">
        <p>Many dates</p>
      </CollapsibleSection>
    ),
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Check Out",
    value: (
      <CollapsibleSection title="30 May 2025 ">
        <p>Many dates</p>
      </CollapsibleSection>
    ),
  },
];

const Home = () => {
  return (
    <div className="home">
      <InfoSquare
        text={
          <div>
            <h2 style={{ marginBottom: "0.5rem", fontWeight: 400 }}>
              Stay Nest
            </h2>
            <h2 style={{ margin: 0, fontSize: "2.5rem" }}>
              A eco-friendly and <br />
              welcoming stay <br />
              for travelers <br />
            </h2>
            <p>Every place feels like home</p>
          </div>
        }
        image={<img src={image} alt="StayNest Logo" />}
      />

      <Searchbar
        input={searchInput}
        filters={filters}
        button={<Button text="Search" type="submit" width="10" />}
      />

      <nav>Search bar</nav>
      <EnvironmentButton environments={["BIKE", "CHARGE_POST", "KWH", "RECYCLE", "SOLAR_POWER"]} />

      <ListingSquare name="hest" imageLink={image} environments={["BIKE"]} />
    </div>
  );
};

export default Home;
