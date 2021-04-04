import React from "react";

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-container">
        <div id="poelogo">
          <img alt="logo" src="https://i.ibb.co/S6kXhBs/logo-1.png" />
          <h1 id="logo-text">
            protect <br />
            our elders
          </h1>
        </div>

        <div className="splash-buttons-container">
          <button className="volunteer-request-btn">Request a Volunteer</button>
          <button className="volunteer-signup-btn">Become a Volunteer</button>
        </div>
    </div>
    );
  }
}
export default Splash;