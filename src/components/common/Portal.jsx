import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
function Portal({ children, containerId }) {
  const [wrapper, setWrapper] = useState();
  useEffect(() => {
    let container = document.querySelector(`#${containerId}`);
    if (!container) {
      container = document.createElement("div");
      container.setAttribute("id", "container");

      document.body.appendChild(container);
    }
    setWrapper(container);
    return () => {
      if (!containerId) document.body.removeChild(container);
    };
  }, [containerId]);

  if (!wrapper) return null;

  return ReactDOM.createPortal(children, wrapper);
}

Portal.propTypes = {
  children: PropTypes.element.isRequired,
  containerId: PropTypes.string,
};
export default Portal;
