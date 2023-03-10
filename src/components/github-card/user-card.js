import { useEffect, useState } from "react";
import api_github from "./github-services/axios-api";
import './user-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faEarthAmericas, faUser, faStar } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next'

function UserCard() {
  const { t } = useTranslation('github_user_card')
  const [user, setUser] = useState()
  useEffect(() => {
    api_github.get(`/users/xantx`).then(res => {
      setUser(res.data)
    })
  }, [])
  return (
    <div className="text-wrap user-card-container">
      {!user ? <h5 className="fg">{t('loading-message')}</h5> :
        <div className="card user-card">
          <p className="card-header"> {t('followers')} {user.followers} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>

          <img src={user.avatar_url} className="card-img-top" alt="avatar" />
          <div className="card-body">
            <h5 className="card-title">{t('user')} {user.login} <FontAwesomeIcon icon={faUser}></FontAwesomeIcon></h5>
            <h5 className="card-title">{t('country')} {user.location} <FontAwesomeIcon icon={faEarthAmericas}></FontAwesomeIcon></h5>
            <h5 className="card-title">{t('repos')} {user.public_repos} <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            </h5>

          </div>
        </div>
      }
    </div>
  );
}

export default UserCard;
