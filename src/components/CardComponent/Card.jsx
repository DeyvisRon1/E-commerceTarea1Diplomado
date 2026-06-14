import Image from '../ImageComponent/Image.jsx';
import Promo from '../../assets/Images/Promo.jpg'; 

function Card() {
    return (
        <div>
    
            <Image imageURL={Promo}></Image>
        </div>
    );
}

export default Card;