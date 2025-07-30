import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import './FirstPage.css';
import { FaWhatsapp, FaInstagram, FaHome, FaStar, FaClipboardCheck } from 'react-icons/fa';

export default function FirstPage() {
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleOwnerClick = () => {
    navigate('/Owner1');
  };

  const handleTenantClick = () => {
    setRole('tenant');
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="page-container">
      <header className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <p className="hero-title">Find Your Dream Rental Home</p>
          <p className="hero-subtitle">Smart. Simple. Hassle-Free House Renting.</p>

          <div className="buttons">
            <Button className="owner-btn me-2" onClick={handleOwnerClick}>
              I’m an Owner →
            </Button>
            <Button className="tenant-btn" onClick={handleTenantClick}>
              I’m a Tenant →
            </Button>
          </div>
        </div>
      </header>

      {/* Tenant Modal */}
      <Modal show={showModal} onHide={handleClose} centered size="md">
        <Modal.Header closeButton>
          <Modal.Title>Tenant Portal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-center">Login & Signup functionality coming soon!</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
