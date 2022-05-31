import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      
     

<Navbar title = 'Hassans App'  />

<div className="container my-3">
  
  <TextForm heading = 'Enter the Text to Analyze Below' />

</div>


{/* <Navbar /> */}

    </>
  );
}

export default App;
