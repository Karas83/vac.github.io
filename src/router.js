import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from "@/pages/Home.vue";
import CalculatorPage from "@/pages/Calculator.vue";
import Videos from "@/pages/Videos.vue";
import Terms from "@/pages/Terms.vue";
import Privacy from "@/pages/Privacy.vue";
import Blog from "@/pages/Blog.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import ArticleOne from "@/pages/ArticleOne.vue";
import ArticleTwo from "@/pages/ArticleTwo.vue";
import AboutVac from "@/pages/AboutVac.vue";
import LoanRates from "@/pages/LoanRates.vue";
import VacInventory from "@/pages/VacInventory.vue";
import CarPage from "@/pages/CarPage.vue";
import RequestCar from "@/pages/RequestCar.vue";

export default createRouter({
    history: createWebHashHistory(),

    routes: [
        { path: '/', component: HomePage },
        {path: '/404',component: PageNotFound },
        {path: "/:catchAll(.*)", redirect: '/404',},
        { path: '/calculator', component: CalculatorPage },
        { path: '/videos', component: Videos },
        { path: '/terms', component: Terms },
        { path: '/privacy', component: Privacy },
        { path: '/blog', component: Blog },
        { path: '/article', component: ArticleOne },
        { path: '/article2', component: ArticleTwo },
        { path: '/about', component: AboutVac },
        { path: '/loan', component: LoanRates },
        { path: '/inventory', component: VacInventory },
        { path: '/carpage', component: CarPage },
        { path: '/405', component: RequestCar },
    ],
    scrollBehavior() {

        window.scrollTo(0, 0);

    }
}
)

