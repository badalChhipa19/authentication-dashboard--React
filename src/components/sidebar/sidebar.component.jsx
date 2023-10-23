import { useContext } from "react";

import { userContext } from "./../../context/user.context";

import "./sidebar.style.scss";

const Sidebar = () => {
  const { setCurrentUser } = useContext(userContext);

  const logOutHandler = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="dashboard__sidebar">
      <h3 className="heading__tertiary">Infinity</h3>
      <ul className="sidebar__navs_list">
        <li className="list__item">
          <ion-icon name="pie-chart-outline"></ion-icon>
          <p className="item__link">Dashboard</p>
        </li>
        <li className="list__item">
          <ion-icon name="pricetags-outline"></ion-icon>
          <p className="item__link">Transactions</p>
        </li>
        <li className="list__item">
          <ion-icon name="calendar-clear-outline"></ion-icon>
          <p className="item__link">Schedules</p>
        </li>
        <li className="list__item">
          <ion-icon name="person-circle-outline"></ion-icon>
          <p className="item__link">Users</p>
        </li>
        <li className="list__item">
          <ion-icon name="settings-outline"></ion-icon>
          <p className="item__link">Settings</p>
        </li>
        <li className="list__item" onClick={logOutHandler}>
          <ion-icon name="log-out-outline"></ion-icon>
          <p className="item__link">Log Out</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
