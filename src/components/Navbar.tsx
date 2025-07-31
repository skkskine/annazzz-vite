import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between py-4">
      <Link to="/">Annazzz</Link>
      <div className="*:ml-5">
        <Link to="/illustrations">Illustrazioni</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}
