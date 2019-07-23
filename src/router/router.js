
import home from '../components/home'
import Todomvc from '../components/Todomvc'
import welcome from '../components/welcome'
import myInfo from '../components/myInfo'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes: [
        {
            name:'welcome',
            path:'/home',
            component: welcome,
        },
        {
            name:'home',
            path: '/home/:name', 
            component: home,
            children:[
                {
                    name:'toDoList',
                    path:'todolist',
                    component:Todomvc,
                },
                {
                    name:'information',
                    path: 'imformation', 
                    component: myInfo,
                },
            ]
        },
       
    ]

    
})
    
    



