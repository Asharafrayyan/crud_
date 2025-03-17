import Home from "./Home";
import CrudPage from "./CrudPage";
import Contact from "./Contact";
import Menu from "./Menu";
import Login from "./Login";
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {
    return (
        <Router>
        <div className="App">
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container-fluid'>
                     <Link to="/" className="navbar-brand">Food CRUD APP</Link>
                     <button className="navbar-toggler" type="button" data-bs-toggler="collapse"
                     data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Togglenavigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collaspe navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/CrudPage" className="nav-link">MangeFood</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Menu" className="nav-link">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
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