import logo from "./logo.svg";
import "./App.css";

let name = 'Hassan'
function App() {
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>

      <div className="container"></div>

<h1>Hello {name}</h1>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem esse,
        beatae iure nam, impedit pariatur ut ipsam tempore corporis voluptatibus
        voluptatum, enim velit eveniet ipsa facilis. Odit architecto quaerat
        reiciendis.
      </p>
    </>
  );
}

export default App;
