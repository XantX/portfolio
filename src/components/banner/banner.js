import UserCard from "../github-card/user-card";
import "./banner.css"

function Banner() {
  return (
    <div className="banner-container text-wrap"  >
      <div className="row" id="home">
        <div className="col left">
          <h1 className="title">My Porfolio</h1>
          <p className="subtitle">Hi mi name is <strong className="blue">Sebastian</strong> aka. <strong className="blue">XantX</strong></p>
        </div>
        <div className="col">
          <UserCard></UserCard>
        </div>
      </div>
    </div>
  );
}

export default Banner;
