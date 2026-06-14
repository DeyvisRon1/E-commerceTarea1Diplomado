import './Button.css';

function Button(propiedades) {
    return (<button
        type="button"
        className="counter" onClick={propiedades.onClick}
    >
        {propiedades.titulo}
    </button>)
}

export default Button;