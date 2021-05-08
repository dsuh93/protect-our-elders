import languages from "../../util/language_util"; 
    
function david ({currentLanguage}) {
  const languageFilter = languages[currentLanguage]
    const data = {
        name: "David Jhinku",
        title: languageFilter.softwareEngineer,
        website: "http://davidjhinku.github.io/" ,
        linkedin: "https://www.linkedin.com/in/davidjhinku/",
        github: "https://github.com/davidjhinku",
        angellist: "https://angel.co/u/david-jhinku"
      };

    return (
      <div className="about-card-container">
        <div className="about-card-subcontainer">
          <div className="about-card-content">
             <img src="https://i.ibb.co/CK2nkFW/david.png" alt="david" border="0" />
          </div>
        </div>
        <div className="about-card-hover">
          <h2>{data.name}</h2>
          <h3>{data.title}</h3>
          <ul>
            <li>
              <a href={data.website} target="_blank" rel="noopener noreferrer">
                <i class=" fa fa-coffee" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                <i class=" fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.github} target="_blank" rel="noopener noreferrer">
                <i class=" fa fa-github" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.angellist} target="_blank" rel="noopener noreferrer">
                <i class=" fa fa-angellist" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default david;
  