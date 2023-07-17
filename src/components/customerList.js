import React, { useState, useEffect } from "react";
import customerData from "../data/customerData.json";
import CustomerDetails from "./customerDetails";
import "../styles/ListStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faL, faUserPen } from "@fortawesome/free-solid-svg-icons";

const CustomerList = ({ searchTerm, searchCategory }) => {
  const [customerList, setCustomerList] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showList, setShowList] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCustomer, setEditedCustomer] = useState({});

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
    setIsEditing(false);
  };

  const handleBackButtonClick = () => {
    setSelectedCustomerId(null);
    setShowDetails(false);
    setShowList(true);
    setIsEditing(false);
  };

  const updateCustomerList = (updatedCustomer) => {
    const updatedList = customerList.map((customer) =>
      customer.accountNumber === updatedCustomer.accountNumber
        ? updatedCustomer
        : customer
    );
    setCustomerList(updatedList);
    localStorage.setItem("customerData", JSON.stringify(updatedList));
  };

  const filterByCategory = (customer, category) => {
    const formattedSearchTerm = searchTerm
      .toLowerCase()
      .replace(/-/g, "")
      .trim();

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
        return customer.accountNumber
          .toLowerCase()
          .includes(formattedSearchTerm);
      default:
        return false;
    }
  };

  const filteredCustomers = customerList.filter((customer) =>
    filterByCategory(customer, searchCategory)
  );

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    const updatedCustomerList = customerList.map((customer) => {
      if (customer.accountNumber === editedCustomer.accountNumber) {
        return editedCustomer;
      }
      return customer;
    });
    localStorage.setItem("customerData", JSON.stringify(updatedCustomerList));
    updateCustomerList(editedCustomer);
    setIsEditing(false);
  };

  return (
    <div>
      {showList ? (
        <div className="main-content-container">
          {filteredCustomers.map((customer, index) => (
            <div
              className="customor-list-info-box"
              key={index}
              onClick={() =>
                handleCustomerClick(
                  customer.accountNumber,
                  `${customer.firstName} ${customer.lastName}`
                )
              }
            >
              <div className="customer-list-name-container">
                <h3>
                  {customer.firstName} {customer.lastName}
                </h3>
              </div>
              <div className="customer-list-information-container">
                <div>
                  <span>Acc Number: {customer.accountNumber}</span>
                </div>
                <div>
                  <span>Acc Status: {customer.accountStatus}</span>
                </div>
                <div>
                  <span>Phone #: {customer.phoneNumber}</span>
                </div>
                <div>
                  <span>Email: {customer.email}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="sticky-top-container">
            <div className="back-arrow">
              <FontAwesomeIcon
                className="back-arrow"
                onClick={handleBackButtonClick}
                icon={faArrowLeft}
              />
            </div>

            {isEditing ? (
              <div className="edit-text-and-icon-container">
                <span className="user-edit-save" onClick={handleSaveChanges}>
                  Save Changes
                </span>
                <FontAwesomeIcon
                  className="user-edit-icon-save"
                  icon={faUserPen}
                />
              </div>
            ) : (
              <div className="edit-text-and-icon-container">
                <span className="user-edit-select" onClick={handleEditClick}>
                  Edit Account
                </span>
                <FontAwesomeIcon
                  className="user-edit-icon-select"
                  icon={faUserPen}
                />
              </div>
            )}
          </div>
          <div className="main-content-container">
            <CustomerDetails
              customerId={selectedCustomerId}
              customerList={customerList}
              setCustomerList={setCustomerList}
              updateCustomerList={updateCustomerList}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
              editedCustomer={editedCustomer}
              setEditedCustomer={setEditedCustomer}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerList;
