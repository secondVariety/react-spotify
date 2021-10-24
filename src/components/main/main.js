import Card from "./../card/card";
import { getHours, timeOfDayMsg } from "../../js/functions";
import Modal from "../modal/model";
import TextBlock from "../text-block/text-block";

const Main = (props) => {
  return (
    <main>
      <strong id="intro-msg">{timeOfDayMsg(getHours())}</strong>
      <div className="grid grid--three grid--gap--small margin--top--medium margin--bottom--large">
        <Card
          img="https://via.placeholder.com/100"
          name="#100 Podcast Name"
          orientation="hoz"
          progress="90"
        />
        <Card
          img="https://via.placeholder.com/100"
          name="#10 Podcast Name"
          orientation="hoz"
          progress="85"
        />
        <Card
          img="https://via.placeholder.com/100"
          name="#17 Podcast Name"
          orientation="hoz"
          progress="85"
        />
        <Card
          img="https://via.placeholder.com/100"
          name="#20 Podcast Name"
          orientation="hoz"
          progress="90"
        />
        <Card
          img="https://via.placeholder.com/100"
          name="#12 Podcast Name"
          orientation="hoz"
          progress="95"
        />
        <Card
          img="https://via.placeholder.com/100"
          name="#18 Podcast Name"
          orientation="hoz"
          progress="40"
        />
      </div>
      <div className="flex align-items-center margin--bottom--small">
        <figure className="avatar rounded margin--right--small">
          <img src="https://via.placeholder.com/75" alt="Band Name" />
        </figure>
        <div className="flex__full">
          <small>More from</small>
          <h2 className="margin--top--none">Band Name</h2>
        </div>
      </div>
      <div className="grid grid--four grid--gap--small">
        <Card
          img="https://via.placeholder.com/200"
          name="Album #1"
          orientation="vert"
        />
        <Card
          img="https://via.placeholder.com/200"
          name="Album #2"
          orientation="vert"
        />
        <Card
          img="https://via.placeholder.com/200"
          name="Album #3"
          orientation="vert"
        />
        <Card
          img="https://via.placeholder.com/200"
          name="Album #4"
          orientation="vert"
        />
      </div>
      <TextBlock />
      <Modal />
    </main>
  );
};

export default Main;
