import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // import useNavigate

export default function RegistrationTable() {
  const [registrations, setRegistrations] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({});
  const navigate = useNavigate(); // for navigation

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('registrations')) || [];
    setRegistrations(saved);
  }, []);

  const handleDelete = (index) => {
    const updated = [...registrations];
    updated.splice(index, 1);
    setRegistrations(updated);
    localStorage.setItem('registrations', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(registrations[index]);
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditData({});
  };

  const handleSave = () => {
    const updated = [...registrations];
    updated[editIndex] = editData;
    setRegistrations(updated);
    localStorage.setItem('registrations', JSON.stringify(updated));
    setEditIndex(null);
    setEditData({});
  };

  const handleChange = (e) => {
    setEditData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const containerStyle = {
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  };

  const thStyle = {
    backgroundColor: '#4f46e5',
    color: '#fff',
    padding: '1rem',
    textAlign: 'left',
  };

  const tdStyle = {
    padding: '0.9rem 1rem',
    borderBottom: '1px solid #eee',
  };

  const buttonStyle = {
    padding: '0.4rem 0.9rem',
    fontSize: '0.9rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.2s ease-in-out',
  };

  const editBtn = {
    ...buttonStyle,
    backgroundColor: '#3b82f6',
    color: '#fff',
    marginRight: '0.5rem',
  };

  const deleteBtn = {
    ...buttonStyle,
    backgroundColor: '#ef4444',
    color: '#fff',
  };

  const saveBtn = {
    ...buttonStyle,
    backgroundColor: '#10b981',
    color: '#fff',
    marginRight: '0.5rem',
  };

  const cancelBtn = {
    ...buttonStyle,
    backgroundColor: '#9ca3af',
    color: '#fff',
  };

  const addBtn = {
    ...buttonStyle,
    backgroundColor: '#6366f1',
    color: '#fff',
    marginRight: '1rem',
  };

  const inputStyle = {
    padding: '0.5rem',
    width: '100%',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '0.95rem',
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
         <h2 style={{ color: '#1f2937', margin: 0 }}>📋 Registered Users</h2>
        <button style={addBtn} onClick={() => navigate('/register')}>
          + Add Registration
        </button>
      </div>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Sr No.</th>
            <th style={thStyle}>Full Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Mobile</th>
            <th style={thStyle}>Gender</th>
            <th style={thStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {registrations.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ ...tdStyle, textAlign: 'center' }}>No registrations found</td>
            </tr>
          ) : (
            registrations.map((reg, index) => (
              <tr key={index}>
                <td style={tdStyle}>{index + 1}</td>

                <td style={tdStyle}>
                  {editIndex === index ? (
                    <input
                      name="fullName"
                      value={editData.fullName}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  ) : (
                    reg.fullName
                  )}
                </td>

                <td style={tdStyle}>
                  {editIndex === index ? (
                    <input
                      name="email"
                      value={editData.email}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  ) : (
                    reg.email
                  )}
                </td>

                <td style={tdStyle}>
                  {editIndex === index ? (
                    <input
                      name="mobile"
                      value={editData.mobile}
                      onChange={handleChange}
                      style={inputStyle}
                    />
                  ) : (
                    reg.mobile
                  )}
                </td>

                <td style={tdStyle}>
                  {editIndex === index ? (
                    <select
                      name="gender"
                      value={editData.gender}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  ) : (
                    reg.gender
                  )}
                </td>

                <td style={tdStyle}>
                  {editIndex === index ? (
                    <>
                      <button onClick={handleSave} style={saveBtn}>Save</button>
                      <button onClick={handleCancel} style={cancelBtn}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(index)} style={editBtn}>Edit</button>
                      <button onClick={() => handleDelete(index)} style={deleteBtn}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

