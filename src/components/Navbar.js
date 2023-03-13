import React,{ useState}from 'react';

import { Link } from "react-router-dom";

import '../styles/Navbar.css';
function Navbar() {

    const [openLinks,setOpenlinks] = useState(false);

    const toggleNavbar =()=>{
        setOpenlinks(! openLinks)
    };

  return (
      <div className="navbar">
         <div className='logo' id={openLinks ? "open" : "close"}>
         <h1>Pizza</h1>
         <div className='hiddenLinks'>
         <Link to="/"> Home </Link>
         <Link to="/menu"> Menu </Link>
         <Link to="/about"> About </Link>
         <Link to="/contact"> Contact </Link>
         </div>
         </div>
         <div className='navlist'>
         <Link to="/"> Home </Link>
         <Link to="/menu"> Menu </Link>
         <Link to="/about"> About </Link>
         <Link to="/contact"> Contact </Link>
       <button onClick={toggleNavbar}>
       <i class="fa-solid fa-bars"></i>
       </button>
         </div>
      </div>
  );
}

export default Navbar
