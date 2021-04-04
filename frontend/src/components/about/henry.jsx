function henry (props){
    const data = {
        name: "Henry Huang",
        title: "Software Engineer",
        website: "https://henryzihaohuang.github.io/",
        linkedin: "https://www.linkedin.com/in/zihaohuang/",
        github: "https://github.com/henryzihaohuang",
        angellist: "https://angel.co/u/henry-zihao-huang"
      };

  return (
    <div className="about-card-container">
      <div className="about-card-subcontainer">
        <div className="about-card-content">
          <img
            src="https://i.ibb.co/wJRTpjy/henry.png"
            alt="henry"
            border="0"
          />
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

export default henry;
