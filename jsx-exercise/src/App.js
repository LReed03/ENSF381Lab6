import logo from './logo.svg';
import './App.css';
import About from './About.js';
import Home from './Home.js';
import Contact from './Contact.js';

function App() {
  const year = new Date().getFullYear();

  const isLoggedIn = true;
  return (

    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>${year}</p>
      isLoggedIn ?<p>Welcome back!</p> || <p>Please log in.</p>
      <Home/>
      <About/>
      <Contact/>
    </div>
  );
}



export default App;
