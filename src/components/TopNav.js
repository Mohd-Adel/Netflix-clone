import React from "react";
import logo from "../assets/logo.png";
import "./topNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faUserTie,
  faCaretDown,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";

function TopNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent p-0 position-absolute w-100">
      <div className="container">
        <a className="navbar-brand logo-a" href="/">
          <img src={logo} alt="netflix" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-flix justify-content-between"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                TV Shows
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                New & Popular
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                My List
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Browse By Languages
              </a>
            </li>
          </ul>
          <ul className="navbar-nav mr-0">
            <li className="right-icons p-2 fs-4">
              <a href="/">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
            </li>
            <li className="right-icons p-2 fs-4">
              <a href="/">
                <FontAwesomeIcon icon={faBell} />
              </a>
            </li>
            <li className="right-icons p-2 fs-4">
              <a href="/">
                <FontAwesomeIcon icon={faUserTie} />
              </a>
            </li>
            <li className="right-icons p-2 fs-4 d-none">
              <a href="/">
                <FontAwesomeIcon icon={faCaretUp} />
              </a>
            </li>
            <li className="right-icons p-2 fs-4">
              <a href="/">
                <FontAwesomeIcon icon={faCaretDown} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
