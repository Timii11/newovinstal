import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Certified from "./pages/Certified";
import Service from "./pages/Service";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ShowProjects from "./pages/ShowProjects";
import NotFound from "./pages/NotFound";
import ScrollTop from "./components/ScrollTop";
import {Route, Switch} from "react-router-dom";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./css/app/app.css"
import "./css/app/pagemargin.css"


function App() {
  return (
  <div className="App">
    <Navbar/>
    <Route render={({ location }) => (
        <TransitionGroup>
          <ScrollTop />
          <CSSTransition key={location.key} timeout={0}  >
            <Switch location={location}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/certified" component={Certified} />
              <Route path="/service" component={Service} />
              <Route path="/projects" component={Projects} />
              <Route path="/contact" component={Contact} />
              <Route path="/showprojects/:param" component={ShowProjects} />
              <Route component={NotFound} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />
      <Footer/>
    </div>
  );
}

export default App;
