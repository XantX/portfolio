import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../tooltip/tooltip";

function TechIcon(props) {
  const [showTooltip, setShowTooltip] = useState();
  function handleMouseEnter() {
    setShowTooltip(true);
  }
  function handleMouseLeave() {
    setShowTooltip(false);
  }
  return (
    <div>
      <FontAwesomeIcon
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="tech-icon" icon={props.icon} />
      {showTooltip && (
        <Tooltip message={props.name} />
      )}
    </div>
  )
}

export default TechIcon
