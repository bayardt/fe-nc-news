import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NCNewsLogo from "../images/NCNewsLogo.png";
import * as api from "../api";

export default function Header() {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getTopics().then(({ topics }) => {
      setTopics(topics);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="o-header">
      <div className="m-header__Logo">
        <img src={NCNewsLogo} alt="Northcoders News" />
      </div>
      <nav className="m-topicsNav">
        <Link to={"/"}>| home |</Link>
        {topics.map((topic) => {
          const topicPath = `/topic/${topic.slug}`;
          return (
            <Link to={topicPath} key={topic.slug}>
              | {topic.slug} |
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
