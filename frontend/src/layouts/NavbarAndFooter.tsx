import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const NavbarAndFooter: Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavbarAndFooter;
