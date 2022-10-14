import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "notFound" */ '../views/NotFoundView.vue')
  },
  {
    path: '/soups',
    name: 'soups',
    component: () => import(/* webpackChunkName: "soups" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/hachapur',
    name: 'hachapur',
    component: () => import(/* webpackChunkName: "hachapur" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/snacks',
    name: 'snacks',
    component: () => import(/* webpackChunkName: "snacks" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/khinkali',
    name: 'khinkali',
    component: () => import(/* webpackChunkName: "khinkali" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/barbecue',
    name: 'barbecue',
    component: () => import(/* webpackChunkName: "barbecue" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/sauces',
    name: 'sauces',
    component: () => import(/* webpackChunkName: "sauces" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/salads',
    name: 'salads',
    component: () => import(/* webpackChunkName: "salads" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/dishes',
    name: 'dishes',
    component: () => import(/* webpackChunkName: "dishes" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/garnish',
    name: 'garnish',
    component: () => import(/* webpackChunkName: "garnish" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/desserts',
    name: 'desserts',
    component: () => import(/* webpackChunkName: "desserts" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/drinks',
    name: 'drinks',
    component: () => import(/* webpackChunkName: "drinks" */ '../views/FilteredProductsView.vue')
  },
  {
    path: '/delivery',
    name: 'delivery',
    component: () => import(/* webpackChunkName: "delivery" */ '../views/DeliveryView.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: "delivery" */ '../views/PaymentView.vue')
  },
  {
    path: '/support',
    name: 'support',
    component: () => import(/* webpackChunkName: "support" */ '../views/SupportView.vue')
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "support" */ '../views/ProductDetailView.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
