import "./checkBox.css";


const CheckBox = ({ boxName, selectedBox, onSelect, availableBoxes }) => {
  return (
    <div className="filter-section">
      <label>{boxName}</label>
      <div className="box-buttons">
        {availableBoxes.map((box) => (
          <button
            type="button"
            key={box}
            className={`box-button ${selectedBox === box ? ":selected" : ""} `}
            onClick={() => onSelect(box)}
          >
            {box}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CheckBox;
