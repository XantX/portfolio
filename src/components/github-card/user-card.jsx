import { useEffect, useState } from "react";
import api_github from "./github-services/axios-api";
import './user-card.css'
import { useTranslation } from 'react-i18next'
import { motion } from "motion/react";
import { User, Globe, BookMarked, Star } from "lucide-react";

function UserCard() {
  const { t } = useTranslation('github_user_card')
  const [user, setUser] = useState()
  useEffect(() => {
    api_github.get(`/users/xantx`).then(res => {
      setUser(res.data)
    })
  }, [])
  return (
    <div>
      {!user ? <h5 className="fg">{t('loading-message')}</h5> :
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="profile-card"
        >
          <div className="profile-card-header">
            <div className="followers-count">
              <span>{t('followers')} {user.followers}</span>
              <Star size={12} fill="var(--yellow)" color="var(--yellow)" />
            </div>
          </div>

          <div className="profile-image-container">
            <img 
              src={user.avatar_url} 
              alt="Sebastian Diaz Torres"
              className="profile-image"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-label">{t('user')}</span>
              <div className="stat-value">
                <span>{user.login}</span>
                <User size={14} />
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-label">{t('country')}</span>
              <div className="stat-value">
                <span>{user.location}</span>
                <Globe size={14} />
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-label">{t('repos')}</span>
              <div className="stat-value">
                <span>{user.public_repos}</span>
                <BookMarked size={14} />
              </div>
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
}

export default UserCard;
