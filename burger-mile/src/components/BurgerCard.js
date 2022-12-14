// import { distance, point } from '@turf/turf';
import './BurgerCard.scss';
import BurgerText from './BurgerText';

const BurgerCard = (props) => {

    // function getDistanceToRestaurant(currentPosition, latlngRestaurant) {
    //     if (!currentPosition) return 0;
    //     var from = point(currentPosition);
    //     var to = point(latlngRestaurant);
    //     return distance(from, to, { units: 'kilometers' })
    // }

    return (
        <div className='card-container'>
            <img src={props.img} alt='burgerlogo' />
            <BurgerText
                title={props.Name}
                price={props.Price}
                food={props.Food}
                atmosphere={props.Atmosphere}
                itFactor={props.It_factor}
                id={props.id} 
                ratingText={''} />
        </div>
    );
};

export default BurgerCard