import React, { useState } from 'react';
import './PropertyListing.css';

const initialProperties = [
  {
    id: 1,
    name: "Modern 2BHK Apartment",
    location: "Andheri West, Mumbai",
    price: 25000,
    area: 850,
    status: "Available",
    
  },
  {
    id: 2,
    name: "Cozy Studio Flat",
    location: "Koregaon Park, Pune",
    price: 18000,
    area: 550,
    status: "Occupied",
    
  },
  {
    id: 3,
    name: "3BHK Family Home",
    location: "Bannerghatta, Bangalore",
    price: 32000,
    area: 1200,
    status: "Under Maintenance",
    
  },
];

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState(initialProperties);
  const [showForm, setShowForm] = useState(false);
  const [newProperty, setNewProperty] = useState({
    name: "",
    location: "",
    price: "",
    area: "",
    status: "Available",
    date: "",
  });

  const handleAddProperty = () => {
    const newEntry = {
      ...newProperty,
      id: properties.length + 1,
    };
    setProperties([...properties, newEntry]);
    setShowForm(false);
    setNewProperty({
      name: "",
      location: "",
      price: "",
      area: "",
      status: "Available",
      date: "",
    });
  };

  const filteredProperties = properties.filter((prop) =>
    prop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prop.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="property-listing">
      <h2 className="title">🏢 Property Listings</h2>
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search by name or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="add-btn" onClick={() => setShowForm(true)}>+ Add Property</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Location</th>
            <th>Rent (₹)</th>
            <th>Area (sq.ft)</th>
            <th>Status</th>
            <th>Images</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProperties.map((prop) => (
            <tr key={prop.id}>
              <td>{prop.name}</td>
              <td>{prop.location}</td>
              <td>{prop.price}</td>
              <td>{prop.area}</td>
              <td>
                <span className={`status ${prop.status.replace(" ", "-").toLowerCase()}`}>
                  {prop.status}
                </span>
              </td>
              <td><input type='file' /></td>
              <td className="action-cell">
                <div className="btn-group">
                  <button className="action-btn view">View</button>
                  <button className="action-btn edit">Edit</button>
                  <button className="action-btn delete">Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Property</h3>
            <input
              type="text"
              placeholder="Name"
              value={newProperty.name}
              onChange={(e) => setNewProperty({ ...newProperty, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              value={newProperty.location}
              onChange={(e) => setNewProperty({ ...newProperty, location: e.target.value })}
            />
            <input
              type="number"
              placeholder="Rent (₹)"
              value={newProperty.price}
              onChange={(e) => setNewProperty({ ...newProperty, price: e.target.value })}
            />
            <input
              type="number"
              placeholder="Area (sq.ft)"
              value={newProperty.area}
              onChange={(e) => setNewProperty({ ...newProperty, area: e.target.value })}
            />
            <select
              value={newProperty.status}
              onChange={(e) => setNewProperty({ ...newProperty, status: e.target.value })}
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Under Maintenance">Under Maintenance</option>
            </select>
            <input
              type="date"
              value={newProperty.date}
              onChange={(e) => setNewProperty({ ...newProperty, date: e.target.value })}
            />
            <div className="modal-buttons">
              <button onClick={handleAddProperty} className="save-btn">Save</button>
              <button onClick={() => setShowForm(false)} className="cancel-btn">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyListing;
