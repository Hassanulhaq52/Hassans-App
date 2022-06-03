import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {

setAlert({

  msg: message,
  type: type

})

setTimeout(() => {

  setAlert(null);
  
}, 3000);

}

const toggleMode = () => {

if (mode === 'light') {

  setMode ('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert('Dark Mode has been Enabled', 'Success');
  document.title = 'Hassans App - dark Mode';
  
} 

else {
  
 setMode ('light');
 document.body.style.backgroundColor = 'white';
 showAlert('Light Mode has been Enabled', 'Success');
 document.title = 'Hassans App - Light Mode';

}

}

  return (
    <>
      
    
<Navbar title = 'Hassans App' mode = {mode} toggleMode = {toggleMode}  />

<Alert alert = {alert}/>

<div className="container my-3">
  
  <TextForm heading = 'Enter the Text to Analyze Below' showAlert = {showAlert} mode = {mode} />

{/* <About/> */}

</div>


{/* <Navbar /> */}

    </>
  );
}

export default App;
