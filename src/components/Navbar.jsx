import React, { useState, useEffect, useRef } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import '../styles/Navbar.css';

const Navbar = () => 
{
    return(

            <div className="navbar">

                <div className="navbar-head">
                    <h1 className="navbar-title">imagine time</h1>
                    <p className="navbar-subtitle">BY VEDANT</p>
                </div>

                <div className='setting'>
                  <svg>  <Cog6ToothIcon className="h-8 w-8 text-white" /> </svg>
                </div>

            </div>

           

    );
};

export default Navbar;  