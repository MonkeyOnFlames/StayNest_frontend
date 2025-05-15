import "./checkBox.css";

// PROPS
// selectedSize - själva sizen vi väljer/trycker på
// onSizeSelect - det kommer att vara onClick funktion med nytt namn för att öka tydligheten
// availableSizes - vilka storlekar är dynamisk

const CheckBox = ({ boxName, selectedBox, onSelect, availableBoxes }) => {
  return (
    <div className="filter-section">
      <label>{boxName}</label>
      <div className="box-buttons">
        {availableBoxes.map((box) => (
          <button
            key={box}
            className={`box-button ${
              selectedBox === box ? "selected" : ""
            } `}
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