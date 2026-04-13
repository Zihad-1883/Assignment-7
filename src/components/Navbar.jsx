import React from 'react';
import Logo from '../assets/logo.png'
import Home from '../assets/Vector.png'
import Clock from '../assets/Clock.png'
import ChartLine from '../assets//ChartLine.png'
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
            <div className="navbar container mx-auto flex justify-between items-center py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       <NavLink to={'/'} className = { ({isActive}) => `${ isActive ?
                        "bg-green-900 text-white " : "text-[#64748B]"} rounded-md flex justify-center items-center gap-1 font-semibold px-3 py-2 `}><img src={Home} alt="" />Home</NavLink>
                        <NavLink to={'Timeline'} className = { ({isActive}) => `${ isActive ?
                        "bg-green-900 text-white " : "text-[#64748B]"} rounded-md flex justify-center items-center gap-1 font-semibold px-3 py-2 `}><img src={Clock} alt="" />Timeline</NavLink>
                        <NavLink to={'Stats'} className = { ({isActive}) => `${ isActive ?
                        "bg-green-900 text-white " : "text-[#64748B]"} rounded-md flex justify-center items-center gap-1 font-semibold px-3 py-2 `}><img src={ChartLine} alt="" />Stats</NavLink>
                    </ul>
                    </div>
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex">
                        <NavLink to={'/'} className = { ({isActive}) => `${ isActive ?
                        "bg-green-900 text-white " : "text-[#64748B]"} rounded-md flex justify-center items-center gap-1 font-semibold px-3 py-2 `}><img src={Home} alt="" />Home</NavLink>
                        <NavLink to={'Timeline'} className = { ({isActive}) => `${ isActive ?
                        "bg-green-900 text-white " : "text-[#64748B]"} rounded-md flex justify-center items-center gap-1 font-semibold px-3 py-2 `}><img src={Clock} alt="" />Timeline</NavLink>
                        <NavLink to={'Stats'} className = { ({isActive}) => `${ isActive ?
                        "bg-green-900 text-white " : "text-[#64748B]"} rounded-md flex justify-center items-center gap-1 font-semibold px-3 py-2 `}><img src={ChartLine} alt="" />Stats</NavLink>
                    </div>
                </div>
                </div>
    );
};

export default Navbar;