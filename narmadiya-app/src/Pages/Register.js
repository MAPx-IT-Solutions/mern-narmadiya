import React, {useState} from 'react'
import RegisterCss from '../Styles/Register.module.css'
import FormBackground from '../img/background.png'
import Dropzone from 'react-dropzone-uploader'
import UserImage from '../img/userImage.png'
import { getDroppedOrSelectedFiles } from 'html5-file-selector'
import axios from 'axios'
 
function Register() {
 // states for form
 const [user, setUser] = useState({
   userFullName: "", userEmail: "", userMobile: "", userUserName: "", userPassword: "", userConfirmPassword: "", userImage:""
 })
 const [status,setStatus] = useState(false)
 const [error,setError] = useState({ userFullName: "", userEmail: "", userMobile: "", userUserName: "", userPassword: "", userConfirmPassword: "", userImage:""})
 
 // onInputs Handle
  const handleInputs = (e) => {
     const {name, value} = e.target
     setUser({ ...user, [name]: value });
     if(value !== ""){
       setError({...error,[name]:""})
     }
 }
 
 const fileParams = ({ meta }) => {
   return { url: 'https://httpbin.org/post' }
 }
 const onFileChange = ({ meta, file }, status) => {
   // console.log(status, meta, file)
   if(meta.percent<100){
     setStatus(false)
   }
   else{
     setStatus(true)
   }
   if(status === 'removed'){
    setUser({
      ...user,
      userImage:""
    })
    setStatus(false)
   }
   else{
   setUser({
    ...user,
    userImage:file.name
    })
   }
  console.log(file.name)
 }
 const onSubmit = (files, allFiles,event) => {
   event.preventDefault()
   allFiles.forEach(f => f.remove())
 }

 const getFilesFromEvent = e => {
   return new Promise(resolve => {
     getDroppedOrSelectedFiles(e).then(chosenFiles => {
       resolve(chosenFiles.map(f => f.fileObject))
     })
   })
 }
 
 // select file input
 const selectFileInput = ({ accept, onFiles, files, getFilesFromEvent }) => {
   return (
   <>
     <label>
     <img alt="User Profile" className={`${RegisterCss.ImageBox}`} src={UserImage} style={{width:'100%', height:'250px'}}/> 
       <input
         required="required"
         style={{ display: 'none' }}
         type="file"
         accept={accept}
         onChange={e => {
           getFilesFromEvent(e).then(chosenFiles => {
             onFiles(chosenFiles)
             setUser({
               ...user,
               userImage:chosenFiles[0].name
             })
           })
         }}
       />
     </label>
   </>
   )
 }
 
 // On Form Submit
 const onFormSubmit = (event) =>{
    event.preventDefault()
    let error={}
    if(!user.userFullName){
      error = {...error,userFullName:"* Please enter a Name"}
    }
    if(!user.userEmail){
      error = {...error,userEmail:"* Please enter a Email"}
    }
    if(!user.userMobile){
      error = {...error,userMobile:"* Please enter a Mobile Number"}
    }
    if(!user.userUserName){
      error = {...error,userUserName:"* Please enter a UserName"}
    }
    if(!user.userPassword){
      error = {...error,userPassword:"* Please enter a Password"}
    }
    if(!user.userConfirmPassword){
      error = {...error,userConfirmPassword:"* Please re-enter Password"}
    }
    if(user.userPassword !== user.userConfirmPassword){
      window.alert("Password and Confirm Password don't match")
      return
    }
    if(user.userFullName && user.userEmail && user.userMobile && user.userUserName && user.userPassword && user.userConfirmPassword && user.userImage){
      setError({ userFullName: "", userEmail: "", userMobile: "", userUserName: "", userPassword: "", userConfirmPassword: "", userImage:""})
      axios.post('http://localhost:8000/',user).then(res=>console.log(res.data))
      return
    }
    else{
      setError(error)
    }
 }
 //------------------------------------------------------------------------
 
 
 
 
 
 return (
   <>
     <div className={RegisterCss.formBody} style={{ backgroundImage: `url(${FormBackground})` }}>
       <div className={`${RegisterCss.formWrapper} container`}>
         <h2 className={RegisterCss.hadding}>Register Here</h2>
         <form className={RegisterCss.formCss} autoComplete="off" onSubmit={onFormSubmit}>
           <div className={`${RegisterCss.FormRow} row`}>
             <div className='col-md-8'>
               <div className={`${RegisterCss.formField} form-group`}>
                 {/* <label className={`${RegisterCss.formLable}`} for="registerName">Full Name</label> */}
                 <input type="text"  name="userFullName" className={`${RegisterCss.formInputPenal} form-control`} value={user.userFullName} onChange={handleInputs} id="registerName" placeholder="Full Name" />
                 {error.userFullName && <p className="text-danger" >{error.userFullName}</p>}
               </div>
               <div className={`${RegisterCss.formField} form-group`}>
                 {/* <label className={`${RegisterCss.formLable}`} for="registerEmail">Email address</label> */}
                 <input type="email"  name="userEmail" className={`${RegisterCss.formInputPenal} form-control`} value={user.userEmail} onChange={handleInputs} id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                 {error.userEmail && <p className="text-danger" >{error.userEmail}</p>}
               </div>
               <div className={`${RegisterCss.formField} form-group`}>
                 {/* <label className={`${RegisterCss.formLable}`} for="registerMobile">Mobile Number</label> */}
                 <input type="number" name="userMobile" className={`${RegisterCss.formInputPenal} form-control`} value={user.userMobile} onChange={handleInputs} id="registerMobile" placeholder="Mobile Number" />
                 {error.userMobile && <p className="text-danger" >{error.userMobile}</p>}
               </div>
               <div className={`${RegisterCss.formField} form-group`}>
                 {/* <label className={`${RegisterCss.formLable}`} for="registerUserName">User Name</label> */}
                 <input type="text" name="userUserName" className={`${RegisterCss.formInputPenal} form-control`} value={user.userUserName} onChange={handleInputs} id="registerUserName" placeholder="Enter User Name" />
                 {error.userUserName && <p className="text-danger" >{error.userUserName}</p>}
               </div>
               <div className={`${RegisterCss.formField} form-group`}>
                 {/* <label className={`${RegisterCss.formLable}`} for="registerPassword">Password</label> */}
                 <input type="password" name="userPassword" className={`${RegisterCss.formInputPenal} form-control`} value={user.userPassword} onChange={handleInputs} id="registerPassword" placeholder="Password" />
                 {error.userPassword && <p className="text-danger" >{error.userPassword}</p>}
               </div>
               <div className={`${RegisterCss.formField} form-group`}>
                 {/* <label className={`${RegisterCss.formLable}`} for="registerConfirmPassword">Password</label> */}
                 <input type="password"  name="userConfirmPassword" className={`${RegisterCss.formInputPenal} form-control`} value={user.userConfirmPassword} onChange={handleInputs} id="registerConfirmPassword" placeholder="Confirm Password" />
                 {error.userConfirmPassword && <p className="text-danger" >{error.userConfirmPassword}</p>}
               </div>
             </div>
             <div className='col-md-4'>
               <div className={`${RegisterCss.formField} ${RegisterCss.Profile} form-group`}>
                 {/* <label className={`${RegisterCss.formLable}`} for="registerImage">Password</label> */}
                 <div className={`${RegisterCss.FileInput} uploadImage`}>Profile</div>
                 <div className={`${RegisterCss.ImageWrapper}`}>
                   <Dropzone src={UserImage} onSubmit={onSubmit} onChangeStatus={onFileChange} InputComponent={selectFileInput} getUploadParams={fileParams} getFilesFromEvent={getFilesFromEvent} accept="image/*" maxFiles={1} inputContent="Drop A File" />
                 </div>
                 <button type='submit' style={{backgroundColor:status?'red':'yellow'}} className={`${RegisterCss.Button} btn btn-primary`}>REGISTER</button>
               </div>
             </div>
           </div>
 
         </form>
       </div>
     </div>
 
   </>
 )
}
 
export default Register