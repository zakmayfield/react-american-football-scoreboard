//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  return (
    <div className="container">
      <Scoreboard />
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
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
