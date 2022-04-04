import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleView from "./components/ArticleView"; 
import Header from "./components/Header";
import Error from "./components/Error";
import { UserContext } from "./contexts/UserStatus";

function App() {
  //Previous been advised not to store state in App.js
  //Ask if this is okay for context.
  const [currentUser, setCurrentUser] = useState('grumpy19')

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<ArticleList />} />
          <Route path="/topic/:topic_slug" element={<ArticleList />} />
          <Route path="/article/:article_id" element={<ArticleView />} />
          <Route path="/*" element={<Error />} />
          <Route path="/article/*" element={<Error />} />
          <Route path="/topic/*" element={<Error />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
