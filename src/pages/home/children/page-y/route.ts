import childPage1 from './children/page-y-child-1/route';
import childPage2 from './children/page-y-child-2/route';
import childPage3 from './children/page-y-child-3/route';
import childPage4 from './children/page-y-child-4/route';

export default {
  name: 'page-y',
  path: '/page-y',
  loadAction: () => import('./index'),
  children: [childPage1, childPage2, childPage3, childPage4],
};
