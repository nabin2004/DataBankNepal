import { Link } from "react-router-dom";

const OverlayMenu = ({ isOpen, onClose }) => {
    return (
      <div className={`overlay ${isOpen ? 'block' : 'hidden'} fixed inset-0 z-50 bg-black bg-opacity-50`} onClick={onClose}>
        <div className="menu-container absolute top-0 right-0 h-full bg-white p-4">
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/insights">Insights</Link></li>
            <li><Link to="/download">Download</Link></li>
            <li><Link to="/api">API</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    );
  };

export default OverlayMenu;