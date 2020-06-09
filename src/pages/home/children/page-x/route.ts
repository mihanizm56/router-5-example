import childPage from './children/page-x-child/route';

export default {
  name: 'page-x',
  path: '/page-x',
  loadAction: () => import('./index'),
  children: [childPage],
};
