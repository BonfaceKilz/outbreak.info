import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Privacy from "../views/Privacy.vue";
import Terms from "../views/Terms.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path: "/terms",
    name: "Terms",
    component: Terms
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/epidemiology",
    name: "Epidemiology",
    props: route => ({
      log: route.query.log,
      variable: route.query.variable,
      location: route.query.location
    }),
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Epi.vue")
  },
  // {
  //   path: "/timelapse",
  //   name: "Timelapse",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Timelapse.vue")
  // },
  {
    path: "/doubling-rates",
    name: "Doubling Rates",
    props: route => ({
      location: route.query.location,
      variable: route.query.variable
    }),
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DoublingRates.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes,
  scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
});

export default router;
