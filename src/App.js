import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Col, Container, Form, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';


function App() {
  return (
    <>
      <div className="container-fluid bg-dark text-white">
        <div className="row">
          <div className="col-lg-12">
            <div className="container">
              <nav
                className="navbar navbar-expand-lg navbar-dark bg-dark"
                data-bs-theme="dark"
              >
                <div className="container">
                  <a className="navbar-brand" href="#">
                    Pizza House
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <a className="nav-link active" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          About Us
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                    </ul>
                    <form className="d-flex" role="search">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button className="btn btn-danger" type="submit">
                        <i className="fa fa-search" />
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="col-lg-12 mb-5">
            <div className="row">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./Images/pizza1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>
                        Some representative placeholder content for the first
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./Images/pizza2.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>
                        Some representative placeholder content for the second
                        slide.
                      </p>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./Images/pizza3.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                    <div className="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>
                        Some representative placeholder content for the third
                        slide.
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon" aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mb-5">
              <div className="container">
                <div className="row">
                  <h2>Our Menu</h2>
                  <div className="col-md-3">
                    <div className="card">
                      <img
                        src="Images/menu1.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Margherita Pizza</h5>
                        <p className="text-muted">$24.00</p>
                        <a href="#" className="form-control btn btn-dark">
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3">
                    <div className="card">
                      <img
                        src="Images/menu2.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Mushroom Pizza</h5>
                        <p className="text-muted">$25.00</p>
                        <a href="#" className="form-control btn btn-dark">
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3">
                    <div className="card">
                      <img
                        src="Images/menu3.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Hawaiian Pizza</h5>
                        <p className="text-muted">$30.00</p>
                        <a href="#" className="form-control btn btn-dark">
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
  
                  <div className="col-md-3">
                    <div className="card">
                      <img
                        src="Images/menu4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">Pesto Pizza</h5>
                        <p className="text-muted">$30.00</p>
                        <a href="#" className="form-control btn btn-dark">
                          Buy
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="col-lg-12">
            <div className="container">
              <div className="row">
                <h2 className="text-center"> Book Your Table</h2>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name *"
                      aria-label="Your name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email *"
                      aria-label="Your email"
                    />
                  </div>
                  <div className="col">
                    <select id="inputState" class="form-select">
                      <option selected>Select a Service</option>
                      <option>...</option>
                    </select>
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col">
                    <textarea
                      className="form-control"
                      row="5"
                      placeholder="Please write your comment"
                      aria-label="Please write your comment"
                    ></textarea>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <input
                      type="submit"
                      className="btn btn-warning text-white"
                      value="Send Message"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          

    </>
  );
}

export default App;
