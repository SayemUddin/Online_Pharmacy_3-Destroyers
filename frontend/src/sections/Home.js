import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Extrasection from './Extrasection';
import Footer from './Footer';
import Navbar from './Navbar';
import Services from './Services';
import Review from './Review';

const Home = () => {
    return (
        //Home er moddhe services a limit 6 dkhaisi
        <div>
            
            <Banner/>
            <Services lim={9}/>
            <Extrasection/>
            <Contact/>
            <Review/>
            <Footer/>
        </div>
    );
};

export default Home;