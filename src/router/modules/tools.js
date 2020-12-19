export default  [
  {
    name: 'dbdocument',
    path: 'dbdocument',
    component: () => import('@/views/tools/DBDocument.vue')
  },
  {
    name: 'generator',
    path: 'generator',
    component: () => import('@/views/tools/MyGenerator.vue')
  }
];

