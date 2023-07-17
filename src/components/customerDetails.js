import React, { useEffect } from "react";
import "../styles/DetailsStyles.css";

const CustomerDetails = ({
  customerId,
  customerList,
  isEditing,
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

  return (
    <>
      <div className="details-top-spacer"></div>
      <div className="main-customer-details-container">
        <div className="customer-details-name-acc-container">
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
        </div>

        <div className="customer-edit-fields-align">
          {isEditing ? (
            <>
              <div className="customer-edit-first-name-container">
                <div>
                  <h5>First Name</h5>
                </div>
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
              </div>
            </>
          ) : null}

          {isEditing ? (
            <>
              <div className="customer-edit-last-name-container">
                <div>
                  <h5>Last Name</h5>
                </div>
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
          <h4>Active Vehicles:</h4>
          <div className="customer-details-vehicles-align">
            {isEditing ? (
              editedCustomer.activeVehicles &&
              editedCustomer.activeVehicles.length > 0 ? (
                editedCustomer.activeVehicles.map((vehicle, index) => (
                  <div
                    className="customer-details-vehicle-make-and-model-container"
                    key={index}
                  >
                  
                    <h5>Vehicle {index + 1}</h5>
                    <div>
                      <input
                        type="text"
                        name={`activeMake_${index}`}
                        value={vehicle.activeMake || ""}
                        onChange={(e) =>
                          handleInputChange(e, index, "activeMake", false)
                        }
                      />
                    </div>
                    <div>
                      
                      <input
                        type="text"
                        name={`activeModel_${index}`}
                        value={vehicle.activeModel || ""}
                        onChange={(e) =>
                          handleInputChange(e, index, "activeModel", false)
                        }
                      />
                    </div>
                    <div>
                     
                      <input
                        type="text"
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
                >
                  <div className="vehicle-header">
                  <h5>Vehicle {index + 1}</h5>
                  </div>
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
          <h5>Inactive Vehicles:</h5>
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
              <span>No inactive vehicles.</span>
            )
          ) : editedCustomer.inactiveVehicles &&
            editedCustomer.inactiveVehicles.length > 0 ? (
            editedCustomer.inactiveVehicles.map((vehicle, index) => (
              <div key={index}>
                <h5>Vehicle {index + 1}</h5>
                <span>Make: {vehicle.inactiveMake}</span>
                <span>Model: {vehicle.inactiveModel}</span>
                <span>Year: {vehicle.inactiveYear}</span>
              </div>
            ))
          ) : (
            <span>No inactive vehicles.</span>
          )}
        </div>
      </div>
    </>
  );
};

export default CustomerDetails;
