import { NavbarAndFooter } from '@/layouts';
import NavbarFooterCart from '@/layouts/NavbarFooterCart';
import AboutPage from '@/pages/AboutPage';
import CartPage from '@/pages/CartPage';
import HomePage from '@/pages/HomePage';
import ProfilePage from '@/pages/ProfilePage';
import StorePage from '@/pages/StorePage';
import SellProductPage from '@/pages/SellProductPage';

type Route = {
  path: string;
  element: () => JSX.Element;
  layout?: Layout;
};

const routes: Route[] = [
  { path: '/', element: HomePage, layout: NavbarAndFooter },
  { path: '/store', element: StorePage, layout: NavbarFooterCart },
  { path: '/about', element: AboutPage, layout: NavbarAndFooter },
  { path: '/profile', element: ProfilePage, layout: NavbarAndFooter },
  { path: '/cart', element: CartPage, layout: NavbarAndFooter },
  { path: '/sell-product', element: SellProductPage, layout: NavbarAndFooter },
];

export { routes };
