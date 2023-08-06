import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index';
Vue.use(VueRouter);

const router = new VueRouter({
  // url에 있는 # 제거
  mode: 'history',
  routes: [
    {
      // 처음 노출되는 화면은 login으로 설정
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      // page를 이동할때 필요한 자원을 import, Dynamic import
      // 초기에 application의 loading 속도가 빨라짐
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      // meta가 있고, auth가 true인 경우
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAdd.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      // 존재하지 않는 url로 접속 시 404페이지 안내
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

// to : 이동하려는 페이지
// from : 현재 페이지
// next : 페이지 이동할 때 호출하는 API
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.getters.isLogin) {
    console.log('인증이 필요함');
    // 로그인 되지 않았다면 /login으로 redirect
    next('/login');
    // if문 탈출, 하단의 next() 호출방지, 함수 종료 **
    return;
  }
  next();
});

export default router;
