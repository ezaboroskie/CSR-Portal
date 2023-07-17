import React, { useState, useEffect } from "react";
import "../styles/DetailsStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPen } from "@fortawesome/free-solid-svg-icons";

const CustomerDetails = ({
  customerId,
  customerList,
  updateCustomerList,
  isEditing,
  setIsEditing,
  editedCustomer,
  setEditedCustomer,
}) => {
  useEffect(() => {
    const selectedCustomer = customerList.find(
      (customer) => customer.accountNumber === customerId
    );

    if (!selectedCustomer) {
      setEditedCustomer({});
    } else {
      setEditedCustomer({ ...selectedCustomer });
    }
  }, [customerId, customerList, setEditedCustomer]);

  const handleInputChange = (e, vehicleIndex, field, isInactive) => {
    const { name, value } = e.target;

    setEditedCustomer((prevCustomer) => {
      const updatedCustomer = { ...prevCustomer };

      if (isInactive) {
        const inactiveVehicles = [...(updatedCustomer.inactiveVehicles || [])];
        if (inactiveVehicles[vehicleIndex]) {
          inactiveVehicles[vehicleIndex] = {
            ...inactiveVehicles[vehicleIndex],
            [field]: value,
          };
        } else {
          inactiveVehicles[vehicleIndex] = { [field]: value };
        }
        updatedCustomer.inactiveVehicles = inactiveVehicles;
      } else {
        const activeVehicles = [...(updatedCustomer.activeVehicles || [])];
        if (activeVehicles[vehicleIndex]) {
          activeVehicles[vehicleIndex] = {
            ...activeVehicles[vehicleIndex],
            [field]: value,
          };
        } else {
          activeVehicles[vehicleIndex] = { [field]: value };
        }
        updatedCustomer.activeVehicles = activeVehicles;
      }

      return { ...updatedCustomer };
    });
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
   

      <h3>Account Number:</h3>
      <p>{editedCustomer.accountNumber}</p>

      <h3>Account Status:</h3>
      {isEditing ? (
        <select
          name="accountStatus"
          value={editedCustomer.accountStatus}
          onChange={(e) =>
            setEditedCustomer((prevCustomer) => ({
              ...prevCustomer,
              accountStatus: e.target.value,
            }))
          }
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      ) : (
        <p>{editedCustomer.accountStatus}</p>
      )}

      <h4>First Name:</h4>
      {isEditing ? (
        <input
          type="text"
          name="firstName"
          value={editedCustomer.firstName}
          onChange={(e) =>
            setEditedCustomer((prevCustomer) => ({
              ...prevCustomer,
              firstName: e.target.value,
            }))
          }
        />
      ) : (
        <p>{editedCustomer.firstName}</p>
      )}

      <h4>Last Name:</h4>
      {isEditing ? (
        <input
          type="text"
          name="lastName"
          value={editedCustomer.lastName}
          onChange={(e) =>
            setEditedCustomer((prevCustomer) => ({
              ...prevCustomer,
              lastName: e.target.value,
            }))
          }
        />
      ) : (
        <p>{editedCustomer.lastName}</p>
      )}

      <h4>Phone Number:</h4>
      {isEditing ? (
        <input
          type="text"
          name="phoneNumber"
          value={editedCustomer.phoneNumber}
          onChange={(e) =>
            setEditedCustomer((prevCustomer) => ({
              ...prevCustomer,
              phoneNumber: e.target.value,
            }))
          }
        />
      ) : (
        <p>{editedCustomer.phoneNumber}</p>
      )}

      <h4>Email:</h4>
      {isEditing ? (
        <input
          type="text"
          name="email"
          value={editedCustomer.email}
          onChange={(e) =>
            setEditedCustomer((prevCustomer) => ({
              ...prevCustomer,
              email: e.target.value,
            }))
          }
        />
      ) : (
        <p>{editedCustomer.email}</p>
      )}

      <h4>Notes:</h4>
      {isEditing ? (
        <textarea
          name="notes"
          value={editedCustomer.notes}
          onChange={(e) =>
            setEditedCustomer((prevCustomer) => ({
              ...prevCustomer,
              notes: e.target.value,
            }))
          }
        ></textarea>
      ) : (
        <p>{editedCustomer.notes}</p>
      )}

      <h4>Active Vehicles:</h4>
      {isEditing ? (
        editedCustomer.activeVehicles &&
        editedCustomer.activeVehicles.length > 0 ? (
          editedCustomer.activeVehicles.map((vehicle, index) => (
            <div key={index}>
              <h5>Vehicle {index + 1}</h5>
              <label>Make:</label>
              <input
                type="text"
                name={`activeMake_${index}`}
                value={vehicle.activeMake || ""}
                onChange={(e) =>
                  handleInputChange(e, index, "activeMake", false)
                }
              />
              <label>Model:</label>
              <input
                type="text"
                name={`activeModel_${index}`}
                value={vehicle.activeModel || ""}
                onChange={(e) =>
                  handleInputChange(e, index, "activeModel", false)
                }
              />
              <label>Year:</label>
              <input
                type="text"
                name={`activeYear_${index}`}
                value={vehicle.activeYear || ""}
                onChange={(e) =>
                  handleInputChange(e, index, "activeYear", false)
                }
              />
            </div>
          ))
        ) : (
          <p>No active vehicles.</p>
        )
      ) : editedCustomer.activeVehicles &&
        editedCustomer.activeVehicles.length > 0 ? (
        editedCustomer.activeVehicles.map((vehicle, index) => (
          <div key={index}>
            <h5>Vehicle {index + 1}</h5>
            <p>Make: {vehicle.activeMake}</p>
            <p>Model: {vehicle.activeModel}</p>
            <p>Year: {vehicle.activeYear}</p>
          </div>
        ))
      ) : (
        <p>No active vehicles.</p>
      )}

      <h4>Inactive Vehicles:</h4>
      {isEditing ? (
        editedCustomer.inactiveVehicles &&
        editedCustomer.inactiveVehicles.length > 0 ? (
          editedCustomer.inactiveVehicles.map((vehicle, index) => (
            <div key={index}>
              <h5>Vehicle {index + 1}</h5>
              <label>Make:</label>
              <input
                type="text"
                name={`inactiveMake_${index}`}
                value={vehicle.inactiveMake || ""}
                onChange={(e) =>
                  handleInputChange(e, index, "inactiveMake", true)
                }
              />
              <label>Model:</label>
              <input
                type="text"
                name={`inactiveModel_${index}`}
                value={vehicle.inactiveModel || ""}
                onChange={(e) =>
                  handleInputChange(e, index, "inactiveModel", true)
                }
              />
              <label>Year:</label>
              <input
                type="text"
                name={`inactiveYear_${index}`}
                value={vehicle.inactiveYear || ""}
                onChange={(e) =>
                  handleInputChange(e, index, "inactiveYear", true)
                }
              />
            </div>
          ))
        ) : (
          <p>No inactive vehicles.</p>
        )
      ) : editedCustomer.inactiveVehicles &&
        editedCustomer.inactiveVehicles.length > 0 ? (
        editedCustomer.inactiveVehicles.map((vehicle, index) => (
          <div key={index}>
            <h5>Vehicle {index + 1}</h5>
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
