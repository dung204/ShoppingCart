import { Container, Navbar as NavbarBs } from 'react-bootstrap';

// Using navbar from bootstrap to use fixed bottom
function Footer() {
  return (
    <footer className='bg-white shadow-lg mt-3 p-3'>
      <Container
        fluid
        className='d-flex align-items-center justify-content-center'
      >
        © Copyright by{' '}
        <a href='https://github.com/dung204' target='_blank' rel='noopener'>
          Mantrilogix
        </a>
        . All right reserved.
      </Container>
    </footer>
  );
}

export default Footer;
