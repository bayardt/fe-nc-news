import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleView from "./components/ArticleView"; 
import Header from "./components/Header";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<ArticleList />} />
        <Route path="/topic/:topic_slug" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<ArticleView />} />
        <Route path="/*" element={<Error />} />
        <Route path="/article/*" element={<Error />} />
        <Route path="/topic/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
