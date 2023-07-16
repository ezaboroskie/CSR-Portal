import React, { useState } from 'react';
import customerData from '../data/customerData';

const CustomerDetails = ({ customerId }) => {

    const selectedCustomer = customerData.find(
      (customer) => customer.accountNumber === customerId
    );
  
    if (!selectedCustomer) {
   
      return <div>Customer not found.</div>;
    }
  
    return (
      <div>
        <h3>{selectedCustomer.firstName} {selectedCustomer.lastName}</h3>
        <p>Account Number: {selectedCustomer.accountNumber}</p>
        <p>Account Status: {selectedCustomer.accountStatus}</p>
        <p>Email: {selectedCustomer.email}</p>
        <p>Phone Number: {selectedCustomer.phoneNumber}</p>
        <h4>Active Vehicles:</h4>
        {selectedCustomer.activeVehicles.length > 0 ? (
        selectedCustomer.activeVehicles.map((vehicle, index) => (
          <div key={index}>
            <p>Make: {vehicle.activeMake}</p>
            <p>Model: {vehicle.activeModel}</p>
            <p>Year: {vehicle.activeYear}</p>
            <hr />
          </div>
        ))
        ) : (
        <p>No active vehicles.</p>
        )}

        <h4>Inactive Vehicles:</h4>
        {selectedCustomer.inactiveVehicles.length > 0 ? (
        selectedCustomer.inactiveVehicles.map((vehicle, index) => (
          <div key={index}>
            <p>Make: {vehicle.inactiveMake}</p>
            <p>Model: {vehicle.inactiveModel}</p>
            <p>Year: {vehicle.inactiveYear}</p>
            <hr />
          </div>
        ))
        ) : (
        <p>No inactive vehicles.</p>
        )}
        </div>
    );
  };
  
  export default CustomerDetails;