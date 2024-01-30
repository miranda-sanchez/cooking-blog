import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import NewPost from "./Pages/NewPost";
import PostPage from "./Pages/PostPage";
import About from "./Pages/About";
import Missing from "./Pages/Missing";
import EditPost from "./Pages/EditPost";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Header></Header>
        <Nav></Nav>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
