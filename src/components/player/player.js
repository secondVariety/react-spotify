const Player = (props) => {
    return (
        <div id="player">
            <figure id="player__art">

            </figure>
            <div id="player__controls">
                <button id="player__controls__back"></button>
                <button id="player__controls__play"></button>
                <button id="player__controls__forward"></button>
            </div>
            <div id="player__msg">
                <strong>Now Playing</strong>
                <em>{props.msg}</em>
            </div>
        </div>
    );
} 

export default Player;
