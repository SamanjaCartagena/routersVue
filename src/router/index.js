import {createRouter, createWebHistory} from 'vue-router';


const routes=[
    {path:'/', name:'Home', component:() => import('../views/HomePage.vue')},
    
         {path:'/destination/:id/:slug', 
         name:'destination.show',
         component:() => import ('../views/DestinationShow.vue')}
]
const router = createRouter( {
    history:createWebHistory(),
    routes,
    linkActiveClass :'vue-school-active-link'
})

export default router;