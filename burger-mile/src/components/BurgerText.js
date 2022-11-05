import { Box, Rating, Typography } from '@mui/material';
import './BurgerText.scss';

const BurgerCardStoryScroll = (props) => {
    return (
        <div className='box'>
            <Typography variant='h4'>{props.title}</Typography>
            <Typography variant='p'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                dis
            </Typography>
            <div className='rating-holder'>
                <Typography variant='p'>Price:</Typography>
                <Rating value={props.price} readOnly max={6} />
            </div>
            <div className='rating-holder'>
                <Typography variant='p'>Food:</Typography>
                <Rating value={props.food} readOnly max={6} />
            </div>
            <div className='rating-holder'>
                <Typography variant='p'>Atmosphere:</Typography>
                <Rating value={props.atmosphere} readOnly max={6} />
            </div>
            <div className='rating-holder'>
                <Typography variant='p'>It-factor:</Typography>
                <Rating value={props.itFactor} readOnly max={6} />
            </div>
        </div>
    )
}

export default BurgerCardStoryScroll