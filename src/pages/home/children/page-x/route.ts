import childPage1 from './children/page-x-child-1/route';
import childPage2 from './children/page-x-child-2/route';
import childPage3 from './children/page-x-child-3/route';
import childPage4 from './children/page-x-child-4/route';

export default {
  name: 'page-x',
  path: '/page-x',
  loadAction: () => import('./index'),
  children: [childPage1, childPage2, childPage3, childPage4],
};
