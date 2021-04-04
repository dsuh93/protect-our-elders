function gigi (props){
    const data = {
      name: "Gigi Scarborough",
      title: "Software Engineer",
      website: "https://gigiscarborough.com/",
      linkedin: "https://www.linkedin.com/in/gigimscarborough/",
      github: "https://github.com/gigimscarborough",
      angellist: "https://angel.co/u/gigi-scarborough"
    };
  
    return (
      <div className="about-card-container">
        <div className="about-card-subcontainer">
          <div className="about-card-content">
            <img src="https://i.ibb.co/ZM1rc6C/gigi-profile-pic2.png" alt="gigi" border="0" />
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

export default gigi;
  