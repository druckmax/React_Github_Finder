import React from 'react'
import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GithubContext } from '../components/contexts/github/GithubContext'

function User() {
  const {getUser} = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login)
  }, []);

  return (
    <div>User</div>
  )
}

export default User