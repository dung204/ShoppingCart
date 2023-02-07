import Navbar from '@/components/Navbar';

const NavbarOnly: Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavbarOnly;
