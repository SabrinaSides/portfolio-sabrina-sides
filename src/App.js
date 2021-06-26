import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import ProjectsPage from './Projects/ProjectsPage';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="app">
      <header className="app-header">
          <Navbar />
      </header>
      <main className="page-content">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={Contact} />
      </main>
    </div>
  )
}

export default App;
