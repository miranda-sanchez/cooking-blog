import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NewPost from "./Pages/NewPost";
import PostPage from "./Pages/PostPage";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";

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
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLocaleLowerCase().includes(search.toLowerCase()) ||
        post.title.toLocaleLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "mm/dd/yyyy pp");
    const newPost = { id, dateTime, title: postTitle, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <div className="App">
      <Header
        title={"Cooking Blog"}
        search={search}
        setSearch={setSearch}
      ></Header>
      <Nav></Nav>
      <Routes>
        <Route index path="/" element={<Home posts={searchResults} />} />
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
