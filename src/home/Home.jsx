import "../home/home.css";
import InfoSquare from "../infoSquare/InfoSquare";
import image from "../image/StayNest.jpg";
import ListingSquare from "../listingSquare/ListingSquare";
import Searchbar from "../searchbar/Searchbar";
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
    value: "Sweden ▿",
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Listing Type",
    value: "Residence ▿",
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Check In",
    value: "22 May 2025 ▿",
  },
  {
    icon: <div className="search-icon">i</div>,
    label: "Check Out",
    value: "30 May 2025 ▿",
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
      <h2>Filters</h2>
      <ListingSquare name="hest" imageLink={image} environments={["BIKE"]} />
    </div>
  );
};

export default Home;
