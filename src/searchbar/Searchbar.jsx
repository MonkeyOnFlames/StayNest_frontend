import "./searchbar.css";
//import Button from "../button/button";

const Searchbar = ({ input, filters, button }) => {
  return (
    <div className="search-container">
      {<div className="search-input">{input}</div>}

      {filters.map((filter, i) => (
        <div className="search-filter" key={i}>
          {filter.icon}
          <div className="search-filter-text">
            <div>{filter.label}</div>
            <div className="filter-value">{filter.value}</div>
          </div>
        </div>
      ))}
      <div className="search-button">{button}</div>
    </div>
  );
};

export default Searchbar;
