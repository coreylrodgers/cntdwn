import React from "react";
import "./css/App.css";

import EventList from "./components/EventList/EventList";
import EventInput from "./components/EventInput/EventInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countdown Timer</h1>
        <h4> Keep track of how long your events are</h4>
      </header>

      <section className="main">
        <div className="Events">
          <h5>Your Events:</h5>
          <EventList />
        </div>
        <div className="Events">
          <h5>Enter a new event:</h5>
          <EventInput />
        </div>
      </section>
    </div>
  );
}

export default App;
