import header from '../css/header.css';
import swipe from '../icons/swipe.svg';
import Discord from '../icons/Discord.svg';
import Env from '../icons/Env.svg';
import Github from '../icons/Github.svg';
import Ig from '../icons/Ig.svg';

function Header() {
    return (
        <div className='Header'>
            <div className='Title-Header'>
                <h4>Welcome to my creative world ! My name is Antoine Mahassadi, creative developer and I am delighted to open the doors of my portfolio to you, enjoy viewing ;)</h4>
            </div>

            <div className='Icon-Swipe'>
                <img src={swipe} alt='#' />
                <p className='Link'>Swipe up</p>
            </div>

            <div className='Contacts'>
                <div className='Name'>
                    <p>antoine mahassadi</p>
                    <h6>developper Fullstack Jr & Designer Ui</h6>
                </div>
                <div className='Icons'>
                    <img src={Env} alt='#' />
                    <img src={Ig} alt='#' />
                    <img src={Discord} alt='#' />
                    <img src={Github} alt='#' />
                </div>
            </div>
        </div>
    );
}

export default Header;