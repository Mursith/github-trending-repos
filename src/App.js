import React, { useEffect, useState } from "react";
import RepoList from "./components/RepoList";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const date = new Date();
  date.setDate(date.getDate() - 10);
  const formattedDate = date.toISOString().split("T")[0];

  const fetchRepos = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}`
      );
      const data = await response.json();
      if (data.items) {
        setRepos((prev) => [...prev, ...data.items]);
      }
    } catch (error) {
      console.error("Error fetching repos:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRepos();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 100 >=
          document.documentElement.scrollHeight &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="app-container">
      <header className="header">Trending Repos</header>
      <RepoList repos={repos} />
      {loading && <p className="loading">Loading...</p>}
      <NavBar />
    </div>
  );
};

export default App;