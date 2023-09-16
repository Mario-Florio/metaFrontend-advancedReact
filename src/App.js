import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {

  return (
    <div className="App">
      <Nav/>
      <main>
        <Landing/>
        <Projects/>
        <Contact/>
      </main>
      <footer>
        John © 2023
      </footer>
    </div>
  );
}

export default App;