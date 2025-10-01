function Points(props) {
  if (!props.title && !props.items) {
    return;
  }
  return (
    <>
      <h3>{props.title}</h3>
      <ul className="single-list">
        {props.items?.map((point) => {
          return (
            <>
              <li>{point}</li>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default Points;
