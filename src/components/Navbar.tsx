import { Link } from "react-router-dom";

export default function Navbar() {
  const menuMobileClasses =
    "transition-opacity duration-500 bg-white justify-center fixed items-center flex -z-10 left-0 top-0 flex-col opacity-0  w-screen h-screen text-lg";
  const menuDesktopClasses =
    "*:md:ml-5 md:opacity-100 md:visible md:relative md:block md:w-auto md:h-auto md:z-0 md:text-base";

  return (
    <nav className="flex justify-between py-4">
      <Link to="/">
        <img
          className="h-8"
          src="/annazzzlogo.png"
          alt="logo Anna Zampatti"
        ></img>
      </Link>
      <div
        className="hover:cursor-pointer md:hidden size-5 border-3 rounded-full border-gray-600"
        onClick={() => openMenu()}
      ></div>
      <div id="menu" className={menuMobileClasses + " " + menuDesktopClasses}>
        <Link to="/" onClick={() => closeMenu()} className="md:hidden">
          Home
        </Link>
        <Link to="/illustrations" onClick={() => closeMenu()}>
          Illustrazioni
        </Link>
        <Link to="/about" onClick={() => closeMenu()}>
          Bio
        </Link>
        <Link to="/contacts" onClick={() => closeMenu()}>
          Contatti
        </Link>
        <div
          className="md:hidden hover:cursor-pointer absolute top-6 right-5"
          onClick={() => closeMenu()}
        >
          <div className="w-5 h-0.5 bg-gray-900 rounded-2xl rotate-45"></div>
          <div className="w-5 h-0.5 bg-gray-900 rounded-2xl -rotate-45 -mt-0.5"></div>
        </div>
      </div>
    </nav>
  );
}

function openMenu() {
  const menu = document.querySelector("#menu");
  menu?.classList.remove("opacity-0");
  menu?.classList.add("opacity-100", "z-20");
}

function closeMenu() {
  const menu = document.querySelector("#menu");
  menu?.classList.remove("opacity-100");
  menu?.classList.add("opacity-0");

  setTimeout(() => {
    menu?.classList.remove("z-20");
  }, 500);
}
