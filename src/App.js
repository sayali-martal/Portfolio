import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Skills from './pages/Skills';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/skills">
            <Skills />
          </Route>
          <Route path="/achievements">
            <Achievements />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
