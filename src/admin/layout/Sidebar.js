import { NavLink, Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <div className="Sidebar__container">
      <div className="Sidebar__content">
        <Link to="/" className="Content__name">
          <h1 className="Sidebar__shopName">
            {" "}
            Speak <br /> Shop{" "}
          </h1>
        </Link>
        <ul className="Sidebar__navLink">
            <NavLink
              to="/admin/product"
              className={`Nav__links ${
              "/admin/product" === pathname ? "Nav__link-selected" : ""
              }`}
            >
              Product
            </NavLink>
            <NavLink
              to="/admin/user"
              className={`Nav__links ${
              "/admin/user" === pathname ? "Nav__link-selected" : ""
              }`}
            >
              User
            </NavLink>       
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
