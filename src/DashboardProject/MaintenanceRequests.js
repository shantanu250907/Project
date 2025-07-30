import React, { useState } from "react";
import { Card, Button, Modal, Form, Table, Badge } from "react-bootstrap";
import { FaTools, FaCheckCircle, FaWrench, FaPlusCircle } from "react-icons/fa";
import "./MaintenanceRequests.css";

const initialRequests = [
  { id: 1, tenant: "Rahul Sharma", issue: "Leaking kitchen sink", vendor: "", status: "Open" },
  { id: 2, tenant: "Anjali Mehta", issue: "AC not working", vendor: "CoolAir Solutions", status: "In Progress" },
];

export default function MaintenanceRequests() {
  const [requests, setRequests] = useState(initialRequests);
  const [showModal, setShowModal] = useState(false);
  const [newRequest, setNewRequest] = useState({ tenant: "", issue: "" });

  const [assignModal, setAssignModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [vendor, setVendor] = useState("");

  const handleAddRequest = () => {
    const newId = requests.length + 1;
    setRequests([...requests, { id: newId, ...newRequest, vendor: "", status: "Open" }]);
    setShowModal(false);
    setNewRequest({ tenant: "", issue: "" });
  };

  const handleAssignVendor = () => {
    setRequests(requests.map(req =>
      req.id === selectedRequestId ? { ...req, vendor, status: "In Progress" } : req
    ));
    setAssignModal(false);
    setVendor("");
  };

  const handleMarkCompleted = (id) => {
    setRequests(requests.map(req =>
      req.id === id ? { ...req, status: "Completed" } : req
    ));
  };

  const getStatusVariant = (status) => {
    switch (status) {
      case "Open": return "warning";
      case "In Progress": return "primary";
      case "Completed": return "success";
      default: return "secondary";
    }
  };

  return (
    <div className="maintenance-wrapper">
      <div className="header-box">
        <h2 className="page-title"><FaTools className="me-2" />Maintenance Requests</h2>
        <p className="subtitle">Track and manage tenant maintenance issues easily</p>
      </div>

      <Button variant="outline-primary" className="add-btn mb-4" onClick={() => setShowModal(true)}>
        <FaPlusCircle className="me-2" /> Submit New Request
      </Button>

      <Card className="shadow-lg">
        <Card.Body>
          <Table responsive bordered hover className="request-table">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>Tenant</th>
                <th>Issue</th>
                <th>Vendor</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.map(req => (
                <tr key={req.id}>
                  <td>{req.id}</td>
                  <td>{req.tenant}</td>
                  <td>{req.issue}</td>
                  <td>{req.vendor || "-"}</td>
                  <td>
                    <Badge bg={getStatusVariant(req.status)}>{req.status}</Badge>
                  </td>
                  <td>
                    {req.status === "Open" && (
                      <Button size="sm" variant="info" onClick={() => {
                        setSelectedRequestId(req.id);
                        setAssignModal(true);
                      }}>
                        <FaWrench className="me-1" /> Assign Vendor
                      </Button>
                    )}
                    {req.status === "In Progress" && (
                      <Button size="sm" variant="success" onClick={() => handleMarkCompleted(req.id)}>
                        <FaCheckCircle className="me-1" /> Mark Completed
                      </Button>
                    )}
                    {req.status === "Completed" && <span className="text-success fw-bold">✅ Done</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* New Request Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🛠 Submit Maintenance Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="tenantName" className="mb-3">
              <Form.Label>Tenant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                value={newRequest.tenant}
                onChange={(e) => setNewRequest({ ...newRequest, tenant: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="issueDesc">
              <Form.Label>Issue Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Describe the issue"
                value={newRequest.issue}
                onChange={(e) => setNewRequest({ ...newRequest, issue: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAddRequest}>Submit</Button>
        </Modal.Footer>
      </Modal>

      {/* Assign Vendor Modal */}
      <Modal show={assignModal} onHide={() => setAssignModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>🧰 Assign Vendor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="vendorName">
            <Form.Label>Vendor Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter vendor or service name"
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAssignModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleAssignVendor}>Assign</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
