import Sidebar from "../components/Sidebar";

import "./Layout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="DefaultLayout">
      <div className="DefaultLayout__sideBar">
        <Sidebar />
      </div>
      <div className="DefaultLayout__content">{children}</div>
    </div>
  );
};

export default DefaultLayout;
