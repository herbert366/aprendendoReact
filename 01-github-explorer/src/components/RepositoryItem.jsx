export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository?.name ?? 'ta sem nome bro'}</strong>
      <p>{props.repository?.description ?? 'hm..'}</p>
      <a href={props.repository?.link ?? 'youtube.com'}>Acesse Aqui bro</a>
    </li>
  )
}
