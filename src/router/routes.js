import AddGoods from '@/views/AddGoods'
import ProductList from '@/views/ProductList'
import Statistics from '@/views/Statistics'
import Login from '@/views/Login'
import Home from '@/views/Home'

export default [
    {
        name: 'Home', path: '/', component: Home, children: [
            { name: 'AddGoods', path: '/addGoods', component: AddGoods },
            { name: 'ProductList', path: '/productList', component: ProductList },
            { name: 'Statistics', path: '/statistics', component: Statistics },
        ]
    },

    { name: 'Login', path: '/login', component: Login }

]