import RepoItem from "./RepoItem";
import "./RepoList.css";

const RepoList = ({ repos }) => {
  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;