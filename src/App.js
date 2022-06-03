import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
      
 <Router>  
<Navbar title = 'Hassans App' mode = {mode} toggleMode = {toggleMode}  />

<Alert alert = {alert}/>

<div className="container my-3">

{/* <Routes> */}

<Routes>
        <Route path="/about" element={<About />} />
        <Route path='/Home' element={<TextForm  />} />
      
      </Routes>

      
          {/* <Route path="/about" />
            <About />
          
       
          <Route path="/" />

             <TextForm heading = 'Enter the Text to Analyze Below' showAlert = {showAlert} mode = {mode} />

          
        </Routes> */}
  

</div>
</Router> 
    </>
  );
}

export default App;
