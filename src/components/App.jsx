import React from "react";
import blogData from "../data/blog";
import About from "./about";
import ArticleList from "./ArticleList";
import Header from "./header";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header title={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
