import { RepositoryItem } from './RepositoryItem'
const data = 'dado qualquer'
const repositories = [
  {
    name: 'Uniforme bonito',
    description: 'Um lindo Repositório',
    link: 'google.com',
  },
  {
    name: 'Mario Roqueo',
    description: 'Um lindo Repositório',
    link: 'google.com',
  },
]

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>LIsta de Repositórios</h1>
      <h2>{data}</h2>
      <ul>
        {repositories.map(repository => (
          <RepositoryItem repository={repository} />
        ))}
        <RepositoryItem />
        <RepositoryItem />
      </ul>
    </section>
  )
}
