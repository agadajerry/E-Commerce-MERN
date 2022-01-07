import { Link } from "react-router-dom";
import { useContext } from "react";

import EcommerceContext from "../../context/EcommerceContext";






function Navigation({ getTotalQtty }) {

  const {isLogin}  = useContext(EcommerceContext)

  function logoutHandler() {

    localStorage.removeItem("isLogin")
    window.location = "/allproduct"
  }

 

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{ borderBottom: "1px solid green" }}
      >
        <div className="container px-4 px-lg-5">
          <Link
            to="/allproduct"
            className="navbar-brand"
            style={{
              fontFamily: "cursive",
              color: "#2ccaca",
              fontSize: "30px",
              fontWeight: "bolder",
              textDecoration: "underline",
            }}
          >
            AVIO E-Commerce Store
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-3  mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/allproduct"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutproduct" className="nav-link">
                  About Product
                </Link>
              </li>
              <>
                {isLogin ? (
                  <li className="nav-item">
                    <a
                      href="/allproduct"
                      className="nav-link"
                      onClick={logoutHandler}
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/register" className="nav-link">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">
                        Login
                      </Link>
                    </li>
                  </>
                )}
              </>
            </ul>
            <form className="d-flex">
              <a className="btn btn-outline-dark" href="/allproduct/cart">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {getTotalQtty}
                </span>
              </a>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
