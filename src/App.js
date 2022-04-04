import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import ArticleView from "./components/ArticleView"; 
import Header from "./components/Header";
import Error from "./components/Error";
import { UserContext } from "./contexts/UserStatus";

function App() {
  const [currentUser, setCurrentUser] = useState('grumpy19')

  return (
    <main className="container-fluid">
      <BrowserRouter>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Header />
          <Routes>
            <Route exact path="/" element={<ArticleList />} />
            <Route path="/topic/:topic_slug" element={<ArticleList />} />
            <Route path="/article/:article_id" element={<ArticleView />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </main>
  );
}

export default App;
