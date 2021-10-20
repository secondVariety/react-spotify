const Card = (props) => {
    return (
        <div className={"card card--" + props.orientation}>
            <span data-text={props.name.charAt(0)} className={"icon--" + props.name.toLowerCase()}></span>
            <dl>
            <dt>{props.name}</dt>
            <dd className={"progress-bar progress-bar--" + props.progress}></dd>
        </dl>
</div>
    );
} 

export default Card;