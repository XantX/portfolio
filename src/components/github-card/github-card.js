import './github-card.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: `https://api.github.com/`
})

function GithubCard({ repoName }) {
  const [repo, setRepo] = useState()

  useEffect(() => {
    api.get(`/repos/xantx/${repoName}`).then(res => {
      setRepo(res.data)
    })
  }, [])

  return (
    <div className="text-wrap">
      {!repo ? 'Loading...' :
        <div className="card">
          <h5 className="card-header text-end">
            Stars: {repo.stargazers_count} Forks: {repo.forks}
          </h5>
          <div className="card-body">
            <h5 className="card-title">{repo.full_name}</h5>
            <p className="card-text">{repo.description}</p>
            <p className="card-text">Created At: {repo.created_at.substring(0, 10)}</p>
            <p className="card-text">Updated At: {repo.updated_at.substring(0, 10)}</p>
            <p className="card-text">Language: {repo.language}</p>
            <a href={repo.html_url} className="btn btn-primary">Go to repo</a>
          </div>
        </div>
      }
    </div>
  );
}

export default GithubCard;
