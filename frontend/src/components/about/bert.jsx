function bert(props) {
    const data = {
        name: "Bert Hill",
        title: "Software Engineer",
        website: "http://www.berthilldev.com/",
        linkedin: "https://www.linkedin.com/in/bert-hill-0324b120/",
        github: "https://github.com/berthornhill",
        angellist: "https://angel.co/u/bert-hill-2"
      };
  
    return (
      <div className="about-card-container">
        <div className="about-card-subcontainer">
          <div className="about-card-content">
            <img src="https://i.ibb.co/MnRvLt1/bert.png" alt="bert" border="0" />
          </div>
        </div>
        <div className="about-card-hover">
          <h2>{data.name}</h2>
          <h3>{data.title}</h3>
          <ul>
            <li>
              <a href={data.website}>
                <i className=" fa fa-coffee" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.linkedin}>
                <i className=" fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.github}>
                <i className=" fa fa-github" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.angellist}>
                <i className=" fa fa-angellist" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default bert;
  