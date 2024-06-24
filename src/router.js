import { createWebHashHistory, createRouter } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import BuildMap from '@/components/BuildMap.vue'
import WorkMode from '@/components/WorkMode.vue'
const routes = [
  {path:'/', component: MainPage},
  {path:'/build_map', component:BuildMap},
  {path:'/work_mode', component:WorkMode}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router