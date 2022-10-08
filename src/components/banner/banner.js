import GithubCard from "../github-card/github-card";
import "./banner.css"

function Banner() {
  return (
    <div className="banner-container text-wrap">
      <h1 className="title">My Porfolio</h1>
      <p className="subtitle">Hi mi name is <strong className="bg2">Sebastian</strong> aka. <strong className="bg2">XantX</strong></p>
      <GithubCard repoName={'finance-app-back'}></GithubCard>
    </div>
  );
}

export default Banner;
