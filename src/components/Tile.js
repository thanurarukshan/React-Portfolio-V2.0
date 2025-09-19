import './Tile.css'
import "aos/dist/aos.css";

function Tile({title, content}) {
  return (
    <div className="Skillset-skill-des">
        <div data-aos="fade-up" className='skillset-skill-des-tile'>
            <span id="title">{title}</span>
            <span id="title-content">{content}</span>
        </div>
    </div>
  )
}

export default Tile