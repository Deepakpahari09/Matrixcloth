import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="flex justify-center space-x-5">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/Dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>
    </nav>
  );
}
