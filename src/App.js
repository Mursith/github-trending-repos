import React, { useEffect, useState } from "react";
import RepoList from "./components/RepoList";
import NavBar from "./components/NavBar";
import "./App.css";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const date = new Date();
  date.setDate(date.getDate() - 10);
  const formattedDate = date.toISOString().split("T")[0];

  const fetchRepos = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from GitHub API");
      }
      const data = await response.json();
      if (data.items) {
        setRepos((prev) => [...prev, ...data.items]);
      }
    } catch (error) {
      console.error("Error fetching repos:", error);
      setError("Failed to load repositories. Please try again.");
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
      {error && <div className="error">{error}</div>}
      <RepoList repos={repos} />
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      <NavBar />
    </div>
  );
};

export default App;
