import React, { useState, useEffect } from "react";
import customerData from "../data/customerData.json";
import CustomerDetails from "./customerDetails";

const CustomerList = ({ searchTerm, searchCategory }) => {
  const [customerList, setCustomerList] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    const storedCustomerData = localStorage.getItem("customerData");
    if (storedCustomerData) {
      const parsedCustomerData = JSON.parse(storedCustomerData);
      setCustomerList(parsedCustomerData);
    } else {
      localStorage.setItem("customerData", JSON.stringify(customerData));
      setCustomerList(customerData);
    }
  }, []);

  const handleCustomerClick = (customerId, customerName) => {
    setSelectedCustomerId(customerId);
    setShowDetails(true);
    setShowList(false);
  };

  const handleBackButtonClick = () => {
    setSelectedCustomerId(null);
    setShowDetails(false);
    setShowList(true);
  };

  const updateCustomerList = (updatedCustomer) => {
    const updatedList = customerList.map((customer) =>
      customer.accountNumber === updatedCustomer.accountNumber ? updatedCustomer : customer
    );
    setCustomerList(updatedList);
    localStorage.setItem("customerData", JSON.stringify(updatedList));
  };

  const filterByCategory = (customer, category) => {
    const formattedSearchTerm = searchTerm.toLowerCase().replace(/-/g, "").trim();

    switch (category) {
      case "name":
        const fullName = `${customer.firstName} ${customer.lastName}`;
        return fullName.toLowerCase().includes(formattedSearchTerm);
      case "email":
        return customer.email.toLowerCase().includes(formattedSearchTerm);
      case "phone":
        const formattedPhone = customer.phoneNumber.replace(/-/g, "");
        return formattedPhone.toLowerCase().includes(formattedSearchTerm);
      case "account number":
        return customer.accountNumber.toLowerCase().includes(formattedSearchTerm);
      default:
        return false;
    }
  };

  const filteredCustomers = customerList.filter((customer) =>
    filterByCategory(customer, searchCategory)
  );

  return (
    <div>
      {showList ? (
        <div>
          {filteredCustomers.map((customer, index) => (
            <div
              key={index}
              onClick={() =>
                handleCustomerClick(
                  customer.accountNumber,
                  `${customer.firstName} ${customer.lastName}`
                )
              }
            >
              <h3>
                {customer.firstName} {customer.lastName}
              </h3>
              <p>Account Number: {customer.accountNumber}</p>
              <p>Account Status: {customer.accountStatus}</p>
              <p>Phone Number: {customer.phoneNumber}</p>
              <p>Email: {customer.email}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleBackButtonClick}>Back to List</button>
          <CustomerDetails
            customerId={selectedCustomerId}
            customerList={customerList}
            updateCustomerList={updateCustomerList}
          />
        </div>
      )}
    </div>
  );
};

export default CustomerList;
