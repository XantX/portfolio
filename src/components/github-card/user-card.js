import { useEffect, useState } from "react";
import api_github from "./github-services/axios-api";
import './user-card.css'

function UserCard(){
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
          <img src={user.avatar_url} className="card-img-top" alt="avatar"/>
          <div className="card-body">
            <h5 className="card-title">Username: {user.login}</h5>
            <h5 className="card-title">Country: {user.location}</h5>
          </div>
        </div>
      }
    </div>
  );
}

export default UserCard;
