import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm,
  faLanguage,
  faMoneyBillAlt,
  faCheckCircle,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/SidebarContainer.css"; // Assuming you want to create a separate stylesheet

function SidebarContainer() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-section">
        <h3>
          <FontAwesomeIcon icon={faFilm} /> Categories
        </h3>
        <ul>
          <li>Action</li>
          <li>Drama</li>
          <li>Comedy</li>
          {/* Add more categories as needed */}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3>
          <FontAwesomeIcon icon={faLanguage} /> Languages
        </h3>
        <ul>
          <li>English</li>
          <li>Hindi</li>
          <li>Spanish</li>
          {/* Add more languages as needed */}
        </ul>
      </div>

      <div className="sidebar-section">
        <h3>
          <FontAwesomeIcon icon={faMoneyBillAlt} /> Subscription
        </h3>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCheckCircle} />
            Free
          </li>
          <li>
            <FontAwesomeIcon icon={faDollarSign} />
            Subscription
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarContainer;
