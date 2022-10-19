import { RepositoryItem } from './RepositoryItem'

const repository = {
  name: 'Uniforme bonito',
  description: 'Um lindo Repositório',
  link: 'google.com',
}

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>LIsta de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem />
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}
