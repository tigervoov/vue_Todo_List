
import home from '../components/home'
import Todomvc from '../components/Todomvc'
import welcome from '../components/welcome'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        
        {
            name:'home',
            path: '/home/:value', 
            component: home,
            children:[
                {
                    name:'toDoList',
                    path:'/todolist',
                    component:Todomvc,
                }
            ]
        },
        {
            path: '/welcome', 
            component: welcome,
        },
    ]

    
})
    
    



