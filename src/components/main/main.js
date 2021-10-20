import Card from "./../card/card";
import {getHours, timeOfDayMsg, setInnerHTML} from "../../js/functions";

const Main = (props) => {
    return (
        <main>
            <strong id="intro-msg">Good Afternoon</strong>
            <div className="grid grid--three grid--gap--small margin--top--medium margin--bottom--large">
                <Card name="CSS" orientation="hoz" progress="90" />
                <Card name="Sass" orientation="hoz" progress="85" />
                <Card name="Less" orientation="hoz" progress="85" />
                <Card name="JS" orientation="hoz" progress="90" />
                <Card name="HTML" orientation="hoz" progress="95" />
                <Card name="MySQL" orientation="hoz" progress="40" />
                <Card name="PHP" orientation="hoz" progress="60" />
                <Card name="WebPack" orientation="hoz" progress="45" />
                <Card name="Git" orientation="hoz" progress="45" />
                <Card name="React" orientation="hoz" progress="25" />
                <Card name="Vue" orientation="hoz" progress="25" />
            </div>
        </main>
    );
} 

// Intro msg
//setInnerHTML('#intro-msg', timeOfDayMsg(getHours()));



export default Main;
