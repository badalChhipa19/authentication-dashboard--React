import { useState } from "react";

import InputBox from "./../inputbox/input-box.component";
import InputButton from "./../inputbtn/input-btn.component";

import "./add-user.style.scss";

const highlightCategory = (cat) => {
  const category1 = document.querySelector(".add__profile_cat--1");
  const category2 = document.querySelector(".add__profile_cat--2");

  if (cat === true) {
    category1.style.borderColor = "#868e96";
    category2.style.borderColor = "#286de0";
  } else {
    category1.style.borderColor = "#286de0";
    category2.style.borderColor = "#868e96";
  }
};

const changes = ($section1, $section2) => {
  const section1 = document.querySelector(".basic__details_form");
  const section2 = document.querySelector(".contact__details_form");

  section2.style.display = $section1;
  section1.style.display = $section2;

  if (section2.style.display === "flex") {
    highlightCategory(true);
  } else {
    highlightCategory(false);
  }
};

const closeForm = () => {
  const popup = document.querySelector(".add__profile_form");

  popup.style.display = "none";
};

const defaultFormFields = {
  name: "",
  email: "",
  phone: "",
  insta: "",
  yt: "",
};

const AddUsers = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, phone, insta, yt } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("asds");
    localStorage.setItem("user", JSON.stringify(formFields));
  };

  return (
    <div className="product__user shadow">
      <input type="checkbox" id="abstract__profile_form" />
      <label htmlFor="abstract__profile_form" className="add__profile_label">
        <div className="add__profile_form">
          <div className="add__profile_box">
            <div className="heading__bar">
              <h2 className="heading__secondary">Add New Profile</h2>
              <div onClick={() => closeForm()} className="close__form">
                &times;
              </div>
            </div>
            <hr />
            <div className="add__profile_categories">
              <p className="add__profile_cat add__profile_cat--1 highlight">
                Basic
              </p>
              <p className="add__profile_cat add__profile_cat--2">Contact</p>
            </div>

            <form className="dashboard__form">
              <div className="basic__details_form">
                <InputBox
                  onChangeHandler={handleChange}
                  labelContent="Enter Your Nmae*"
                  type="text"
                  inputId="input__name"
                  values={name}
                  names="name"
                />
                <InputBox
                  onChangeHandler={handleChange}
                  labelContent="Enter Email*"
                  type="email"
                  inputId="input__email"
                  values={email}
                  names="email"
                />
                <InputBox
                  onChangeHandler={handleChange}
                  labelContent="Enter Phone*"
                  type="tel"
                  inputId="input__phone"
                  values={phone}
                  names="phone"
                />
                <hr />
                <InputButton
                  onClickHandler={() => {
                    changes("flex", "none");
                  }}
                  value="Next"
                  btnClass="btn__next"
                  btnType="button"
                  btnName="btn__next"
                />
              </div>

              <div className="contact__details_form">
                <InputBox
                  onChangeHandler={handleChange}
                  labelContent="Instagram Link(Optional)"
                  type="text"
                  inputId="input__insta"
                  isRequire={false}
                  placeholder="Eg. ..intagram.com/username"
                  values={insta}
                  names="insta"
                />
                <InputBox
                  onChangeHandler={handleChange}
                  labelContent="youtube Link(Optional)"
                  type="text"
                  inputId="input__yt"
                  isRequire={false}
                  placeholder="Eg. ..Youtube/username"
                  values={yt}
                  names="yt"
                />
                <hr />
                <div className="btns__box">
                  <InputButton
                    onClickHandler={() => {
                      changes("none", "flex");
                    }}
                    value="back"
                    btnClass="btn__back"
                    btnType="button"
                    btnName="btn__back"
                  />
                  <InputButton
                    onClickHandler={handleSubmit}
                    value="Done"
                    btnClass="btn__submit"
                    btnType="submit"
                    btnName="btn__submit"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </label>

      <div className="add__profile_btn">
        <label>
          <ion-icon id="add__profile_icon" name="add-outline"></ion-icon>
        </label>
        <p className="add__profile_text">Add Profile</p>
      </div>
      <div className="profile__details_box">
        <h2 className="heading__secondary">Badal Chhipa</h2>
        <div className="profile__content">
          <div className="profile__content_icon profile__content_icon--1">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </div>
          <p className="profile__content_text">+91 8386863919</p>
        </div>
        <div className="profile__content">
          <div className="profile__content_icon profile__content_icon--2">
            <ion-icon name="logo-instagram"></ion-icon>
          </div>
          <p className="profile__content_text">badal_chhipa</p>
        </div>
        <div className="profile__content">
          <div className="profile__content_icon profile__content_icon--3">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <p className="profile__content_text">badalchhipa5@gmail.com</p>
        </div>
        <div className="profile__content">
          <div className="profile__content_icon profile__content_icon--4">
            <ion-icon name="logo-youtube"></ion-icon>
          </div>
          <p className="profile__content_text">badal_chhipa</p>
        </div>
      </div>
    </div>
  );
};

export default AddUsers;
