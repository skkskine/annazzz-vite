import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout() {
  return (
    <div className="px-5">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
