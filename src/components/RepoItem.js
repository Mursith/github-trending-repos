import { FaStar } from "react-icons/fa";
import "./RepoItem.css";


const formatStars = (stars) => {
  if (stars >= 1000) {
    return (stars / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return stars;
};

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item">
      <h3 className="repo-name">{repo.name}</h3>
      <p className="repo-desc">{repo.description}</p>
      <div className="repo-footer">
        <div className="owner-info">
          <img
            src={repo.owner.avatar_url}
            alt={repo.owner.login}
            className="avatar"
          />
          <span>{repo.owner.login}</span>
        </div>
        <div className="stars">
          <FaStar color="black" /> {formatStars(repo.stargazers_count)}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;