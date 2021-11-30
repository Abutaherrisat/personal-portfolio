import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Details from './components/Details/Details';
import Project from './components/Project/Project';
function App() {

  return (
    <div className="app-container">
      <Particles
        className='fixed-top'
        params={{
          "particles": {
            "number": {
              "value": 50
            },
            "size": {
              "value": 2
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
        height='100vh'
        style={{ position: 'absolute', zIndex: '-9999' }}
      />
      <div style={{ position: 'relative', zIndex: '9999', overflowX: 'hidden' }}>

        <Router>
          <Switch>
            <Route exact path="/">
              <>
                <Navbar></Navbar>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Projects></Projects>
                <Blogs></Blogs>
                <Contact></Contact>
                <Footer></Footer>
              </>
            </Route>
            <Route path="/details/:projectId">
              <Details></Details>
            </Route>
          </Switch>
        </Router>

      </div>
    </div>
  );
}

export default App;
