import pageX from './children/page-x/route';
import pageY from './children/page-y/route';

export default {
  name: 'home',
  path: process.env.REACT_APP_ROUTER_PREFIX || '/',
  loadAction: () => import('./index'),
  children: [pageX, pageY],
};
