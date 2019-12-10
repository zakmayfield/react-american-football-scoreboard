//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from './components/BottomRow';


function App() {
  
    const [homeScore, setHomeScore] = useState(0);
    const [awayScore, setAwayScore] = useState(0);

    const homeTouchDown = () => {
      setHomeScore(homeScore + 7);
    }

    const homeFieldGoal = () => {
      setHomeScore(homeScore + 3);
    }

    const awayTouchDown = () => {
      setAwayScore(awayScore + 7);
    }

    const awayFieldGoal = () => {
      setAwayScore(awayScore + 3);
    }
  

  return (
    <div className="container">

    {/*Scoreboard comp*/}
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>
    

    {/*Buttons comp*/}
      <section className="buttons">
        <div className="homeButtons">
          <button onClick = { homeTouchDown } className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = { homeFieldGoal } className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = { awayTouchDown } className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = { awayFieldGoal } className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>

    </div>
  );
}

export default App;
