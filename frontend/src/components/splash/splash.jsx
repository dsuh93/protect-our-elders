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
          <button className="volunteer-request-btn"><a href="https://forms.gle/Qs3DonqiTcnbFzDM8" target="_blank" rel="noopener noreferrer" >Request a Volunteer</a></button>
          <button className="volunteer-signup-btn"><a href="https://forms.gle/E4rjfxxpRdAJHZUT6" target="_blank" rel="noopener noreferrer">Become a Volunteer</a></button>
        </div>
    </div>
    );
  }
}
export default Splash;