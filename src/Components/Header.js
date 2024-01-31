import React from "react";
import { Link } from "react-router-dom";
import logo from "../Img/logo.PNG";
import { FaSearch } from "react-icons/fa";
import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import useWindowSize from "../hooks/useWindowSize";

function Header() {
  const posts = useStoreState((state) => state.posts);
  const search = useStoreState((state) => state.search);
  const setSearch = useStoreActions((actions) => actions.setSearch);
  const setSearchResults = useStoreActions(
    (actions) => actions.setSearchResults
  );

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search, setSearchResults]);

  const { width } = useWindowSize();
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
