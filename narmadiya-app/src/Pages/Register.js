import React, { useState } from "react";
import RegisterCss from "../Styles/Register.module.css";
import FormBackground from "../img/FormBackground.jpg";
import Dropzone from "react-dropzone-uploader";
import UserImage from "../img/userImage.png";
import { getDroppedOrSelectedFiles } from "html5-file-selector";
import axios from "axios";
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';
import {FaUserPlus} from 'react-icons/fa'

function Register() {
  // states for form
  const [user, setUser] = useState({ 
    userFullName: "",
    userEmail: "",
    userMobile: "",
    userUserName: "",
    userPassword: "",
    userConfirmPassword: "",
    userImage: "",
  });
  const [status, setStatus] = useState(false);
  const [usercreated, setUserCreated] = useState(false);
  const [userExist, setUserExist] = useState(false);
  const [showPass,setShowPass] = useState(false)
  const [showPassConfirm,setShowPassConfirm] = useState(false)
  const [error, setError] = useState({
    userFullName: "",
    userEmail: "",
    userMobile: "",
    userUserName: "",
    userPassword: "",
    userConfirmPassword: "",
    userImage: "",
  });

  // onInputs Handle
  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    if (value !== "") {
      setError({ ...error, [name]: "" });
    }
  };

  const fileParams = ({ meta }) => {
    return { url: "https://httpbin.org/post" };
  };
  const onFileChange = ({ meta, file }, status) => {
    // console.log(status, meta, file)
    setError({...error,userImage:""})
    if (meta.percent < 100) {
      setStatus(false);
    } else {
      setStatus(true);
    }
    if (status === "removed") {
      setUser({
        ...user,
        userImage: "",
      });
      setStatus(false);
    } else {
      setUser({
        ...user,
        userImage: file.name,
      });
    }
    console.log(file.name);
  };
  const onSubmit = (files, allFiles, event) => {
    event.preventDefault();
    allFiles.forEach((f) => f.remove());
  };

  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };

  // select file input
  const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
    return (
      <>
        <label>
          <FaUserPlus style={{fontSize:"100px"}}/>
          <input
            style={{ display: "none" }}
            type="file"
            accept={accept}
            onChange={(e) => {
              getFilesFromEvent(e).then((chosenFiles) => {
                onFiles(chosenFiles);
                setUser({
                  ...user,
                  userImage: chosenFiles[0].name,
                });
              });
            }}
          />
        </label>
      </>
    );
  };

  // On Form Submit
  const onFormSubmit = (event) => {
    event.preventDefault();
    let error = {};
    if (!user.userFullName) {
      error = { ...error, userFullName: "true" };
    }
    if (!user.userEmail) {
      error = { ...error, userEmail: "true" };
    }
    if (!user.userMobile) {
      error = { ...error, userMobile: "true" };
    }
    if (!user.userUserName) {
      error = { ...error, userUserName: "true" };
    }
    if (!user.userPassword) {
      error = { ...error, userPassword: "true" };
    }
    if (!user.userConfirmPassword) {
      error = { ...error, userConfirmPassword: "true" };
    }
    if (!user.userImage) {
      error = { ...error, userImage: "true" };
    }
    if(user.userMobile.length !== 10){
      error = { ...error, userMobile: "true" };
    }
    if(user.userPassword.length < 8){
      error = { ...error, userPassword: "true" };
    }
    if (user.userPassword !== user.userConfirmPassword) {
      setError({ ...error,userPassword: "true" , userConfirmPassword: "true" });
      return;
    }
    if (
      user.userFullName &&
      user.userEmail &&
      user.userMobile &&
      user.userUserName &&
      user.userPassword &&
      user.userConfirmPassword &&
      user.userImage &&
      user.userMobile.length ===10 &&
      user.userPassword.length >8
    ) {
      setError({
        userFullName: "",
        userEmail: "",
        userMobile: "",
        userUserName: "",
        userPassword: "",
        userConfirmPassword: "",
        userImage: "",
      });
      axios
        .post("http://localhost:8000/", user)
        .then((res) => {
          setUser({
            userFullName: "",
            userEmail: "",
            userMobile: "",
            userUserName: "",
            userPassword: "",
            userConfirmPassword: "",
            userImage: "",
          })
          setUserCreated(true)})
        .catch((err) => setUserExist(true));
      return;
    } else {
      setError(error);
    }
  };
  //------------------------------------------------------------------------

  return (
    <>
      <div
        className={RegisterCss.formBody}
        style={{ backgroundImage: `url(${FormBackground})` }}
      >
        <div className={`${RegisterCss.formWrapper} container`}>
          {usercreated && (
            <div
              class="alert alert-success alert-dismissible fade show"
              role="alert"
            >
              User Created Successfully!
              <button
                type="button"
                class="btn-close"
                onClick={() =>setUserCreated(false)}
              ></button>
            </div>
          )}
          {userExist && (
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
              User Already Exist
            <button type="button" class="btn-close" onClick={() => setUserExist(false)}></button>
          </div>
          )}
          <h2 className={RegisterCss.hadding}>Register</h2>
          <form
            className={RegisterCss.formCss}
            autoComplete="off"
            onSubmit={onFormSubmit}
          >
            <div className={`${RegisterCss.FormRow} row`}>
              <div className="col-md-8">
                <div className={`${RegisterCss.formField} form-group `}>
                  {/* <label className={`${RegisterCss.formLable}`} for="registerName">Full Name</label> */}
                  <input
                    type="text"
                    name="userFullName"
                    className={`form-control ${error.userFullName ? RegisterCss.formInputPenalError :RegisterCss.formInputPenal}`}
                    value={user.userFullName}
                    onChange={handleInputs}
                    id="registerName"
                    placeholder="Full Name"
                  />
                </div>
                <div className={`${RegisterCss.formField} form-group `}>
                  {/* <label className={`${RegisterCss.formLable}`} for="registerEmail">Email address</label> */}
                  <input
                    type="email"
                    name="userEmail"
                    className={` form-control ${error.userEmail ? RegisterCss.formInputPenalError : RegisterCss.formInputPenal}`}
                    value={user.userEmail}
                    onChange={handleInputs}
                    id="registerEmail"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                </div>
                <div className={`${RegisterCss.formField} form-group`}>
                  {/* <label className={`${RegisterCss.formLable}`} for="registerMobile">Mobile Number</label> */}
                  <input
                    type="number"
                    
                    name="userMobile"
                    className={`${RegisterCss.numberInput} form-control ${error.userMobile ? RegisterCss.formInputPenalError :RegisterCss.formInputPenal}`}
                    value={user.userMobile}
                    onChange={handleInputs}
                    id="registerMobile"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className={`${RegisterCss.formField} form-group`}>
                  {/* <label className={`${RegisterCss.formLable}`} for="registerUserName">User Name</label> */}
                  <input
                    type="text"
                    name="userUserName"
                    className={` form-control ${error.userUserName ? RegisterCss.formInputPenalError :RegisterCss.formInputPenal}`}
                    value={user.userUserName}
                    onChange={handleInputs}
                    id="registerUserName"
                    placeholder="Enter User Name"
                  />
                </div>
                <div className={`${RegisterCss.formField} form-group`}>
                  {/* <label className={`${RegisterCss.formLable}`} for="registerPassword">Password</label> */}
                  <input
                    type={showPass ? "text":"password"}
                    name="userPassword"
                    className={` form-control ${error.userPassword ? RegisterCss.formInputPenalError :RegisterCss.formInputPenal}`}
                    value={user.userPassword}
                    onChange={handleInputs}
                    id="registerPassword"
                    placeholder="Password"
                  />
                  <span class={`${RegisterCss.showHide}`} onClick={()=>setShowPass(!showPass)}> {showPass ? <AiOutlineEye />:<AiOutlineEyeInvisible/>}</span>
                </div>
                <div className={`${RegisterCss.formField} form-group`}>
                  {/* <label className={`${RegisterCss.formLable}`} for="registerConfirmPassword">Password</label> */}
                  <input
                    type={showPassConfirm ? "text":"password"}
                    name="userConfirmPassword"
                    className={` form-control ${error.userConfirmPassword ? RegisterCss.formInputPenalError :RegisterCss.formInputPenal}`}
                    value={user.userConfirmPassword}
                    onChange={handleInputs}
                    id="registerConfirmPassword"
                    placeholder="Confirm Password"
                  />
                  <span class={`${RegisterCss.showHide}`} onClick={()=>setShowPassConfirm(!showPassConfirm)}> {showPassConfirm ? <AiOutlineEye />:<AiOutlineEyeInvisible/>}</span>

                </div>
              </div>
              <div className="col-md-4">
                <div
                  className={`${RegisterCss.formField} ${RegisterCss.Profile} form-group`}
                >
                  {/* <label className={`${RegisterCss.formLable}`} for="registerImage">Password</label> */}
                  <div className={`${RegisterCss.FileInput} uploadImage`}>
                    Profile Picture
                  </div>
                  <div className={`${error.userImage ? RegisterCss.ImageWrapperError :RegisterCss.ImageWrapper}`}>
                    <Dropzone
                      src={UserImage}
                      onSubmit={onSubmit}
                      onChangeStatus={onFileChange}
                      InputComponent={selectFileInput}
                      getUploadParams={fileParams}
                      getFilesFromEvent={getFilesFromEvent}
                      accept="image/*"
                      maxFiles={1}
                      inputContent="Drop A File"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{ backgroundColor: status ? "#f002" : "transparent" }}
                    className={`${RegisterCss.Button} btn btn-primary`}
                  >
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
