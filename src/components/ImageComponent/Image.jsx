import "./Image.css";

function Image (props) {
    return (
        <div>
            {props.isSuperHost === true && 
                (<div className="tip">
                    <p>Hit para 2 Premium</p>
                </div>)
            }

            <img id="image" src={props.imageURL}></img>
        </div>
    )
}

export default Image;