import { Box, Rating, Typography } from '@mui/material';
import './BurgerCardStoryScroll.scss';

const BurgerCardStoryScroll = (props) => {
    return (
        <div className='box'>
            <Typography variant='h4'>{props.title}</Typography>
            <Typography>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                dis
            </Typography>
            <div className='rating-holder'>
                <Typography>Price:</Typography>
                <Rating value={props.price} readOnly max={6} />
            </div>
            <div className='rating-holder'>
                <Typography>Food:</Typography>
                <Rating value={props.food} readOnly max={6} />
            </div>
            <div className='rating-holder'>
                <Typography>Atmosphere:</Typography>
                <Rating value={props.atmosphere} readOnly max={6} />
            </div>
            <div className='rating-holder'>
                <Typography>It-factor:</Typography>
                <Rating value={props.itFactor} readOnly max={6} />
            </div>
        </div>
    )
}

export default BurgerCardStoryScroll