import React, { useState } from "react";
import RegisterCss from "../Styles/Register.module.css";
import FormBackground from "../img/FormBackground.jpg";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

export const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    if (value !== "") {
      setError({ ...error, [name]: "" });
    }
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    let error = {};
    if (!user.userFullName) {
      error = { ...error, userFullName: "true" };
    }

    if (user.email && user.password) {
      setError({
        email: "",
        password: "",
      });
      axios.post("http://localhost:8000/login", user).then((res) => {
        setUser({
          email: "",
          password: "",
        });
      });
      return;
    } else {
      setError(error);
    }
  };

  return (
    <div
      className={RegisterCss.formBody}
      style={{ backgroundImage: `url(${FormBackground})` }}
    >
      <div className={`${RegisterCss.formWrapper} container`}>
        <form
          className={RegisterCss.formCss}
          autoComplete="off"
          onSubmit={onFormSubmit}
        >
          <div className={`${RegisterCss.FormRow} row`}>
            <div className="col-md-12">
              <div className={`${RegisterCss.formField} form-group `}>
                <input
                  type="text"
                  name="email"
                  className={`form-control ${
                    error.userFullName
                      ? RegisterCss.formInputPenalError
                      : RegisterCss.formInputPenal
                  }`}
                  value={user.email}
                  onChange={handleInputs}
                  id="registerName"
                  placeholder="Full Name"
                />
              </div>
              <div className={`${RegisterCss.formField} form-group`}>
                {/* <label className={`${RegisterCss.formLable}`} for="registerPassword">Password</label> */}
                <input
                  type={showPass ? "text" : "password"}
                  name="password"
                  className={` form-control ${
                    error.password
                      ? RegisterCss.formInputPenalError
                      : RegisterCss.formInputPenal
                  }`}
                  value={user.password}
                  onChange={handleInputs}
                  id="registerPassword"
                  placeholder="Password"
                />
                <span
                  class={`${RegisterCss.showHide}`}
                  onClick={() => setShowPass(!showPass)}
                >
                  {" "}
                  {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-12 text-center"><button type="submit"style={{ backgroundColor: "transparent" }}
                    className={`${RegisterCss.Button} btn btn-primary col-lg-2`}>Login</button>
                    </div>
        </form>
      </div>
    </div>
  );
};
