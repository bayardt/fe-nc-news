import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route path="/topic/:topic_slug" element={<ArticleList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
