import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import CustomerDropdown from './CustomerDropdown';

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/sell-product');
  };

  return (
    <NavbarBs className='bg-white shadow-sm mb-3' sticky='top'>
      <Container fluid>
        <Nav>
          <Nav.Link as={NavLink} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to='/store'>
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to='/about'>
            About
          </Nav.Link>
        </Nav>
        <Button variant='danger' className='ms-auto me-2' onClick={handleClick}>
          Sell product
        </Button>
        <CustomerDropdown />
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
