import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { formatStars } from "../utils/formatStars";
import "./RepoItem.css";

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item">
      <h3 className="repo-name">{repo.name}</h3>
      <p className="repo-desc">{repo.description || "No description available."}</p>
      <div className="repo-footer">
        <div className="owner-info">
          <img
            src={repo.owner.avatar_url}
            alt={`${repo.owner.login} avatar`}
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

RepoItem.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    stargazers_count: PropTypes.number.isRequired,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default RepoItem;
