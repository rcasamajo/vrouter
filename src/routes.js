import User from './components/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/UserStart.vue';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/user', component: User, children: [
            {path: '', component: UserStart},
            //{path: ':id', component: UserDetail },
            {path: ':id', component: UserDetail, props: true },
            {path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]},
    {path: '/usuari', redirect: '/user'},
    {path: '*', redirect: '/'}
]