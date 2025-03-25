import Home from "./Home";
import CrudPage from "./CrudPage";
import Contact from "./Contact";
import Menu from "./Menu";
import Login from "./Login";
import './index.css';
import "./app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap'

function App() {
    return (
        <Router>
        <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand fw-bold text-danger" href="#">
        Foodle
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link active text-danger fw-bold" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="crudpage">
              Cart
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Service
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
        </ul>
        <div>
          <a href="#" className="btn btn-outline-danger me-2">
            Login
          </a>
          <Button variant="danger" className="text-white">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
           <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/CrudPage" element={<CrudPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Menu" element={<Menu />} />
            <Route path="/Contact" element={<Contact />} />
           </Routes>
        </div>
        
  </Router>
        );
}
export default App;