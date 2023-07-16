import React from "react";

const SearchHeader = ({ searchTerm, setSearchTerm, searchCategory, setSearchCategory }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search customers"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
        <option value="name">Name</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="account number">Account Number</option>
      </select>
    </div>
  );
};

export default SearchHeader;
