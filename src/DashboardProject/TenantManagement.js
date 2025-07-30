import React from "react";
import "./TenantManagement.css";

const tenants = [
  {
    id: 1,
    name: "Rahul Sharma",
    leaseStart: "2024-10-01",
    leaseEnd: "2025-09-30",
    phone: "+91-9876543210",
    email: "rahul.sharma@example.com"
  },
  {
    id: 2,
    name: "Anjali Mehta",
    leaseStart: "2024-11-15",
    leaseEnd: "2025-11-14",
    phone: "+91-9123456789",
    email: "anjali.mehta@example.com"
  },
];

const TenantManagement = () => {
  return (
    <div className="tenant-management-container">
      <h2 className="section-title">🏠 Tenant Management</h2>
      <div className="tenant-list">
        {tenants.map((tenant) => (
          <div key={tenant.id} className="tenant-card">
            <div className="tenant-header">
              <h3>{tenant.name}</h3>
              <span className="tenant-id">ID: {tenant.id}</span>
            </div>
            <p><strong>📅 Lease Period:</strong> {tenant.leaseStart} → {tenant.leaseEnd}</p>
            <p><strong>📞 Phone:</strong> {tenant.phone}</p>
            <p><strong>✉️ Email:</strong> {tenant.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TenantManagement;
