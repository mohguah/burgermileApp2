import { distance, point } from '@turf/turf';
import './BurgerCard.scss';
import BurgerCardTextBox from './BurgerCardTextBox';

const BurgerCard2 = (props) => {

    // function getDistanceToRestaurant(currentPosition, latlngRestaurant) {
    //     if (!currentPosition) return 0;
    //     var from = point(currentPosition);
    //     var to = point(latlngRestaurant);
    //     return distance(from, to, { units: 'kilometers' })
    // }

    return (
        <div className='card-container'>
            <img src={props.img} alt='burgerlogo' />
            <BurgerCardTextBox
                    Name={props.Name}
                    Price={props.Price}
                    Food={props.Food}
                    Atmosphere={props.Atmosphere}
                    It_factor={props.It_factor}
                    id={props.id} />
        </div>
    );
};

export default BurgerCard2