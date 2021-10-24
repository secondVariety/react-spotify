const Card = (props) => {
  return (
    <div className={"card card--" + props.orientation}>
      <span className={"icon--" + props.name.toLowerCase()}>
        <img src={props.img} alt={props.name} />
      </span>
      {props.progress ? (
        <dl>
          <dt>{props.name}</dt>
          <dd className={"progress-bar progress-bar--" + props.progress}></dd>
        </dl>
      ) : (
        <div>
          <strong>{props.name}</strong>
        </div>
      )}
    </div>
  );
};

export default Card;
