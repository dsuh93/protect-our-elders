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
        <a className="form-link" href="https://forms.gle/Qs3DonqiTcnbFzDM8" target="_blank" rel="noopener noreferrer" ><button className="volunteer-request-btn">Request a Volunteer</button></a>
        <a className="form-link" href="https://forms.gle/E4rjfxxpRdAJHZUT6" target="_blank" rel="noopener noreferrer"><button className="volunteer-signup-btn">Become a Volunteer</button></a>
        </div>
    </div>
    );
  }
}
export default Splash;