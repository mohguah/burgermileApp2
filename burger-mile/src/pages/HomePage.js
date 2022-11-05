import { NavLink } from 'react-router-dom'
import './HomePage.scss'
import burgerimage from '../assets/BurgermileLogo.png'
import burgerSvg from '../assets/svgs/burger.svg';
import tomato from '../assets/svgs/tomato.svg';
import salad from '../assets/svgs/salad.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { dataList } from "../assets/data.js";
import BurgerCard from '../components/BurgerCard';
import { Hidden, Typography } from '@mui/material';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

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
		<>
			<Parallax pages={1.35} className='para-0'>
				<ParallaxLayer offset={0} factor={2} speed={5} className='para-bg-1'>

				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={5} className='para-tomato'>
					<img src={tomato} alt='tomato' />
				</ParallaxLayer>
				{/* <ParallaxLayer offset={0} speed={5} className='para-salad'>
					<img src={salad} alt='salad' />
				</ParallaxLayer> */}
				<ParallaxLayer offset={0} factor={0.7} speed={1} className='para-1'>
					<div className='text-holder'>
						<Typography variant='h3'>Welcome to Burgermile</Typography>
						<Typography variant='h3'>The place you find burger ratings</Typography>
					</div>
					<div className='bread-container'>
						<div className='bread text-holder'>
							<Typography variant='h4'>What is Burgermile?</Typography>
							<p>
								Burgermile is a place where you get burger ratings of selected
								restaurants.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.F
							</p>
							<NavLink className='nav-link' to='/about'>Read More</NavLink>
						</div>
						<div className='image-container'>
							{/* <img src={burgerSvg} alt='burgerimage' /> */}
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.6} factor={1} speed={1} className='para-2'>
					<div style={{ margin: '10px' }}>
						<div className='text-holder'>
							<Typography variant='h4'>Some of our burger ratings</Typography>
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
									<div onClick={() => console('hehehehe')}>
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
				</ParallaxLayer>
			</Parallax>
		</>
	);
};

export default HomePage