import React from 'react'
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import {Link} from 'react-router-dom';
import Services from '../component/Services';
import FeaturedRooms from '../component/FeaturedRooms';
//import Button from '../component/StyledHero';

export default function Home()
{
    return ( 
    <>
    <Hero >
        <Banner title="luxurious Hotels" subtitle="Room Starting at BDT 599">
            <Link to="/hotels" className="btn-primary"  >Our Hotels</Link>
        </Banner>
    </Hero>
    <Services />
    <FeaturedRooms/>
    
    </>
    );
}
