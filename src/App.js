import CustomerList from "./components/customerList";
import React, {useState} from "react";

function App() {
  const [showList, setShowList] = useState(false)

  const handleShowListClick = () =>{
      setShowList(true)
  }
  return (
      <>
        {!showList&&(
        <div onClick={()=> handleShowListClick()}>Show List of Customers</div>
        )}
        {showList&&(
          <CustomerList/>
        )}
      </>
  );
}

export default App;
