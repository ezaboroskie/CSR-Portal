import React from "react";
import "../styles/SearchHeader.css";
import ampLogo from "../assests/amp-crop.png";


const SearchHeader = ({
  searchTerm,
  setSearchTerm,
  searchCategory,
  setSearchCategory,
}) => {
  return (
    <>
      <div className="header-content-container">
        <img className="header-logo" src={ampLogo} />
        <div className="search-and-option-container">
          <div className="search-field-container">
            <input
              className="search-field"
              type="text"
              placeholder="Search customers by"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="select-field-container">
            <select
              className="select-field"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="account number">Account Number</option>
            </select>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default SearchHeader;
