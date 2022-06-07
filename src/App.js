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

const removeBodyClasses = () => {

document.body.classList.remove('bg-light');
document.body.classList.remove('bg-dark');
document.body.classList.remove('bg-warning');
document.body.classList.remove('bg-danger');
document.body.classList.remove('bg-success');

}

const toggleMode = (cls) => {

  removeBodyClasses();
  document.body.classList.add(('bg-' +cls))

if (mode === 'light') {

  setMode ('dark');
  document.body.style.backgroundColor = '#042743';
  showAlert('Dark Mode has been Enabled', 'Success');
  
} 

else {
  
 setMode ('light');
 document.body.style.backgroundColor = 'white';
 showAlert('Light Mode has been Enabled', 'Success');

}

}

  return (
    <>
      
 <Router>  

<Navbar title = 'Hassans App' mode = {mode} toggleMode = {toggleMode}  />

<Alert alert = {alert}/>

<div className="container my-3">



<Routes>
  
        <Route path="/about" element={<About mode = {mode} />} />
        <Route path='/Home' element={ <TextForm heading = 'Try Hassans App - Word Counter, Character Counter, Remove Extra Spaces' showAlert = {showAlert} mode = {mode} />} />
      
      </Routes>

      
     
          
       
         

          

  

</div>

</Router> 

    </>
  );
}

export default App;
