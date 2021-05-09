import React from "react";
import { Link } from "react-router-dom";
import languages from "../../util/language_util";

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.handleSetLanguage = this.handleSetLanguage.bind(this);
  }

  handleSetLanguage = (lang) => {
    storeLanguageInLocalStorage(lang);
  };

  render() {
    const dropdownLanguages = [
      "English",
      "Spanish",
      "Simplified Chinese",
      "Traditional Chinese",
      "Korean",
      "Japanese",
      "Tagalog",
      "Vietnamese",
    ];
    return (
      <section className="footer-container">
        <footer>
          <div className="footer-links">
            {this.props.isloggedIn ? (
              <button onClick={() => this.props.logout()}>Log Out</button>
            ) : (
              <Link to="/login">
                {languages[`${this.props.language}`].adminLogin}
              </Link>
            )}
            <div className="dropup">
              <ul className="lang-popup">
                {dropdownLanguages.map((lang) => (
                  <li
                    onClick={() => {
                      this.props.selectLanguage(lang);
                      storeLanguageInLocalStorage(lang);
                    }}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
              <i className="fas fa-language"></i>
            </div>
          </div>
          <p id="footer-copyright">
            {languages[`${this.props.language}`].copyright} &copy; 2021{" "}
            {languages[`${this.props.language}`].protectOurElders}
          </p>
        </footer>
      </section>
    );
  }
}

export default Footer;
