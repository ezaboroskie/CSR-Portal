import React, { useEffect, useState } from "react";
import "../styles/DetailsStyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import CustomerHistory from "./customerHistory";
import purchaseHistory from "../data/purchaseHistory.json";

const CustomerDetails = ({
  customerId,
  customerList,
  setCustomerList,
  isEditing,
  editedCustomer,
  setEditedCustomer,
}) => {
  const [selectedVehicleIndex, setSelectedVehicleIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showHistory, setShowHistory] = useState(false)

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

  const openPopup = (vehicleIndex) => {
    setSelectedVehicleIndex(vehicleIndex);
    setShowPopup(true);
  };

  const updateLocalStorage = (updatedList) => {
    localStorage.setItem("customerData", JSON.stringify(updatedList));
  };
  const deleteInactiveVehicle = (vehicleIndex) => {
    setEditedCustomer((prevCustomer) => {
      const updatedCustomer = { ...prevCustomer };
      const inactiveVehicles = [...(updatedCustomer.inactiveVehicles || [])];
      inactiveVehicles.splice(vehicleIndex, 1);
      updatedCustomer.inactiveVehicles = inactiveVehicles;

      const updatedList = customerList.map((customer) =>
        customer.accountNumber === updatedCustomer.accountNumber
          ? updatedCustomer
          : customer
      );
      setCustomerList(updatedList);
      updateLocalStorage(updatedList);

      return { ...updatedCustomer };
    });
  };

  const moveVehicleToInactive = () => {
    const updatedCustomer = { ...editedCustomer };
    const selectedVehicle =
      updatedCustomer.activeVehicles[selectedVehicleIndex];
    updatedCustomer.activeVehicles.splice(selectedVehicleIndex, 1);
    updatedCustomer.inactiveVehicles = updatedCustomer.inactiveVehicles || [];
    updatedCustomer.inactiveVehicles.push(selectedVehicle);
    setEditedCustomer(updatedCustomer);
    setShowPopup(false);
    setSelectedVehicleIndex(null);
  };

  const addNewActiveVehicle = () => {
    setEditedCustomer((prevCustomer) => {
      const updatedCustomer = { ...prevCustomer };
      const activeVehicles = [...(updatedCustomer.activeVehicles || [])];
      activeVehicles.push({});
      updatedCustomer.activeVehicles = activeVehicles;
      return { ...updatedCustomer };
    });
  };

  return (
    <>
      <div className="details-top-spacer"></div>
      <div className="main-customer-details-container">
        {showHistory ? (
          <div className="customer-history-container">
            <span className="purchase-history-toggle-off" onClick={() => setShowHistory(!showHistory)}>
              {showHistory ? "Hide Purchase History" : "Purchase History"}
            </span>
            <CustomerHistory
              customerList={customerList}
              customerId={customerId}
              purchaseHistory={purchaseHistory}
            />
          </div>
        ) : (
          <>
            <div className="customer-details-name-acc-container">
              <span className="purchase-history-toggle" onClick={() => setShowHistory(!showHistory)}>
                {showHistory ? "Hide Purchase History" : "Purchase History"}
              </span>
              <h3>
                {editedCustomer.firstName} {editedCustomer.lastName}
              </h3>
              <div className="customer-details-acc-number-and-status-container">
                <div className="customer-details-acc-number-container">
                  <h5>Account Number:</h5>
                  <span>{editedCustomer.accountNumber}</span>
                </div>
  
                <div className="customer-details-acc-status-container">
                  <h5>Account Status:</h5>
                  {isEditing ? (
                    <select
                      className="acc-status-select"
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
                    <span>{editedCustomer.accountStatus}</span>
                  )}
                </div>
              </div>
  
              <div className="customer-edit-fields-align">
                {isEditing ? (
                  <>
                    <div className="customer-edit-first-name-container">
                      <div className="customer-edit-first-name-spacer">
                        <h5>First Name</h5>
                      </div>
                      <div>
                        <input
                          className="customer-edit-input-field"
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
                      </div>
                    </div>
                  </>
                ) : null}
  
                {isEditing ? (
                  <>
                    <div className="customer-edit-last-name-container">
                      <div className="customer-edit-first-name-spacer">
                        <h5>Last Name</h5>
                      </div>
                      <input
                        className="customer-edit-input-field"
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
                    </div>
                  </>
                ) : null}
  
                {isEditing ? (
                  <>
                    <div className="customer-edit-phone-container">
                      <div>
                        <h5>Phone</h5>
                      </div>
                      <input
                        className="customer-edit-input-field"
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
                    </div>
                  </>
                ) : (
                  <>
                    <div className="customer-details-phone-container">
                      <h5>Phone:</h5>
                      <span>{editedCustomer.phoneNumber}</span>
                    </div>
                  </>
                )}
  
                {isEditing ? (
                  <>
                    <div className="customer-edit-email-container">
                      <div>
                        <h5>Email</h5>
                      </div>
                      <input
                        className="customer-edit-input-field"
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
                    </div>
                  </>
                ) : (
                  <>
                    <div className="customer-details-email-container">
                      <h5>Email: </h5>
                      <span>{editedCustomer.email}</span>
                    </div>
                  </>
                )}
              </div>
              <div className="customer-details-notes-container">
                <h5>Notes:</h5>
                {isEditing ? (
                  <textarea
                    className="customer-edit-notes-textarea"
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
                  <span className="customer-details-notes-text">
                    {editedCustomer.notes}
                  </span>
                )}
              </div>
  
              <div className="customer-details-vehicles-container">
                {!isEditing && (
                  <>
                    <span className="active-vehicle-click-explaination-text">
                      Click to move to inactive
                    </span>
                    <h4>Active Vehicles</h4>
                  </>
                )}
  
                {isEditing && (
                  <div className="customer-edit-active-add-container">
                    <h4>Active Vehicles</h4>
                    <FontAwesomeIcon
                      className="customer-edit-active-add-plus-icon"
                      icon={faCirclePlus}
                      onClick={addNewActiveVehicle}
                    />
                  </div>
                )}
                <div className="customer-details-vehicles-align">
                  {isEditing ? (
                    editedCustomer.activeVehicles &&
                    editedCustomer.activeVehicles.length > 0 ? (
                      editedCustomer.activeVehicles.map((vehicle, index) => (
                        <div
                          className="customer-edi-vehicle-make-and-model-container"
                          key={index}
                        >
                          <h5>Vehicle {index + 1}</h5>
                          <div>
                            <input
                              placeholder="Make"
                              type="text"
                              name={`activeMake_${index}`}
                              value={vehicle.activeMake || ""}
                              onChange={(e) =>
                                handleInputChange(
                                  e,
                                  index,
                                  "activeMake",
                                  false
                                )
                              }
                            />
                          </div>
                          <div>
                            <input
                              placeholder="Model"
                              type="text"
                              name={`activeModel_${index}`}
                              value={vehicle.activeModel || ""}
                              onChange={(e) =>
                                handleInputChange(
                                  e,
                                  index,
                                  "activeModel",
                                  false
                                )
                              }
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              placeholder="Tag #"
                              name={`activeYear_${index}`}
                              value={vehicle.activeYear || ""}
                              onChange={(e) =>
                                handleInputChange(e, index, "activeYear", false)
                              }
                            />
                          </div>
                        </div>
                      ))
                    ) : (
                      <span>No active vehicles.</span>
                    )
                  ) : editedCustomer.activeVehicles &&
                    editedCustomer.activeVehicles.length > 0 ? (
                    editedCustomer.activeVehicles.map((vehicle, index) => (
                      <div
                        className="customer-details-vehicle-make-and-model-container"
                        key={index}
                        onClick={() => openPopup(index)}
                      >
                        <h5>Vehicle {index + 1}</h5>
                        <div className="customer-details-vehicle-make-and-model-spacer">
                          <div>{vehicle.activeMake}</div>
                          <div>{vehicle.activeModel}</div>
                        </div>
                        <span>{vehicle.activeYear}</span>
                      </div>
                    ))
                  ) : (
                    <span>No active vehicles.</span>
                  )}
                </div>
  
                <h4 className="customer-details-inactive-spacer">
                  Inactive Vehicles:
                </h4>
                <div className="customer-details-vehicles-align">
                  {isEditing ? (
                    editedCustomer.inactiveVehicles &&
                    editedCustomer.inactiveVehicles.length > 0 ? (
                      editedCustomer.inactiveVehicles.map((vehicle, index) => (
                        <div
                          className="customer-details-vehicle-make-and-model-container"
                          key={index}
                        >
                          <h5>Vehicle {index + 1}</h5>
                          <div>
                            <input
                              placeholder="Make"
                              type="text"
                              name={`inactiveMake_${index}`}
                              value={vehicle.inactiveMake || ""}
                              onChange={(e) =>
                                handleInputChange(
                                  e,
                                  index,
                                  "inactiveMake",
                                  true
                                )
                              }
                            />
                          </div>
                          <div>
                            <input
                              placeholder="Model"
                              type="text"
                              name={`inactiveModel_${index}`}
                              value={vehicle.inactiveModel || ""}
                              onChange={(e) =>
                                handleInputChange(
                                  e,
                                  index,
                                  "inactiveModel",
                                  true
                                )
                              }
                            />
                          </div>
                          <div>
                            <input
                              placeholder="Tag #"
                              type="text"
                              name={`inactiveYear_${index}`}
                              value={vehicle.inactiveYear || ""}
                              onChange={(e) =>
                                handleInputChange(
                                  e,
                                  index,
                                  "inactiveYear",
                                  true
                                )
                              }
                            />
                          </div>
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            className="inactive-delete-btn"
                            onClick={() => deleteInactiveVehicle(index)}
                          />
                        </div>
                      ))
                    ) : (
                      <span>No inactive vehicles.</span>
                    )
                  ) : editedCustomer.inactiveVehicles &&
                    editedCustomer.inactiveVehicles.length > 0 ? (
                    editedCustomer.inactiveVehicles.map((vehicle, index) => (
                      <div
                        className="customer-details-vehicle-make-and-model-container"
                        key={index}
                      >
                        <h5>Vehicle {index + 1}</h5>
                        <div className="customer-details-vehicle-make-and-model-spacer">
                          <div>{vehicle.activeMake}</div>
                          <div>{vehicle.activeModel}</div>
                        </div>
                        <span>{vehicle.activeYear}</span>
                        <FontAwesomeIcon
                          icon={faTrashCan}
                          className="inactive-delete-btn"
                          onClick={() => deleteInactiveVehicle(index)}
                        />
                      </div>
                    ))
                  ) : (
                    <span>No inactive vehicles.</span>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {selectedVehicleIndex !== null && showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <h4>Move Vehicle to Inactive</h4>
            <p>
              Are you sure you want to move this vehicle to the inactive list?
            </p>
            <div className="popup-buttons">
              <button onClick={moveVehicleToInactive}>Yes</button>
              <button onClick={() => setShowPopup(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
  
};

export default CustomerDetails;
