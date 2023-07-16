
import React, {useState, useEffect} from "react";
import customerData from "../data/customerData";
import CustomerDetails from "./customerDetails";

const CustomerList = () => {
    const [selectedCustomerId, setSelectedCustomerId] = useState(null);
    const [showDetails, setShowDetails] = useState(false)
    const [showList, setShowList] = useState(true)

    const handleCustomerClick = (customerId) =>{
        setSelectedCustomerId(customerId)
        setShowDetails(true)
        setShowList(false)
    }

    const handleBackButtonClick = () => {
        setSelectedCustomerId(null)
        setShowDetails(false)
        setShowList(true)
    }

    return (
        <div>
            {showList ? (
            customerData.map((customer, index) => (
                <div key={index} onClick={() => handleCustomerClick(customer.accountNumber)}>
                <h3>{customer.firstName} {customer.lastName}</h3>
                <p>Account Number: {customer.accountNumber}</p>
                <p>Account Status: {customer.accountStatus}</p>
                <hr />
                </div>
                ))
                ) : (
                <div>
                    <button onClick={handleBackButtonClick}>Back to List</button>
                    <CustomerDetails customerId={selectedCustomerId} />
                </div>
                )}
                </div>
                );
                };

export default CustomerList