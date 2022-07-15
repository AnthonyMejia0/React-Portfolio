import "./webproject.scss";

function WebProject({ title, img, desc, url }) {
  return (
    <div className="w-project">
        <a href={url} target="_blank" rel="noreferrer" >
            <img src={img} alt={`${title}`} />
        </a>
        <h3 className="title">{title}</h3>
        <p className="description">{desc}</p>
    </div>
  )
}

export default WebProject