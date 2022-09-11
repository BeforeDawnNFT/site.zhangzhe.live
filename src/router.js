import Vue from "vue";
import VueRouter from "vue-router";

import SplashView from "@/components/SplashView";
import GameView from "@/components/GameView";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "SplashView",
        component: SplashView,
    },
    {
        path: "/game",
        name: "GameView",
        component: GameView,
    }
]

const router = new VueRouter({
    mode: "history",
    base: "./",
    routes
});

export default router;
