import Line1 from '../icons/Line1.svg';
import Line2 from '../icons/Line2.svg';
import navbar from '../css/navbar.css';


import React, { useEffect, useState } from 'react';


function NavBar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const HandleScroll = () => {
            if (window.scrollY > 80) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', HandleScroll);

        return () => {
            window.removeEventListener('scroll', HandleScroll)
        };

    }, []);








    return (
        <div className={`NavBar ${scrolling ? 'scrolling' : ''}`}>
            <div className='NavBar-Content'>
                <div className='Line-1'> <img src={Line1} /></div>
                <p>antoine mahassadi</p>
                <div className='Line-2'> <img src={Line2} /></div>
            </div>

        </div>
    );
};

export default NavBar;


