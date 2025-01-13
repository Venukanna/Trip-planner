

// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Row,
//   Navbar,
//   Offcanvas,
//   Nav,
//   NavDropdown,
// } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "../Header/header.css";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   useEffect(()=>{
//     window.addEventListener("scroll", isSticky);
//     return ()=>{
//       window.removeEventListener("scroll", isSticky)
//     }
//   })

//   // sticky Header 
//   const isSticky=(e)=>{
//     const header = document.querySelector('.header-section');
//     const scrollTop = window.scrollY;
//     scrollTop >= 120 ? header.classList.add('is-sticky') :
//     header.classList.remove('is-sticky')
//   }

//   const closeMenu =()=>{
//     if(window.innerWidth <= 991){
//       setOpen(false)
//     }
//   }
//   const logout = () => {
//     localStorage.removeItem("isLoggedIn"); // Clear the isLoggedIn flag
//     navigate("/login"); // Navigate to the login page
//   };
 

//   return (
    
//     <header className="header-section">
//       <Container>
       
//           <Navbar expand="lg" className="p-0">
//             {/* Profile Image Section */}
//           <div className="profile-image-container">
//             <img
//               src="https://images.pexels.com/photos/16354650/pexels-photo-16354650/free-photo-of-colorful-figurine-of-hindu-god.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
//               alt="Profile"
//               className="profile-image"
//             />
//           </div>
//           {/* End Profile Image Section */}
//             {/* Logo Section  */}
//             <Navbar.Brand>
//               <NavLink to="/"> CrazyGuyS</NavLink>
//             </Navbar.Brand>
//             {/* End Logo Section  */}

//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-lg`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//               placement="start"
//               show={open}
//             >
//               {/*mobile Logo Section  */}
//               <Offcanvas.Header>
//                 <h1 className="logo">Weekendmonks</h1>
//                 <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
//                   <i className="bi bi-x-lg"></i>
//                 </span>
//               </Offcanvas.Header>
//               {/*end mobile Logo Section  */}

//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <NavLink className="nav-link" to="/" onClick={closeMenu}>
//                     Home
//                   </NavLink>
//                   <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>
//                     ABOUT US
//                   </NavLink>
//                   <NavLink className="nav-link" to="/tours" onClick={closeMenu}>
//                     TOURS
//                   </NavLink>

//                   <NavDropdown
//                     title="DESTINATION"
//                     id={`offcanvasNavbarDropdown-expand-lg`}
//                   >
                   
                      
//                     <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
//                     SPAIN TOURS
//                   </NavLink>
                  
                   
//                   </NavDropdown>
//                   <NavLink className="nav-link" to="/gallery" onClick={closeMenu}>
//                     GALLERY
//                   </NavLink>
//                   <NavLink className="nav-link" to="/profile" onClick={closeMenu}>
//                     Profile
//                   </NavLink>
                  
//                   <NavLink className="nav-link" to="/Login" onClick={closeMenu}>
//                     Login
//                   </NavLink>
//                   <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>
//                     CONTACT
//                   </NavLink>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//             <div className="ms-md-4 ms-2">
              
//                <NavLink to="/booking" className="primaryBtn w-100 d-flex justify-content-center fw-bold">
//                Book Now
//                 </NavLink>
//               <li className="d-inline-block d-lg-none ms-3 toggle_btn">
//                 <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
//               </li>
//             </div>
//           </Navbar>
    
//       </Container>
//     </header>
//   );
// };

// export default Header;

// import React, { useState, useEffect } from "react";
// import { Container, Row, Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./header.css";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   const logout = () => {
//     localStorage.removeItem("isLoggedIn"); // Clear the isLoggedIn flag
//     navigate("/login"); // Navigate to the login page
//   };

//   return (
//     <header className="header-section">
//       <Container>
//         <Navbar expand="lg" className="p-0">
//           {/* Profile Image Section */}
//           <div className="profile-image-container">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0WDEc8Qf0-6p1_VyDuja3DhXKU9qnOdqbpw&s"
//               alt="User  Picture"
//               className="profile-image"
//             />
//           </div>
//           {/* End Profile Image Section */}

//           {/* Logo Section */}
//           <Navbar.Brand>
//             <NavLink to="/">CrazyGuyS</NavLink>
//           </Navbar.Brand>
//           {/* End Logo Section */}

//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-lg`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//             placement="start"
//             show={open}
//           >
//             {/* Mobile Logo Section */}
//             <Offcanvas.Header>
//               <h1 className="logo">Weekendmonks</h1>
//               <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
//                 <i className="bi bi-x-lg"></i>
//               </span>
//             </Offcanvas.Header>
//             {/* End Mobile Logo Section */}

//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3">
//                 <NavLink className="nav-link" to="/" onClick={toggleMenu}>
//                   Home
//                 </NavLink>

//                 <NavLink className="nav-link" to="/profile" onClick={toggleMenu}>
//                   Profile
//                 </NavLink>
//                 <Nav.Link className="nav-link" onClick={logout}>
//                   Logout
//                 </Nav.Link>
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Navbar>
//       </Container>
//     </header>
//   );
// };

// export default Header;


// import React, { useEffect, useState } from "react";
// import {
//   Container,
//   Row,
//   Navbar,
//   Offcanvas,
//   Nav,
//   NavDropdown,
// } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "../Header/header.css";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const toggleMenu = () => {
//     setOpen(!open);
//   };

//   useEffect(()=>{
//     window.addEventListener("scroll", isSticky);
//     return ()=>{
//       window.removeEventListener("scroll", isSticky)
//     }
//   })

//   // sticky Header 
//   const isSticky=(e)=>{
//     const header = document.querySelector('.header-section');
//     const scrollTop = window.scrollY;
//     scrollTop >= 120 ? header.classList.add('is-sticky') :
//     header.classList.remove('is-sticky')
//   }

//   const closeMenu =()=>{
//     if(window.innerWidth <= 991){
//       setOpen(false)
//     }
//   }
//   const logout = () => {
//     localStorage.removeItem("isLoggedIn"); // Clear the isLoggedIn flag
//     navigate("/login"); // Navigate to the login page
//   };

//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//   return (
    
//     <header className="header-section">
//       <Container>
       
//           <Navbar expand="lg" className="p-0">
//             {/* Profile Image Section */}
//           <div className="profile-image-container">
//             <img
//               src="https://images.pexels.com/photos/16354650/pexels-photo-16354650/free-photo-of-colorful-figurine-of-hindu-god.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
//               alt="Profile"
//               className="profile-image"
//             />
//           </div>
//           {/* End Profile Image Section */}
//             {/* Logo Section  */}
//             <Navbar.Brand>
//               <NavLink to="/"> CrazyGuyS</NavLink>
//             </Navbar.Brand>
//             {/* End Logo Section  */}

//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-lg`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
//               placement="start"
//               show={open}
//             >
//               {/*mobile Logo Section  */}
//               <Offcanvas.Header>
//                 <h1 className="logo">Weekendmonks</h1>
//                 <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
//                   <i className="bi bi-x-lg"></i>
//                 </span>
//               </Offcanvas.Header>
//               {/*end mobile Logo Section  */}

//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <NavLink className="nav-link" to="/" onClick={closeMenu}>
//                     Home
//                   </NavLink>
//                   <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>
//                     ABOUT US
//                   </NavLink>
//                   <NavLink className="nav-link" to="/tours" onClick={closeMenu}>
//                     TOURS
//                   </NavLink>

//                   <NavDropdown
//                     title="DESTINATION"
//                     id={`offcanvasNavbarDropdown-expand-lg`}
//                   >
                   
                      
//                     <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
//                     SPAIN TOURS
//                   </NavLink>
                  
                   
//                   </NavDropdown>
//                   <NavLink className="nav-link" to="/gallery" onClick={closeMenu}>
//                     GALLERY
//                   </NavLink>
//                   {isLoggedIn ? (
//                     <>
//                       <NavLink className="nav-link" to="/profile" onClick={closeMenu}>
//                         Profile
//                       </NavLink>
//                       <Nav.Link className="nav-link" onClick={logout}>
//                         Logout
//                       </Nav.Link>
//                     </>
//                   ) : (
//                     <NavLink className="nav-link" to="/Login" onClick={closeMenu}>
//                       Login
//                     </NavLink>
//                   )}
//                   <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>
//                     CONTACT
//                   </NavLink>
//                 </Nav>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//             <div className="ms-md-4 ms-2">
              
//                <NavLink to="/booking" className="primaryBtn w-100 d-flex justify-content-center fw-bold">
//                Book Now
//                 </NavLink>
//               <li className="d-inline-block d-lg-none ms-3 toggle_btn">
//                 <i className={open ? "bi bi-x-lg" : "bi bi-list"}  onClick={toggleMenu}></i>
//               </li>
//             </div>
//           </Navbar>
    
//       </Container>
//     </header>
//   );
// };

// export default Header;



import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(()=>{
    window.addEventListener("scroll", isSticky);
    return ()=>{
      window.removeEventListener("scroll", isSticky)
    }
  })

  // sticky Header 
  const isSticky=(e)=>{
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
    header.classList.remove('is-sticky')
  }

  const closeMenu =()=>{
    if(window.innerWidth <= 991){
      setOpen(false)
    }
  }
  const logout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear the isLoggedIn flag
    navigate("/login"); // Navigate to the login page
  };

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    
    <header className="header-section">
      <Container>
       
          <Navbar expand="lg" className="p-0">
            {/* Profile Image Section */}
          <div className="profile-image-container">
            <img
              src="https://images.pexels.com/photos/16354650/pexels-photo-16354650/free-photo-of-colorful-figurine-of-hindu-god.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your image path
              alt="Profile"
              className="profile-image"
            />
          </div>
          {/* End Profile Image Section */}
            {/* Logo Section  */}
            <Navbar.Brand>
              <NavLink to="/"> CrazyGuyS</NavLink>
            </Navbar.Brand>
            {/* End Logo Section  */}

            {isLoggedIn ? (
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="start"
                show={open}
              >
                {/*mobile Logo Section  */}
                <Offcanvas.Header>
                  <h1 className="logo">Weekendmonks</h1>
                  <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
                    <i className="bi bi-x-lg"></i>
                  </span>
                </Offcanvas.Header>
                {/*end mobile Logo Section  */}

                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink className="nav-link" to="/" onClick={closeMenu}>
                      Home
                    </NavLink>
                    <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>
                      ABOUT US
                    </NavLink>
                    <NavLink className="nav-link" to="/tours" onClick={closeMenu}>
                      TOURS
                    </NavLink>

                    <NavDropdown
                      title="DESTINATION"
                      id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                   
                      
                      <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>
                      SPAIN TOURS
                    </NavLink>
                  
                   
                    </NavDropdown>
                    <NavLink className="nav-link" to="/gallery" onClick={closeMenu}>
                      GALLERY
                    </NavLink>
                    <NavLink className="nav-link" to="/profile" onClick={closeMenu}>
                      Profile
                    </NavLink>
                    
                    <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>
                      CONTACT
                    </NavLink>
                    <Nav.Link className="nav-link" onClick={logout}>
                      Logout
                    </Nav.Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            ) : (
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="start"
                show={open}
              >
                {/*mobile Logo Section  */}
                <Offcanvas.Header>
                  <h1 className="logo">Weekendmonks</h1>
                  <span className="navbar-toggler ms-auto"  onClick={toggleMenu}>
                    <i className="bi bi-x-lg"></i>
                  </span>
                </Offcanvas.Header>
                {/*end mobile Logo Section  */}

                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <NavLink className="nav-link" to="/login" onClick={closeMenu}>
                      Login
                    </NavLink>
                  </Nav>
                </Offcanvas.Body>
              </Navbar. Offcanvas>
            )}

            <div className="ms-md-4 ms-2">
              {isLoggedIn && (
                <NavLink to="/booking" className="primaryBtn w-100 d-flex justify-content-center fw-bold">
                  Book Now
                </NavLink>
              )}
              <li className="d-inline-block d-lg-none ms-3 toggle_btn">
                <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
              </li>
            </div>
          </Navbar>
    
      </Container>
    </header>
  );
};

export default Header;