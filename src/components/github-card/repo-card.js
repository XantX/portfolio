import './repo-card.css'
import { useEffect, useState } from 'react';
import api_github from './github-services/axios-api'
import myIcons from '../../shared/icons-table'

function RepoCard(props) {
  const [repo, setRepo] = useState()
  const Icon = myIcons.get('github')
  useEffect(() => {
    api_github.get(`/repos/xantx/${props.repoName}`).then(res => {
      setRepo(res.data)
    })
  }, [props.repoName])
  return (
    <div className="text-wrap">
      {!repo ? <h5>Loading...</h5> :
        <div className="card">
          <h5 className="card-header">
            <div className='row'>
              <div className='col-1'>
                <Icon className="github-icon"/>
              </div>
              <div className='col text-end align-text'>
                Stars: {repo.stargazers_count} Forks: {repo.forks}
              </div>
            </div>
          </h5>
          <div className="card-body">
            <h5 className="card-title">{repo.full_name}</h5>
            <p className="card-text">{repo.description}</p>
            <p className="card-text">Created At: {repo.created_at.substring(0, 10)}</p>
            <p className="card-text">Last push: {repo.pushed_at.substring(0, 10)}</p>
            <p className="card-text">Language: {repo.language}</p>
            <a href={repo.html_url} className="btn btn-primary">Go to repo</a>
          </div>
        </div>
      }
    </div>
  );
}

export default RepoCard;
