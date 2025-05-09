import { useState } from "react";
import "./searchbar.css";

const CollapsibleSection = ({ title, children, defaultExpanded = false, floating = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    //<div className="filter-section">
      <div className={`section-header ${floating , ""}`} onClick={toggleExpanded} >
        <p>{title}<span className={`arrow ${expanded ? "up" : "down"}`}>
          {expanded ? "△" : "▽"}
        </span></p>

        
      {/* </div> */}

      {expanded && <div className="section-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;