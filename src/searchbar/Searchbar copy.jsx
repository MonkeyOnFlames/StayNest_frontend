import "./searchbar.css";
import Button from "../button/button";

const Searchbar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a listing..."
        className="search-form"
        // value={username}
        // onChange={(e) => setUsername(e.target.value)}
      />

      <div className="search-filter">
        <div className="search-icon">i</div>
        <div className="search-filter-text">
          <div>Location</div>
          <div className="filter-value">Sweden ▿</div>
        </div>
      </div>

      <div className="search-filter">
        <div className="search-icon">i</div>
        <div className="search-filter-text">
          <div>Listing Type</div>
          <div className="filter-value">Residence ▿</div>
        </div>
      </div>

      <div className="search-filter">
        <div className="search-icon">i</div>
        <div className="search-filter-text">
          <div>Check in</div>
          <div className="filter-value">22 may 2025 ▿</div>
        </div>
      </div>

      <div className="search-filter">
        <div className="search-icon">i</div>
        <div className="search-filter-text">
          <div>Check out</div>
          <div className="filter-value">30 may 2025 ▿</div>
        </div>
      </div>

      <Button
        className="search-button"
        text="Search"
        type="submit"
        //variant="auth"
        width="10"
      />
    </div>
  );
};

export default Searchbar;
