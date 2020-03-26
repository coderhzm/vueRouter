import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const News = () => import('views/home/childComps/HomeNews')
const Message = () => import('views/home/childComps/HomeMessage')
const About = () => import('views/about/About')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    meta: {
      title: "首页"
    },
    component: Home,
    children: [
      {
        path: 'news',
        component: News
      },
      {
        path: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: "关于"
    },
    component: About
  },
  {
    path: '/profile/:id',
    meta: {
      title: "我的"
    },
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//前置守卫（guard）
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // console.log(to);
  console.log('前置');
  next()
})

//后置守卫（hook）
router.afterEach( (to, from) => {
  console.log('后置');
})

export default router
