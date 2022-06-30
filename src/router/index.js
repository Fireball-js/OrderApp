import { createRouter, createWebHashHistory } from 'vue-router'
import IndexWrap from '../components/IndexWrap'
import AllGoods from '../components/AllGoods'
import GoodsDetail from '../components/GoodsDetail'
import ShopCart from '../components/ShopCart'
import UserCenter from '../components/UserCenter'

const routes = [{
        path: '/',
        name: 'indexWrap',
        component: IndexWrap
    },
    {
        path: '/allgoods',
        name: 'AllGoods',
        component: AllGoods
    },
    {
        path: '/goodsdetail',
        name: 'GoodsDetail',
        component: GoodsDetail
    },
    {
        path: '/shopcart',
        name: 'ShopCart',
        component: ShopCart
    },
    {
        path: '/usercenter',
        name: 'UserCenter',
        component: UserCenter
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router