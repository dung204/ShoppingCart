import CartModal from '@/components/CartModal';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const NavbarFooterCart: Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <CartModal />
      <Footer />
    </>
  );
};

export default NavbarFooterCart;
