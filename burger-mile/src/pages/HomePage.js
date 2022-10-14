import { NavLink } from 'react-router-dom'
import './HomePage.scss'
import burgerimage from '../assets/BurgermileLogo.png'

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
        <div>
            <div>
                <h3>Welcome to Burgermile</h3>
                <h3>The place you find burger ratings</h3>
            </div>
            <div>
                <div>
                    <h5>What is Burgermile?</h5>
                    <p>
                        Burgermile is a place where you get burger ratings of selected
                        restaurants.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.F
                    </p>
                    <NavLink className='nav-link' to='/about'>Read More</NavLink>
                </div>
                <div className='grid-container'>
                    <img src={burgerimage} alt='burgerimage' />
                </div>
            </div>
            <div style={{ margin: '10px' }}>
                <h2>Some of our burger ratings</h2>
                <Carousel responsive={responsive}>

                </Carousel>
            </div>
        </div>
    )
}

export default HomePage