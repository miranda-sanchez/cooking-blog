import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../Img/logo.PNG";

function Header({ title, search, setSearch }) {
  return (
    <header className="Header">
      <div className="header-container">
        <Link to="/">
          <figure>
            <img src={logo} alt="Logo" />
          </figure>
        </Link>
        <form class="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            id="searchPosts"
            class="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button class="btn btn-outline-success" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className="gradient"></div>
    </header>
  );
}

export default Header;
