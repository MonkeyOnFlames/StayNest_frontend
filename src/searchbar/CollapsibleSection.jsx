import { useState } from "react";
import "./searchbar.css";

const CollapsibleSection = ({ title, children, defaultExpanded = false }) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  //toke help from this site to make the dropdown menu outside of the searchbar:
  //https://www.dhiwise.com/post/a-comprehensive-guide-to-building-a-react-dropdown-menu
  return (
    <div className="section-header" onClick={toggleExpanded}>
      <span className="collapsible-label">
        {title}
        <span className={`arrow ${expanded ? "up" : "down"}`}>
          {expanded ? "△" : "▽"}
        </span>
      </span>

      {expanded && <div className="section-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
