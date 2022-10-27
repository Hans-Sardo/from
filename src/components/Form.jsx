import React, { useState } from  'react';
    
    
const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");  
    const [password, setPassword]= useState("");
    const [confirmPassword, setconfirmPassword]= useState("");

    const [nameError, setNameError] = useState("")
    const [lastNameError, setlastNameError]= useState("")
    const [emailError, setEmailError]= useState("")
    const [passwordError, setPasswordError]= useState("")
    const [confirmPasswordError, setconfirmPasswordError] = useState("")


    
    const createUser = (e) => {
        e.preventDefault();
        const user = { firstName, lastName, email, password, confirmPassword };
    
    console.log("user being created", user)
    setFirstName("")
    setlastName("")
    setEmail("")
    setPassword("")
    setconfirmPassword("")
    }


    const firstNameHandler = (e)=> {
      setFirstName(e.target.value)
      if(e.target.value.length<2){
        setNameError("Name must be longer than 2 chars")
      }
      else{
        setNameError("")
      }
    }
    const lastNameHandler=(e)=>{
      setlastName(e.target.value)
        if(e.target.value.length<2){
        setlastNameError("Last Name must be longer than 2 chars")
      }
      else{
        setlastNameError("")
      }
    }
    const emailHandler = (e)=>{
      setEmail(e.target.value)
      if(e.target.value.length<2){
        setEmailError("Email must be longer than 2 chars")
      }
      else{
        setEmailError("")
      }
    }
    const passwordHandler = (e)=>{
      setPassword(e.target.value)
      if(e.target.value.length<8){
        setPasswordError("Password must be longer than 8 chars")
      }
      else{
        setPasswordError("")
      }
    }
    const confirmPasswordHandler = (e)=>{
      setconfirmPassword(e.target.value)
      if(e.target.value != password){
        setconfirmPasswordError("Passwords must match")
      }
      else{
        setconfirmPasswordError("")
      }

      
    }
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" value={firstName} onChange={firstNameHandler} />
                {(nameError)? <p>{nameError}</p>: null}
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" value= {lastName} onChange={lastNameHandler } />
                {(lastNameError)? <p>{lastNameError}</p>: null}
            </div>
            <div>
                <label>Email: </label> 
                <input type="text" value = {email} onChange={ emailHandler } />
                {(emailError)? <p>{emailError}</p>: null}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" value = {password} onChange={ passwordHandler } />
                {(passwordError)? <p>{passwordError}</p>:null}
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="text" value = {confirmPassword} onChange={ confirmPasswordHandler } />
                {(confirmPasswordError)?<p>{confirmPasswordError}</p>: null}
            </div>
            <input type="submit" value="Create User" />
            <div>
              {firstName}
            </div>
        </form>
        


        
    )
    
}
    
export default Form;