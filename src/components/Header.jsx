import React from 'react'
import brand from "../assets/images/brand.png"
import { Link } from 'react-router-dom';

const Header = () => {

  const handleOffcanvasToggle = () => {
    const offcanvasElement = document.getElementById("offCanvasSidebar");
    const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);  // Use window.bootstrap with CDN
    offcanvas.toggle();
  };

  return (
    
   
    <>
   {/* header-area */}
   <header>
     {/* info top section */}
     <div className="info-top py-2 d-lg-block d-none">
       <div className="container">
         <div className="row align-items-center">
           <div className="col-12 col-md-8">
             <p className="mb-0 theme-text-white small">
               <span className="fw-bold">
                 <i className="bi bi-envelope-fill me-2" />
                 Email : support@example.com
               </span>
             </p>
           </div>
           <div className="col-12 col-md-4">
             <div className="d-flex social justify-content-center justify-content-md-end">
               <Link to="" className="fs-5 pe-3">
               <i className="fa-brands fa-facebook"></i>
               </Link>
               <Link to="" className="fs-5 pe-3">
               <i className="fa-brands fa-x-twitter"></i>
               </Link>
               <Link to="" className="fs-5 pe-3">
               <i className="fa-brands fa-linkedin"></i>
               </Link>
               <Link to="" className="fs-5">
               <i className="fa-brands fa-youtube"></i>
               </Link>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div id="sticky-header" className="header-area">
       <div className="container">
         <div className="row">
           <div className="col-12">
             <div className="nav-toggle">
               <i className="bi bi-list" />
             </div>
             <div className="menu-wrap">
               <nav className="menu-nav">
                 <div className="brand">
                   <a href="index.html">
                     <img src={brand} alt="Brand" />
                   </a>
                 </div>
                 <div className="menu-navbar-wrap main-menu d-none d-xl-flex">
                   <ul className="navigation l-menu">
                     <li className="menu-item-children active">
                       <Link to="/">Home</Link>
                       
                     </li>
                     <li className="menu-item-children">
                       <a href="javascript:void(0)">Donate</a>
                       <ul className="sub-menu">
                         <li>
                           <a href="donations.html">Become a Patron</a>
                         </li>
                         <li>
                           <a href="donations-details.html">Festival Seva</a>
                         </li>
                         <li>
                           <a href="annadana.html">Annadana Seva</a>
                         </li>
                         <li>
                           <a href="go-seva.html">Go Seva</a>
                         </li>
                         <li>
                           <a href="donations-details.html">Nitya Seva</a>
                         </li>
                         <li>
                           <a href="donations-details.html">
                             Mandira Nirmana Seva
                           </a>
                         </li>
                         <li>
                           <a href="donations-details.html">Book Distribution</a>
                         </li>
                         <li>
                           <a href="donations-details.html">General Donations</a>
                         </li>
                       </ul>
                     </li>
                     <li className="menu-item-children">
                       <a href="javascript:void(0)">Activities</a>
                       <ul className="sub-menu">
                         <li>
                           <Link to="/fooddistribution">Food Distribution</Link>
                         </li>
                         <li>
                           <Link to="/cowprotection">Cow Protection</Link>
                         </li>
                         <li>
                           <a href="pilgrimage.html">Pilgrimage Tours</a>
                         </li>
                         <li>
                           <Link to="/projects">Projects</Link>
                         </li>
                         <li>
                           <Link to="/events">Events</Link>
                         </li>
                       </ul>
                     </li>
                     <li className="menu-item-children">
                       <a href="javascript:void(0)">Projects</a>
                     </li>
                     <li className="menu-item-children">
                       <a href="about.html">Gallery</a>
                       <ul className="sub-menu">
                         <li>
                           <a href="dailydarshan.html">Daily Darshan</a>
                         </li>
                         <li>
                           <a href="gallery-mixed.html">Deity Darshan</a>
                           <ul className="sub-menu">
                             <li>
                               <a href="deity-darshan.html">
                                 Deity Darshan – HK Hill
                               </a>
                             </li>
                             <li>
                               <a href="gallery.html">Deity Darshan – VK Hill</a>
                             </li>
                           </ul>
                         </li>
                         <li>
                           <a href="costume.html">Krishna Costume</a>
                         </li>
                         <li>
                           <a href="dignitaries-visit.html">Dignitaries Visit</a>
                         </li>
                         <li>
                           <a href="gallery-details.html">Videos</a>
                         </li>
                       </ul>
                     </li>
                     <li className="menu-item-children">
                       <a href="javascript:void(0)">About Us</a>
                       <ul className="sub-menu">
                         <li>
                           <Link to="/mission">Our Mission</Link>
                         </li>
                         <li>
                           <Link to="/objective">Objectives</Link>
                         </li>
                         <li>
                           <Link to="/governance">Governance</Link>
                         </li>
                         <li>
                           <Link to="/leadership">Leadership</Link>
                         </li>
                       </ul>
                     </li>
                     <li>
                       <a href="contact.html">Contact</a>
                     </li>
                   </ul>
                 </div>
                 <div className="menu-second">
                   <ul className="list-wrap">
                     
                     
                     <li className="side-toggle d-none d-sm-block">
                          <a
                            onClick={handleOffcanvasToggle}
                            className="side-menu"
                            aria-controls="offCanvasSidebar"
                          >
                            <i className="fa-solid fa-bars mt-2"></i>

                          </a>
                        </li>

                   </ul>
                 </div>
               </nav>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* Mobile Menu  */}
     <div className="mobile-menu">
       <nav className="mobile-menu-box">
         <div className="close-btn">
           <i className="bi bi-x-lg" />
         </div>
         <div className="nav-brand">
           <a href="index.html">
             <img src={brand} alt="Logo" />
           </a>
         </div>
         <div className="mobile-menu-wrap">
           {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
         </div>
         <div className="menu-search-box">
           <form action="#">
             <input type="text" placeholder="Search here..." />
             <button>
               <i className="bi bi-search" />
             </button>
           </form>
         </div>
       </nav>
     </div>
     <div className="mobile-menu-ovelay" />
     {/* End Mobile Menu */}
     {/* header-search */}
     <div className="search-box-wrap">
       <div className="search-bg" />
       <div className="search-close">
         <span>
           <i className="bi bi-x-lg" />
         </span>
       </div>
       <div className="search-con text-center">
         <div className="container">
           <div className="row">
             <div className="col-12">
               <h2 className="title">
                 <span>Search Here</span> ...
               </h2>
               <div className="form">
                 <form action="#">
                   <input
                     type="text"
                     name="search"
                     placeholder="Type Query here"
                     required=""
                   />
                   <button className="search-btn">
                     <i className="bi bi-search" />
                   </button>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offCanvasSidebar" aria-labelledby="offCanvasSidebarLabel">
<div className="offcanvas-header">
  <div className="brand">
    <a href="index.html">
      <img src={brand} alt="Logo" />
    </a>
  </div>
  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body">
  {/* Sidebar Content */}
  <div className="content">
             {/* Newsletter */}
             <div className="newsletter">
               <h4 className="small-title">Subscribe</h4>
               <p className='text-dark'>Subscribe To Our Newsletter </p>
               
             </div>

             {/* Contact Info */}
             <div className="contact-box">
               <h4 className="small-title">Help Info</h4>
               <ul className="list">
                 <li>
                   
                   <i className="fa-solid fa-mobile-button me-3"></i>
                     +9 111 222 3456
                   
                 </li>
                 <li>
                   
                   <i className="fa-solid fa-envelope-open-text me-3"></i>
                     info@example.com
                   
                 </li>
                 <li>
                 <i class="fa-solid fa-location-dot me-3"></i>
                   W-5, New Central Park, New York
                 </li>
               </ul>
             </div>

             {/* Social Links */}
             <div className="social-links">
               <h4 className="small-title">Connect with us</h4>
               <ul className="list-inline">
                 <li className="list-inline-item">
                   <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                 </li>
                 <li className="list-inline-item">
                   <Link to="#"><i className="fa-brands fa-x-twitter"></i></Link>
                 </li>
                 <li className="list-inline-item">
                   <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                 </li>
                 <li className="list-inline-item">
                   <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                 </li>
                 <li className="list-inline-item">
                   <Link to="#"><i className="fa-brands fa-youtube"></i></Link>
                 </li>
               </ul>
             </div>
           </div>

           {/* Copyright */}
           <div className="copyright mt-4">
             <p>
               Copyright © 2024 - By <span>Buddhism Life</span> All rights reserved.
             </p>
           </div>
         </div>
       </div>
    <div className="offCanvas-overlay" />
    {/* offCanvas-area-end */}
  </header>
  {/* header-area-end */}
</>

   

  )
}

export default Header


