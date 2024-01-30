import React from "react";
import { Link } from "react-router-dom";
import logo from "../Img/logo.PNG";
import { FaSearch, FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function Header() {
  const { width, search, setSearch } = useContext(DataContext);
  const headerContainerHeight =
    width >= 1200
      ? 500
      : width >= 992
      ? 400
      : width >= 768
      ? 320
      : width >= 576
      ? 240
      : 150;
  return (
    <header className="Header">
      <div
        className="header-container"
        style={{ height: `${headerContainerHeight}px` }}
      >
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
            <FaSearch />
          </button>
        </form>
      </div>
      <div className="gradient"></div>
    </header>
  );
}

export default Header;
