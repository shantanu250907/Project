
import React, { useState } from 'react';
import './Payments.css';

const mockPayments = [
  {
    id: 1,
    tenant: 'Rohit Sharma',
    property: 'Modern 2BHK Apartment',
    amount: 25000,
    date: '2025-07-01',
    method: 'UPI',
    status: 'Paid',
  },
  {
    id: 2,
    tenant: 'Anjali Mehta',
    property: 'Cozy Studio Flat',
    amount: 18000,
    date: '2025-07-05',
    method: 'Bank Transfer',
    status: 'Pending',
  },
  {
    id: 3,
    tenant: 'Karan Verma',
    property: 'Luxury Villa',
    amount: 50000,
    date: '2025-07-10',
    method: 'Credit Card',
    status: 'Paid',
  },
];

const Payments = () => {
  const [payments] = useState(mockPayments);
  const ownerName = "Jane Doe"; // Example: Can be dynamic from context/login

  const totalPaid = payments
    .filter(p => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  const totalPending = payments
    .filter(p => p.status === "Pending")
    .reduce((sum, p) => sum + p.amount, 0);

  const handleDownload = () => {
    alert("📄 Payment report CSV downloaded (mock).");
  };

  return (
    <div className="payments-container">
      <div className="payments-header">
        <div className="owner-info">
          <img
            src="https://i.pravatar.cc/100?u=owner"
            alt="Owner Avatar"
            className="avatar"
          />
          <div>
            <h2>Welcome, {ownerName} 👋</h2>
            <p>Your monthly rent payment summary</p>
          </div>
        </div>
        <button className="download-btn" onClick={handleDownload}>
          ⬇ Download Report
        </button>
      </div>

      <div className="payment-summary">
        <div className="summary-card paid">
          <h4>Paid Amount</h4>
          <p>₹ {totalPaid.toLocaleString()}</p>
        </div>
        <div className="summary-card pending">
          <h4>Pending Amount</h4>
          <p>₹ {totalPending.toLocaleString()}</p>
        </div>
      </div>

      <div className="table-section">
        <h3>💼 Transaction History</h3>
        <table className="payments-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Tenant</th>
              <th>Property</th>
              <th>Amount (₹)</th>
              <th>Date</th>
              <th>Method</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.tenant}</td>
                <td>{payment.property}</td>
                <td>₹ {payment.amount.toLocaleString()}</td>
                <td>{payment.date}</td>
                <td>{payment.method}</td>
                <td className={payment.status === "Paid" ? "status-paid" : "status-pending"}>
                  {payment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
