import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NewPost from "./Pages/NewPost";
import PostPage from "./Pages/PostPage";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import { Route, Routes, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "01/01/24",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi nemo in illum molestiae dolores ducimus possimus, sint odio, recusandae odit vitae voluptatibus at repudiandae rerum assumenda, corrupti natus! Aliquam.",
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "01/02/24",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi nemo in illum molestiae dolores ducimus possimus, sint odio, recusandae odit vitae voluptatibus at repudiandae rerum assumenda, corrupti natus! Aliquam.",
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "01/03/24",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quasi nemo in illum molestiae dolores ducimus possimus, sint odio, recusandae odit vitae voluptatibus at repudiandae rerum assumenda, corrupti natus! Aliquam.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Header
        title={"Cooking Blog"}
        search={search}
        setSearch={setSearch}
      ></Header>
      <Nav></Nav>
      <Routes>
        <Route index path="/" element={<Home posts={posts} />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
