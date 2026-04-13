import React from 'react';
import FooterLogo from '../assets/logo-xl.png'
import InstaLogo from '../assets/instagram.png'
import FbLogo from '../assets/facebook.png'
import XLogo from '../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] flex flex-col justify-center items-center text-center p-20'>
            <div>
                <div>
                    <img className='mx-auto mb-6' src={FooterLogo} alt="" />
                </div>
                <p className='text-white mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <h5 className='text-white text-xl font-medium mb-4'>Social Links</h5>
                <div className='flex gap-3 justify-center'>
                    <img src={InstaLogo} alt="" />
                    <img src={FbLogo} alt="" />
                    <img src={XLogo} alt="" />
                </div>
            </div>

            <hr className='text-white opacity-10 w-3/4 my-10' />

            <div className='text-white opacity-50 flex flex-wrap justify-between items-center w-3/4 gap-4'>
                <div className=''>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='grid grid-cols-3 justify-center items-center gap-10'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;