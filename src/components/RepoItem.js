import { FaStar } from "react-icons/fa";
import "./RepoItem.css";

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
          <FaStar color="black" /> {repo.stargazers_count.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default RepoItem;