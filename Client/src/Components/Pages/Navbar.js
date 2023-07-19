




import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css';

function Navbar() {
  const location = useLocation();


   

  return (
    <div>
      <nav className="Navbar">

        
        

<li className='linklogii' class="nav-item" style={{listStyle:"none", marginTop:"3px"}}>
    <Link  className='linklogo'  to="/" style={{ textDecoration: 'none',     
                          alignItems:'center',
                          alignContent:'center',
                          fontFamily:'cursive',
                         
                          marginLeft:'20px',
                          listStyle:'none !imporatant'    
                            }} 
                  class="nav-link" aria-current="page" >SleepSafari</Link>
    </li>

         <div className='Linksss' > 

        <ul className="links">
          <li  class="nav-item" className="link">
            <Link to="/destinations"  style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/destinations' ? 'active' : ''}`}>
              Destinations
            </Link>
          </li>
          <li  class="nav-item" className="link">
            <Link to="/hostels"  style={{ textDecoration: 'none' }}   class="nav-link" className={`nav-link ${location.pathname === '/hostels' ? 'active' : ''}`}>
              Hostels
            </Link>
          </li>
          <li class="nav-item" className="link">
            <Link to="/workations"  style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/workations' ? 'active' : ''}`}>
              Workations
            </Link>
          </li>
          <li class="nav-item" className="link">
            <Link to="/membership"  style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/membership' ? 'active' : ''}`}>
              Membership
            </Link>
          </li>
          <li class="nav-item" className="link">
            <Link to="/blogs" style={{ textDecoration: 'none' }}  class="nav-link" className={`nav-link ${location.pathname === '/blogs' ? 'active' : ''}`}>
              Blogs
            </Link>
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;






