function item({ align, imglink, imgname, project_title, project_description, Project_link }) {
  if (align == 0) {
    return (
      <div class="gallery-item-left">
        <img src={imglink} alt={imgname} />
        <h3>{project_title}</h3>
        <p>{project_description}</p>
        <a href={Project_link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    );
  } else {
    return (
      <div class="gallery-item-right">
        <img src={imglink} alt={imgname} />
        <h3>{project_title}</h3>
        <p>{project_description}</p>
        <a href={Project_link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    );
  }
}

export default item;
