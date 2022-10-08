import { useEffect, useState } from "react";
import api_github from "./github-services/axios-api";
import './user-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEarthAmericas, faUser } from '@fortawesome/free-solid-svg-icons'

function UserCard() {
  const [user, setUser] = useState()
  useEffect(() => {
    api_github.get(`/users/xantx`).then(res => {
      setUser(res.data)
    })
  }, [])
  return (
    <div className="text-wrap user-card-container">
      {!user ? <h5>Loading...</h5> :
        <div className="card user-card">
          <img src={user.avatar_url} className="card-img-top" alt="avatar" />
          <div className="card-body">
            <h5 className="card-title">User: {user.login} <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h5>
            <h5 className="card-title">Country: {user.location} <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon></h5>
            <h5 className="card-title">Repos: {user.public_repos} <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            </h5>

          </div>
        </div>
      }
    </div>
  );
}

export default UserCard;
