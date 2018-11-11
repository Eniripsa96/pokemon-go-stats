import Home from 'pages/home/Home';
import PokeResult from "pages/home/PokeResult";
import PokemonEditor from "pages/home/PokemonEditor";
// Error Pages -- do not modify

/**
 * The following properties are currently supported for each route component:
 *
 *  component   {JSX}       The JSX component that will render when the route matches
 *  exact       {Boolean}   When true, will only match if the path matches the location.pathname exactly
 *  isNavItem   {Boolean}   When true, will render a NavItem in the Header component
 *  path        {String}    The route/path of the component to render
 *  title       {String}    Used in conjunction with isNavItem and will display in the Header component
 */
const routes = {
  home: {
    component: Home,
    exact: true,
    isNavItem: true,
    path: '/',
    title: 'Home',
    icon: 'home'
  },

  editor: {
    component: PokemonEditor,
    exact: true,
    isNavItem: true,
    path: '/editor',
    title: 'Personal Pokemon',
    icon: 'edit'
  },

  // Error Pages -- do not modify
  pageNotFound: {
    component: Home
  }
};

export {routes};
