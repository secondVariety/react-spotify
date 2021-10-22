import { isElem } from "../../js/functions";

const Player = (props) => {
  return (
    <div id="player">
      <figure id="player__art">
        <img src="https://via.placeholder.com/200" alt="" />
      </figure>
      <div id="player__controls">
        <button id="player__controls__back" className="rounded">
          <i className="fas fa-backward"></i>
        </button>
        <button
          id="player__controls__play"
          onClick={(e) => {
            e.currentTarget.classList.toggle("paused");
            const $playerMsg = document.querySelector("#player__msg em");
            if (isElem($playerMsg)) {
              $playerMsg.classList.toggle("paused");
            }
          }}
          className="rounded"
        >
          <span className="play-icon hide">
            <i className="fas fa-play"></i>
          </span>
          <span className="pause-icon">
            <i className="fas fa-pause"></i>
          </span>
        </button>
        <button id="player__controls__forward" className="rounded">
          <i className="fas fa-forward"></i>
        </button>
      </div>
      <div id="player__msg">
        <strong>Now Playing</strong>
        <em>{props.msg}</em>
      </div>
    </div>
  );
};

export default Player;
