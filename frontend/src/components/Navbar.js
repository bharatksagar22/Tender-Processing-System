import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Tender System</h1>
      <div>
        <Link className="mx-2" to="/dashboard">Dashboard</Link>
        <Link className="mx-2" to="/upload">Upload</Link>
        <Link className="mx-2" to="/status">Status</Link>
      </div>
    </nav>
  );
};

export default Navbar;
