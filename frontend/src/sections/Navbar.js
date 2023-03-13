import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const[sticky,setSticky]= useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY > 200);
            console.log(window.scrollY);
        };

        window.addEventListener('scroll',handleScroll);
        return() => window.removeEventListener('scroll',handleScroll);

    });

    return (
        <nav className={`${sticky ? "sticky" :""}`}>

        <div className='  flex justify-between '>
            {/* Logo Section */}
            <div>
                <p className='text-6xl font-bold text-green-500 '>Teli<span className=' text-orange-500'>X</span></p>
            </div>
            {/* Navigation */}
            <div className=' flex space-x-3'>
                <div className='text-3xl hover:bg-lime-400  text-orange-500   rounded-md p-2'>
                    <Link to="/" >Home</Link>
                </div>
                <div className='text-3xl hover:bg-lime-400  text-orange-500 rounded-md p-2'>
                    <Link to="/services">Products</Link>
                </div>
                <div className='text-3xl hover:bg-lime-400  text-orange-500 rounded-md p-2'>
                    <Link to="/manage">Manage</Link>
                </div>
                <div className='text-3xl hover:bg-lime-400  text-orange-500 rounded-md p-2'>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='text-3xl hover:bg-lime-400  text-orange-500 rounded-md p-2'>
                    <Link to="/banner">Banner</Link>
                </div>
                <div className='text-3xl hover:bg-lime-400  text-orange-500 rounded-md p-2'>
                    <Link to="/review">Review</Link>
                </div>
                <div className='text-3xl hover:bg-lime-400  text-orange-500 rounded-md p-2'>
                    <Link to="/footer">About Us</Link>
                </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;