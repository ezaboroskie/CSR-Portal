import React, { useState, useEffect } from "react";

const CustomerDetails = ({ customerId, customerList, updateCustomerList }) => {
  const [customer, setCustomer] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState({});
  const [isEditing, setIsEditing] = useState(false); // New state to track editing mode

  useEffect(() => {
    const selectedCustomer = customerList.find(
      (customer) => customer.accountNumber === customerId
    );

    if (!selectedCustomer) {
      setCustomer(null);
      setEditedCustomer({});
    } else {
      setCustomer(selectedCustomer);
      setEditedCustomer({ ...selectedCustomer });
    }
  }, [customerId, customerList]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value,
    }));
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <button onClick={handleSaveChanges}>Save Changes</button>
      ) : (
        <button onClick={handleEditClick}>Edit Customer Account Details</button>
      )}
      <h3>Account Number: </h3>
      <p>{editedCustomer.accountNumber}</p>

      {isEditing ? (
        <select
          name="accountStatus"
          value={editedCustomer.accountStatus}
          onChange={handleInputChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      ) : (
        <>
        <h3>Account Status: </h3>
        <p>{editedCustomer.accountStatus}</p>
        </>
      )}

{isEditing ? (
        <>
          <h4>First Name</h4>
          <input
            type="text"
            name="firstName"
            value={editedCustomer.firstName}
            onChange={handleInputChange}
          />
          <h4>Last Name</h4>
          <input
            type="text"
            name="lastName"
            value={editedCustomer.lastName}
            onChange={handleInputChange}
          />
          <h4>Phone Number</h4>
          <input
            type="text"
            name="phoneNumber"
            value={editedCustomer.phoneNumber}
            onChange={handleInputChange}
          />
          <h4>Email</h4>
          <input
            type="text"
            name="email"
            value={editedCustomer.email}
            onChange={handleInputChange}
          />
          <h4>Notes</h4>
          <textarea
            name="notes"
            value={editedCustomer.notes}
            onChange={handleInputChange}
          ></textarea>
        </>
      ) : (
        <>
          <h4>First Name: </h4>
          <p>{editedCustomer.firstName}</p>
          <h4>Last Name: </h4>
          <p>{editedCustomer.lastName}</p>
          <h4>Phone Number: </h4>
          <p>{editedCustomer.phoneNumber}</p>
          <h4>Email: </h4>
          <p>{editedCustomer.email}</p>
          <h4>Notes: </h4>
          <p>{editedCustomer.notes}</p>
        </>
      )}
      <h4>Active Vehicles:</h4>
      {editedCustomer.activeVehicles &&
      editedCustomer.activeVehicles.length > 0 ? (
        editedCustomer.activeVehicles.map((vehicle, index) => (
          <div key={index}>
            <p>Make: {vehicle.activeMake}</p>
            <p>Model: {vehicle.activeModel}</p>
            <p>Year: {vehicle.activeYear}</p>
          </div>
        ))
      ) : (
        <p>No active vehicles.</p>
      )}

      <h4>Inactive Vehicles:</h4>
      {editedCustomer.inactiveVehicles &&
      editedCustomer.inactiveVehicles.length > 0 ? (
        editedCustomer.inactiveVehicles.map((vehicle, index) => (
          <div key={index}>
            <p>Make: {vehicle.inactiveMake}</p>
            <p>Model: {vehicle.inactiveModel}</p>
            <p>Year: {vehicle.inactiveYear}</p>
          </div>
        ))
      ) : (
        <p>No inactive vehicles.</p>
      )}
    </div>
  );
};

export default CustomerDetails;
