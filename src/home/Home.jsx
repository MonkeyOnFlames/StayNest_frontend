import "../home/home.css";
import InfoSquare from "../infoSquare/InfoSquare";
import image from "../image/StayNest.jpg";
import ListingSquare from "../listingSquare/ListingSquare";
import EnvironmentButton from "../environmentButton/environmentButton";

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
      <EnvironmentButton 
        environments={
          [
            "BIKE"]
        }/>
           <EnvironmentButton 
        environments={
          [
            "CHARGE_POST"]
        }/>
             <EnvironmentButton 
        environments={
          [
            "KWH"]
        }/>
             <EnvironmentButton 
        environments={
          [
            "RECYCLE"]
        }/>
             <EnvironmentButton 
        environments={
          [
            "SOLAR_POWER"]
        }/>

      <ListingSquare name="hest" imageLink={image} environments={["BIKE"]} />
    </div>
  );
};

export default Home;
