import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <ul className="flex justify-around items-center">
        <li>
           <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            className="bg-white text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-200"
          >
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;