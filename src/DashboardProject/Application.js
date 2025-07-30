import React, { useState } from "react";
import { Card, Button, Table, Modal } from "react-bootstrap";
import { FaCheck, FaTimes, FaFileDownload, FaUserCheck } from "react-icons/fa";
import "./Applications.css"; // Custom CSS file

const mockApplications = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "9876543210",
    status: "Pending",
    documents: {
      idProof: "/documents/rahul-id.pdf",
      rentalHistory: "/documents/rahul-history.pdf",
    },
  },
  {
    id: 2,
    name: "Anjali Mehta",
    email: "anjali.mehta@example.com",
    phone: "9123456789",
    status: "Pending",
    documents: {
      idProof: "/documents/anjali-id.pdf",
      rentalHistory: "/documents/anjali-history.pdf",
    },
  },
];

export default function Applications() {
  const [applications, setApplications] = useState(mockApplications);
  const [showModal, setShowModal] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const handleDecision = (id, decision) => {
    setApplications(applications.map(app =>
      app.id === id ? { ...app, status: decision } : app
    ));
  };

  const handleViewDocs = (application) => {
    setSelectedApp(application);
    setShowModal(true);
  };

  return (
    <div className="applications-container">
      <h2 className="applications-title text-center" ><FaUserCheck /> Tenant Applications</h2>
      <Card className="applications-card">
        <Card.Body>
          <Table responsive bordered hover className="applications-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id} className="applications-row">
                  <td>{app.name}</td>
                  <td>{app.email}</td>
                  <td>{app.phone}</td>
                  <td>
                    <span className={`badge status-${app.status.toLowerCase()}`}>
                      {app.status}
                    </span>
                  </td>
                  <td>
                    <Button
                      size="sm"
                      variant="outline-info"
                      className="me-2"
                      onClick={() => handleViewDocs(app)}
                    >
                      View Docs
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-success"
                      className="me-2"
                      onClick={() => handleDecision(app.id, "Approved")}
                      disabled={app.status !== "Pending"}
                    >
                      <FaCheck /> Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="outline-danger"
                      onClick={() => handleDecision(app.id, "Rejected")}
                      disabled={app.status !== "Pending"}
                    >
                      <FaTimes /> Reject
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Document Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>📎 Documents: {selectedApp?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedApp && (
            <div className="documents-list">
              <p><strong>ID Proof:</strong> <a href={selectedApp.documents.idProof} download><FaFileDownload /> Download</a></p>
              <p><strong>Rental History:</strong> <a href={selectedApp.documents.rentalHistory} download><FaFileDownload /> Download</a></p>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
