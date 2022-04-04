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
    <section>
      <div className="m-header__Logo">
        <Link to={"/"}>
          <img src={NCNewsLogo} alt="Northcoders News" />
        </Link>
      </div>
      <nav className="m-topicsNav">
        <ul>
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <a href="#">topics</a>
            <ul>
              {topics.map((topic) => {
                return (
                  <li>
                    <Link to={`/topic/${topic.slug}`} key={topic.slug}>
                      {topic.slug}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  );
}
