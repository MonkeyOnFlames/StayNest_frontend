import "../home/home.css";
import InfoSquare from "../infoSquare/InfoSquare";
import image from "../image/StayNest.jpg";
import ListingSquare from "../listingSquare/ListingSquare";

const Home = () => {
  return (
    <div className="home">
      <InfoSquare
        text={
          <div>
            <h2 style={{ marginBottom: "0.5rem", fontWeight: 400 }}>
              Stay Nest
            </h2>
            <h2 style={{ margin: 0, fontSize: "2.5rem", fontWeight: 700 }}>
              A eco-friendly and <br />
              welcoming stay <br />
              for travelers
            </h2>
            <p
              style={{
                marginTop: "1rem",
                fontSize: "1rem",
              }}
            >
              Every place feels like home
            </p>
          </div>
        }
        image={<img src={image} alt="StayNest Logo" />}
      />

      <nav>Search bar</nav>
      <h2>Filters</h2>
      <ListingSquare name="hest" imageLink={image} environments={["BIKE"]} />
    </div>
  );
};

export default Home;
