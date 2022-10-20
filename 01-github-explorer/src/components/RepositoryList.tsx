import { RepositoryItem } from './RepositoryItem'
import '../style/repositories.scss'
import { useState, useEffect } from 'react'

interface repository {
  name: string
  description: string
  html_url: string
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>LIsta de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          )
        })}
      </ul>
    </section>
  )
}
