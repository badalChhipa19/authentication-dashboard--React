import "./sidebar.style.scss";

const Sidebar = () => {
  return (
    <div className="dashboard__sidebar">
      <h2 className="heading__secondary">Board</h2>
      <ul className="sidebar__navs_list">
        <li className="list__item">
          <ion-icon name="pie-chart-outline"></ion-icon>
          <a href="http://as.co" className="item__link">
            Dashboard
          </a>
        </li>
        <li className="list__item">
          <ion-icon name="pricetags-outline"></ion-icon>
          <a href="http://as.co" className="item__link">
            Transactions
          </a>
        </li>
        <li className="list__item">
          <ion-icon name="calendar-clear-outline"></ion-icon>
          <a href="http://as.co" className="item__link">
            Schedules
          </a>
        </li>
        <li className="list__item">
          <ion-icon name="person-circle-outline"></ion-icon>
          <a href="http://as.co" className="item__link">
            Users
          </a>
        </li>
        <li className="list__item">
          <ion-icon name="settings-outline"></ion-icon>
          <a href="http://as.co" className="item__link">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
