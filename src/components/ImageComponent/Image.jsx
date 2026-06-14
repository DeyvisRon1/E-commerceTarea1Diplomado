import "./Image.css";

function Image(props) { 
    return (
        <div>
           <img id="image" src={props.imageURL}></img>
        </div>
    )
}

export default Image;