// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { Link,useNavigate } from 'react-router-dom';
// import iciciLogo from '../assets/icici_logo.svg'; // Adjust the path as necessary

// import SideBar from './SideBar';

// function NavigationBar() {
//   const navLinks = [
//     { to: '/account', label: 'Account' },
//     { to: '/portfolio', label: 'Portfolio' },
//     { to: '/orders', label: 'Orders' },
//   ];

//   const navigate = useNavigate();

//   const handleLogout = () => {
 
//     console.log('Logout clicked');
//     navigate('/login');
//   };

//   return (
//     <>
   
//     <Navbar bg="light" variant="light" className="custom-navbar">
//     {/* <div style={{ float: 'left', backgroundColor: 'darkorange', padding: '10px', margin: '5px' }}>
      
//       <SideBar></SideBar>
//       </div> */}
//       <Container>
       
//         <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//           <img
//             src={iciciLogo}
//             width="200"
//             height="50"
//             className="d-inline-block align-top me-2"
//             alt="ICICI Direct Logo"
//           />
//           <span className="ms-2"></span>
//         </Navbar.Brand>
//         <Nav className="ms-4 custom-nav"> {/* Adjust margin as needed */}
//           {navLinks.map((link, index) => (
//             <React.Fragment key={link.to}>
//               <Nav.Link as={Link} to={link.to}>{link.label}</Nav.Link>
//               {index < navLinks.length - 1 && <span className="separator ms-2">|</span>}
//             </React.Fragment>
//           ))}
//         </Nav>
//         <Button variant="outline-danger" className="orange-button ms-auto" onClick={handleLogout}>
//           Logout
//         </Button>
//       </Container>
//     </Navbar>
//     </>
//   );
// }

// export default NavigationBar;





// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { Link, useNavigate } from 'react-router-dom';
// import iciciLogo from '../assets/icici_logo.svg'; // Adjust the path as necessary
// import '../CSS/NavigationBar.css'; // Add this line to import CSS

// import SideBar from './SideBar';

// function NavigationBar() {
//   const navLinks = [
//     // { to: '/account', label: 'Account' },
//     // { to: '/portfolio', label: 'Portfolio' },
    
//     { to: '/f&o', label: 'F&O' },
//     { to: '/commodity', label: 'Commodity' },
//     { to: '/equity', label: 'Equity' },
//     { to: '/orders', label: 'Orders' },
//   ];

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log('Logout clicked');
//     navigate('/login');
//   };

//   return (
//     <>
//       <Navbar bg="light" variant="light" className="custom-navbar">
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//             <img
//               src={iciciLogo}
//               width="200"
//               height="50"
//               className="d-inline-block align-top me-2"
//               alt="ICICI Direct Logo"
//             />
//             <span className="ms-2"></span>
//           </Navbar.Brand>
//           <Nav className="ms-4 custom-nav"> {/* Adjust margin as needed */}
//             {navLinks.map((link, index) => (
//               <React.Fragment key={link.to}>
//                 <Nav.Link as={Link} to={link.to}>{link.label}</Nav.Link>
//                 {index < navLinks.length - 1 && <span className="separator ms-2">|</span>}
//               </React.Fragment>
//             ))}
//           </Nav>
//           <Button variant="outline-danger" className="orange-button ms-auto" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavigationBar;





// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import { Link, useNavigate } from 'react-router-dom';
// import iciciLogo from '../assets/icici_logo.svg'; // Adjust the path as necessary

// import SideBar from './SideBar';
// import '../CSS/NavigationBar.css'; // Import the CSS file

// function NavigationBar() {
//   const navLinks = [
//     { to: '/f&o', label: 'F&O' },
//     { to: '/commodity', label: 'Commodity' },
//     { to: '/equity', label: 'Equity' },
//     { to: '/orders', label: 'Orders' },
//   ];

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     console.log('Logout clicked');
//     navigate('/login');
//   };

//   return (
//     <>
//       <Navbar /*bg="light" variant="light"*/ className="custom-navbar">
//         <Container>
//           <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
//             <img
//               src={iciciLogo}
//               width="200"
//               height="50"
//               className="icicilogo"
//               alt="ICICI Direct Logo"
//             />
//             <span className="ms-2"></span>
//           </Navbar.Brand>
//           <Nav className="ms-4 custom-nav"> {/* Adjust margin as needed */}
//             {navLinks.map((link, index) => (
//               <React.Fragment key={link.to}>
//                 <Nav.Link as={Link} to={link.to}>{link.label}</Nav.Link>
//                 {index < navLinks.length - 1 && <span className="separator ms-2">|</span>}
//               </React.Fragment>
//             ))}
//           </Nav>
//           <Button variant="outline-danger" className="orange-button ms-auto" onClick={handleLogout}>
//             Logout
//           </Button>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavigationBar;





import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import iciciLogo from '../images/Logo.svg'; // Adjust the path as necessary
// import SideBar from './SideBar';
import '../css/NavigationBar.css'; // Import the CSS file

function NavigationBar({ links }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logout clicked');
    navigate('/login');
  };

  return (
    <>
      <Navbar /*bg="light" variant="light"*/ className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={iciciLogo}
              width="200"
              height="50"
              className="icicilogo"
              alt="ICICI Direct Logo"
            />
            <span className="ms-2"></span>
          </Navbar.Brand>
          <Nav className="ms-4 custom-nav"> {/* Adjust margin as needed */}
            {links.map((link, index) => (
              <React.Fragment key={link.to}>
                <Nav.Link as={Link} to={link.to}>{link.label}</Nav.Link>
                {index < links.length - 1 && <span className="separator ms-2">|</span>}
              </React.Fragment>
            ))}
          </Nav>
          <Button variant="outline-danger" className="orange-button ms-auto" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;
