import { RepositoryItem } from './RepositoryItem'
import '../style/repositories.scss'
import { useState, useEffect } from 'react'

export function RepositoryList() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>LIsta de Repositórios</h1>
      <ul>
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}
