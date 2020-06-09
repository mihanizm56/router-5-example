import childPage from './children/page-y-child/route';

export default {
  name: 'page-y',
  path: '/page-y',
  loadAction: () => import('./index'),
  children: [childPage],
};
