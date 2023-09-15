import './App.css';
import Nav from './Components/Nav/Nav';
import Landing from './Components/Landing/Landing';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

// 2. Add links to certain scroll points on page

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
        Mario © 2023
      </footer>
    </div>
  );
}

export default App;