import "./title-box.style.scss";

const TitleBox = () => {
  return (
    <div className="title__box">
      <h2 className="heading__secondary">Dashboard</h2>
      <div className="title__box_items">
        <div className="title__search_box">
          <input type="text" className="input__searchbox" />
          <div className="search__icon">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
        <div className="notification__icon_box">
          <ion-icon
            id="notification__icon"
            name="notifications-outline"
          ></ion-icon>
        </div>
        <div className="profile__photo"></div>
      </div>
    </div>
  );
};

export default TitleBox;
