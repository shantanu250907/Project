import { NavLink, useNavigate } from 'react-router-dom';
import {
  
  FaUserPlus,
  FaBuilding,
  FaListAlt,
  FaMoneyBillWave,
  FaTools,
  FaComments,
  FaUserShield,
  FaChartLine,
  FaSignOutAlt,
  FaTachometerAlt,
} from 'react-icons/fa';


export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear auth state if needed
    localStorage.removeItem('user'); // Example cleanup
    navigate('/welcome-back');
  };

  const menu = [
    { path: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
    { path: '/register', label: 'Register', icon: <FaUserPlus /> },
    { path: '/properties', label: 'Property Listings', icon: <FaBuilding /> },
    { path: '/TenantManagement', label: 'Tenant Management', icon: <FaListAlt /> },
    { path: '/applications', label: 'Applications', icon: <FaChartLine /> },
    { path: '/payments', label: 'Payments', icon: <FaMoneyBillWave /> },
    { path: '/maintenance', label: 'Maintenance', icon: <FaTools /> },
    { path: '/messages', label: 'Messages', icon: <FaComments /> },
    { path: '/Welcome', label: 'Logout', icon: <FaSignOutAlt /> },
  ];

  const sidebarStyle = {
    width: '250px',
    background: 'linear-gradient(to bottom, #a0c6f7ff, #f8f9fc)',
    padding: '2rem 1rem',
    boxShadow: '2px 0 12px rgba(145, 84, 84, 0.05)',
    borderRight: '1px solid #f4eeeeff',
    minHeight: '100vh',
    position: 'sticky',
    top: 0,
    transition: 'all 0.3s ease',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '2.5rem',
    color: '#4f46e5',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
  };

  const ulStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  const liStyle = {
    margin: '0.8rem 0',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0.65rem 1rem',
    borderRadius: '10px',
    color: '#333',
    fontWeight: 500,
    transition: 'all 0.2s ease-in-out',
  };

  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#f7f9ffff',
    color: '#4f46e5',
    fontWeight: 600,
    boxShadow: 'inset 2px 0 0 #4f46e5',
  };

  const linkHoverStyle = {
    backgroundColor: '#f0f4ff',
  };

  const iconStyle = {
    marginRight: '0.9rem',
    fontSize: '1.2rem',
  };

  return (
    <div style={sidebarStyle}>
      <div style={headingStyle}>
        <FaUserShield />
        Admin Panel
      </div>
      <ul style={ulStyle}>
        {menu.map((item) => (
          <li key={item.path} style={liStyle}>
            <NavLink
              to={item.path}
              style={({ isActive }) =>
                isActive ? activeLinkStyle : linkStyle
              }
              onMouseEnter={(e) => {
                if (!e.target.classList.contains('active'))
                  e.target.style.backgroundColor = linkHoverStyle.backgroundColor;
              }}
              onMouseLeave={(e) => {
                if (!e.target.classList.contains('active'))
                  e.target.style.backgroundColor = 'transparent';
              }}
            >
              <span style={iconStyle}>{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
        {/* Logout Link */}
        <li style={liStyle}>
          <div
            onClick={handleLogout}
            style={{ ...linkStyle, cursor: 'pointer' }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = linkHoverStyle.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = 'transparent')}
          >
            
          </div>
        </li>
      </ul>
    </div>
  );
}
