import React from "react";
import languages from '../../util/language_util';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-container">
        <div id="poelogo">
          <img alt="logo" src="https://i.ibb.co/S6kXhBs/logo-1.png" />
          <h1 id="logo-text">
            {languages[`${this.props.language}`].protect} <br />
            {languages[`${this.props.language}`].ourElders}
          </h1>
        </div>

        <div className="splash-buttons-container">
          <a className="form-link" href="https://forms.gle/Qs3DonqiTcnbFzDM8" target="_blank" rel="noopener noreferrer" ><button className="volunteer-request-btn">{languages[`${this.props.language}`].requestAVolunteer}</button></a>
          <a className="form-link" href="https://forms.gle/E4rjfxxpRdAJHZUT6" target="_blank" rel="noopener noreferrer"><button className="volunteer-signup-btn">{languages[`${this.props.language}`].becomeAVolunteer}</button></a>
        </div>
    </div>
    );
  }
}
export default Splash;