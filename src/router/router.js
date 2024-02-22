

import { createRouter, createWebHashHistory } from "vue-router";


export default createRouter({
    history:createWebHashHistory(),

    routes:[
        {
            path : '/',
            name : 'HomePage',
            component : ()=> import('./Home.vue')
        },
        {
            path : '/message',
            name : 'MessagePage',
            component : ()=> import('./Message.vue')
        },
        {
            path : '/credit',
            name : 'CreditPage',
            component : ()=> import('./Credit.vue')
        },
    ]
})

