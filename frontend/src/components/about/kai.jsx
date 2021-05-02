function kai (props) {
    const data = {
        name: "Kai Zhu",
        title: "Software Engineer",
        website: "https://kaizhu94.github.io/",
        linkedin: "https://www.linkedin.com/in/kaihua-zhu-177a041b1/",
        github: "https://github.com/kaizhu94",
        angellist: "https://angel.co/u/kaihua-zhu"
      };
    
    return (
      <div className="about-card-container">
        <div className="about-card-subcontainer">
          <div className="about-card-content">
          <img src="https://i.ibb.co/wwr1Q8z/kai.png" alt="kai" border="0" />
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

export default kai;
  