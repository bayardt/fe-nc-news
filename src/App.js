import React, {useState, useEffect} from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import * as api from "./api"

function App() {
  const [articles, setArticles] = useState([""]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true);
    api.getArticles().then(({ articles }) => {
    setArticles(articles);
    setIsLoading(false);
  });}, []);

  if (isLoading) return <p>Loading...</p>
  return (
    <>
      <Header />
      <ArticleList articles={articles}/>
    </>
  );
}

export default App;
