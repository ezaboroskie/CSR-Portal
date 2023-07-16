import React, { useState } from "react";
import CustomerList from "./components/customerList";
import SearchHeader from "./components/searchHeader";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchCategory, setSearchCategory] = useState("name");

 

  return (
    <>
    <div className="search-container">
      <SearchHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchCategory={searchCategory}
          setSearchCategory={setSearchCategory}
      />
    </div>

    <div className="main-content-container">
      <CustomerList searchTerm={searchTerm} searchCategory={searchCategory} />
    </div>
    </>
  );
};

export default App;
