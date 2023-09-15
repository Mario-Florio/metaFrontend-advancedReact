import './App.css';
import Nav from './Components/Nav';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {

  return (
    <div className="App">
      <header>
        <Nav/>
      </header>
      <main>
        <Landing/>
        <Projects/>
        <Contact/>
      </main>
      <footer>
        Mario 2023
      </footer>
    </div>
  );
}

export default App;