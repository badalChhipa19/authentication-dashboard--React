import { useState } from "react";
import InputBox from "./../inputbox/input-box.component";
import InputBtn from "../inputbtn/input-btn.component";
import {
  signInwithGooglePopup,
  createUserDocument,
  createUserAccount,
  signInUserAccount,
} from "./../../utils/firebase.util";

import "./form.style.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
};

const Form = function () {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password } = formFields;

  const signInWithGoogleHandler = async () => {
    try {
      const { user } = await signInwithGooglePopup();
      createUserDocument(user);
      if (user) {
        window.location = "/dashboard";
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    try {
      const { user } = await createUserAccount(email, password);
      if (user) {
        await createUserDocument(user, { displayName });
      }
    } catch (error) {
      if (error.code === "auth/weak-password") {
        alert("Password should be 6 characters long.");
      } else if (error.code === "auth/invalid-email") {
        alert("Incorrect Email.");
      } else if (error.code === "auth/email-already-in-use") {
        alert("Email in user.");
      } else {
        alert(error.code);
      }
    }
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      const user = await signInUserAccount(email, password);
      console.log(user);
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("Invalid Credentials.");
      } else if (error.code === "auth/invalid-email") {
        alert("Incorrect Email.");
      } else {
        alert(error.code);
      }
    }
  };

  return (
    <div className="right">
      <input type="checkbox" id="abstract__form_details" />
      <h2 className="heading__secondary signin__title">Sign In</h2>
      <h2 className="heading__secondary signup__title">Sign Up</h2>
      <p className="form__text">Sign in to your account</p>
      <div className="direct__signIn_box">
        <button
          onClick={signInWithGoogleHandler}
          className="google__signin_btn direct__signin_btn"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="google-icon 1" clipPath="url(#clip0_0_170)">
              <path
                id="Vector"
                d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z"
                fill="#4285F4"
              />
              <path
                id="Vector_2"
                d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z"
                fill="#34A853"
              />
              <path
                id="Vector_3"
                d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z"
                fill="#FBBC05"
              />
              <path
                id="Vector_4"
                d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z"
                fill="#EB4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_170">
                <rect
                  width="15.3686"
                  height="15.3686"
                  fill="white"
                  transform="translate(0.0396118 0.287949)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="icon__text">
            Sign in with <span>Google</span>{" "}
          </p>
        </button>
        <button className="apple__signin_btn direct__signin_btn">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="apple 1" clipPath="url(#clip0_0_178)">
              <path
                id="Vector"
                d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                fill="#999999"
              />
            </g>
            <defs>
              <clipPath id="clip0_0_178">
                <rect
                  width="12.6242"
                  height="15.3686"
                  fill="white"
                  transform="translate(0.568054 0.190186)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="icon__text">
            Sign in with <span>apple</span>
          </p>
        </button>
      </div>

      <form className="signin__form">
        <InputBox
          labelContent="Enter Name"
          type="text"
          inputId="input_name"
          inputClass="input__name"
          className="form__input_name"
          values={displayName}
          names="displayName"
          onChangeHandler={changeHandler}
        />
        <InputBox
          labelContent="Enter address"
          type="text"
          inputId="input_address"
          values={email}
          names="email"
          onChangeHandler={changeHandler}
        />
        <InputBox
          labelContent="Password"
          type="password"
          inputId="input_password"
          values={password}
          names="password"
          onChangeHandler={changeHandler}
        />
        <a href="http://nothing.com" className="forget__password form__link">
          Forgot Password?
        </a>
        <InputBtn
          value="Sign In"
          btnClass="sign__in_btn"
          btnType="submit"
          btnName="SignIn"
          onClickHandler={signInHandler}
        />
        <InputBtn
          value="Sign Up"
          btnClass="sign__up_btn"
          btnType="submit"
          btnName="SignUp"
          onClickHandler={signUpHandler}
        />
      </form>

      <p className="registration__link registration__link_signup">
        Don't have an account?
        <label
          htmlFor="abstract__form_details"
          className="registration__link_label form__link"
        >
          Register now
        </label>
      </p>
      <p className="registration__link registration__link_signin">
        Already have an account?
        <label
          htmlFor="abstract__form_details"
          className="registration__link_label form__link"
        >
          Sign In now
        </label>
      </p>
    </div>
  );
};

export default Form;
