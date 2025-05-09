// dynamisk filter som passa alla övriga filtrerings metoder
import "./searchbar.css";

// props:
// type - typen av filter
// options - vilka filter options finns för typen
// value - värdet på filtret som user väljer
// onChange - för att fånga value måste vi tillåt onChange funktion
// name - name behöver för att kunna möjliggöra onChange dynamiskt
// placeholder - ett placeholder värde
const FilterInput = ({ type, options, value, onChange, name, placeholder }) => {
  if (type === "radio") {
    return (
      <div className="radio-group">
        {options.map((option) => (
          <div className="radio-item" key={option.id}>
            <input
              type="radio"
              id={option.id}
              name={name}
              checked={value === option.value}
              onChange={() => onChange(name, option.value)}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    );
  }

  // fortsätta med nästa = select
  if (type === "select") {
    return (
      <select
        className="filter-select"
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value || option}>
            {option.value || option}
          </option>
        ))}
      </select>
    );
  }

  // fortsätta med price
  /* if (type === "price") {
    return (
      <div className="price-inputs">
        <input
          type="number"
          placeholder="min price"
          value={value.min}
          min="0"
          onChange={(e) => onChange(`${name}min`, e.target.value)}
          className="price-input"
        />
        <span>-</span>
        <input
          type="number"
          placeholder="max price"
          value={value.max}
          min="0"
          onChange={(e) => onChange(`${name}max`, e.target.value)}
          className="price-input"
        />
      </div>
    );
  } */

  // hantera om ingen matchande typ hittas
  return null;
};

export default FilterInput;