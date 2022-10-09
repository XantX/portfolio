import UserCard from "../github-card/user-card";
import "./banner.css"

function Banner() {
  return (
    <div className="banner-container text-wrap">
      <div className="row">
        <div className="col left">
          <h1 className="title">My Porfolio</h1>
          <p className="subtitle">HI mi name is <strong className="green">Sebastian</strong> aka. <strong className="green">XantX</strong></p>
        </div>
        <div className="col">
          <UserCard></UserCard>
        </div>
      </div>
    </div>
  );
}

export default Banner;
