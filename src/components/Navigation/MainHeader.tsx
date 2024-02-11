import { useState } from 'react';
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button";
import UpComingSessions from "../Sessions/UpComingSessions";
export default function MainHeader(){
  const [upcomingSessionsVisible, setUpcomingSessionsVisible] = useState(false);

  function showUpComingSession(){
    setUpcomingSessionsVisible(true)
  }

  function hideUpcomingSessions(){
    setUpcomingSessionsVisible(false)
  }


  return <>
  {upcomingSessionsVisible && <UpComingSessions onClose={hideUpcomingSessions} />}
  <header id="main-header">

      <h1>ReactMentoring</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Our Mission</NavLink>
          </li>
          <li>
            <NavLink to="/sessions">Browse Session</NavLink>
          </li>
          <li>
            <Button onClick={showUpComingSession}>Upcoming Sessions</Button>
          

          </li>
        </ul>
      </nav>
  </header>
  </>
}