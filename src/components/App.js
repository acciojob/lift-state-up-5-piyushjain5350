
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[isLoggedInd,setIsLoggedIn]=useState(false);

  function SubmitFn(){
    setIsLoggedIn(true);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        {!isLoggedInd&&<form onSubmit={SubmitFn}>
          <label htmlFor="nameInput">Username:</label>
          <input type="text" name="nameInput"/><br />
          <label htmlFor="passwordInput">Password: </label>
          <input type="password" name="passwordInput"/>
          <br />
          <input type="submit" value="Login" />
        </form>}
        {
          isLoggedInd&&<p>You are logged in!</p>
        }
    </div>
  )
}

export default App
