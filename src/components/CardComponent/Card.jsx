import Image from '../ImageComponent/Image.jsx';
import Promo from '../../assets/Images/Promo.jpg'; // <-- Ruta corregida con dos niveles y nombre exacto

function Card() {
    return (
        <div>
            {/* Cambiamos el link largo de internet por la variable Promo entre llaves */}
            <Image imageURL={Promo}></Image>
        </div>
    );
}

export default Card;