import { NavLink } from 'react-router-dom'
import './HomePage.scss'
import burgerimage from '../assets/BurgermileLogo.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { dataList } from "../assets/data.js";
import BurgerCard from '../components/BurgerCard';
import { Typography } from '@mui/material';

const HomePage = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div className='page'>
            <div>
                <Typography variant='h3'>Welcome to Burgermile</Typography>
                <Typography variant='h3'>The place you find burger ratings</Typography>
            </div>
            <div className='bread-container'>
                <div className='bread'>
                    <Typography variant='h5'>What is Burgermile?</Typography>
                    <Typography>
                        Burgermile is a place where you get burger ratings of selected
                        restaurants.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.F
                    </Typography>
                    <NavLink className='nav-link' to='/about'>Read More</NavLink>
                </div>
                <div className='image-container'>
                    <img src={burgerimage} alt='burgerimage' />
                </div>
            </div>
            <div style={{ margin: '10px' }}>
                <div style={{ margin: '10px' }}>
                    <Typography variant='h5'>Some of our burger ratings</Typography>
                </div>
                <Carousel
                    ssr
                    partialVisbile
                    itemClass='image-item'
                    responsive={responsive}
                    swipeable={true}
                >
                    {dataList.slice(0, 5).map((burgercard) => {
                        return (
                            <div onClick={() => console('hehehehe')} style={{ cursor: 'pointer' }}>
                                <BurgerCard
                                    Name={burgercard.Name}
                                    img={burgercard.img}
                                    Price={burgercard.Price}
                                    Food={burgercard.Food}
                                    Atmosphere={burgercard.Atmosphere}
                                    It_factor={burgercard["It-factor"]}
                                    // LatLng={burgercard.LatLng}
                                    Adress={""}
                                    City={""}
                                    // Average={0}
                                    // Average_weighted={burgercard["Average weighted"]}
                                    // Gourmet_or_Joint={""}
                                    // Year={0}
                                    id={burgercard.id}
                                // currentPosition={undefined}
                                />
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </div>
    );
};

export default HomePage