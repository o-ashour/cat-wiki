function Description({ name, body, idx }) {
  return (
    <div className='description'>
      <h2>{`${idx + 1}. ${name}`}</h2>
      <p>{body}</p>
    </div>
  )
}

export default Description;