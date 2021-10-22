import Card from "./../card/card";
import { getHours, timeOfDayMsg } from "../../js/functions";

const Main = (props) => {
  return (
    <main>
      <strong id="intro-msg">{timeOfDayMsg(getHours())}</strong>
      <div className="grid grid--three grid--gap--small margin--top--medium margin--bottom--large">
        <Card
          img="https://via.placeholder.com/100x100"
          name="#100 Podcast Name"
          orientation="hoz"
          progress="90"
        />
        <Card
          img="https://via.placeholder.com/100x100"
          name="#10 Podcast Name"
          orientation="hoz"
          progress="85"
        />
        <Card
          img="https://via.placeholder.com/100x100"
          name="#17 Podcast Name"
          orientation="hoz"
          progress="85"
        />
        <Card
          img="https://via.placeholder.com/100x100"
          name="#20 Podcast Name"
          orientation="hoz"
          progress="90"
        />
        <Card
          img="https://via.placeholder.com/100x100"
          name="#12 Podcast Name"
          orientation="hoz"
          progress="95"
        />
        <Card
          img="https://via.placeholder.com/100x100"
          name="#18 Podcast Name"
          orientation="hoz"
          progress="40"
        />
      </div>
    </main>
  );
};

export default Main;
