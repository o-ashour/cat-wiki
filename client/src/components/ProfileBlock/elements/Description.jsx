function Description({ name, body, idx }) {
  return (
    <div className="description">
      <h2>{`${idx + 1}. ${name}`}</h2>
      <div className="wrapper">
        <p>{body}</p>
      </div>
    </div>
  );
}

export default Description;
