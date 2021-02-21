import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
import './Header.scss';

const header = () => {
    return ( 
        <header className="header">
            <Navbar />
            <Hero />
        </header>
     );
}
 
export default header;