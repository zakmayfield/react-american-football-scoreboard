import React from 'react'

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


export default Scoreboard