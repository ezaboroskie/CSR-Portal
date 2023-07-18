import React, { useEffect, useState } from "react";
import "../styles/HistoryStyles.css"

const CustomerHistory = ({ purchaseHistory, customerId }) => {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    const storedPurchaseHistory = localStorage.getItem("purchaseHistory");
    if (storedPurchaseHistory) {
      const parsedHistoryData = JSON.parse(storedPurchaseHistory);
      setHistoryList(parsedHistoryData);
    }else{
        localStorage.setItem("purchaseHistory", JSON.stringify(purchaseHistory))
        setHistoryList(purchaseHistory)
    }
  }, []);

  const customerPurchaseHistory = historyList.find(
    (historyItem) => historyItem.accountNumber === customerId
  );

  if (!customerPurchaseHistory) {
    return null;
  }

  return (
    <div className="customer-history-container">
      <h3>
        {customerPurchaseHistory.firstName} {customerPurchaseHistory.lastName}
      </h3>
      <div className="customer-details-acc-number-container">
        <h5>Account Number:</h5>
        <span>{customerPurchaseHistory.accountNumber}</span>
      </div>
      <h4>Purchase History:</h4>
      <ul>
        {customerPurchaseHistory.purchaseHistory.map((purchase) => (
          <div className="purchase-history-li-container">
            <li key={purchase.transactionId}>
              <div>
                <strong>ID:</strong> {purchase.transactionId}
              </div>
              <div>
                <strong>Transaction Type:</strong> {purchase.transactionType}
              </div>
              <div>
                <strong>Date:</strong> {purchase.transactionDate}
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CustomerHistory;
