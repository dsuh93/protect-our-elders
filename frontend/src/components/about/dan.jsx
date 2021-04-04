function dan(props){
    const data = {
        name: "Daniel Ahn",
        title: "Software Engineer",
        website: "https://iamdanahn.github.io/",
        linkedin: "https://www.linkedin.com/in/iamdanahn/",
        github: "https://github.com/iamdanahn/",
        angellist: "https://angel.co/u/daniel-ahn-1"
      };
  
    return (
      <div className="about-card-container">
        <div className="about-card-subcontainer">
          <div className="about-card-content">
            <img src="https://i.ibb.co/ssyDv82/dan.png" alt="dan" border="0" />
          </div>
        </div>
        <div className="about-card-hover">
          <h2>{data.name}</h2>
          <h3>{data.title}</h3>
          <ul>
            <li>
              <a href={data.website}>
                <i class=" fa fa-coffee" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.linkedin}>
                <i class=" fa fa-linkedin" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.github}>
                <i class=" fa fa-github" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href={data.angellist}>
                <i class=" fa fa-angellist" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default dan;
  