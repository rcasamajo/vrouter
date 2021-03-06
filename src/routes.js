import User from './components/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/UserStart.vue';
import AddUser from './components/AddUser.vue';
import UserDetail from './components/UserDetail.vue';
import UserEdit from './components/UserEdit.vue';
import Favs from './components/Favs.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/favs', component: Favs},
    {path: '/user', component: User, children: [
            {path: '', component: UserStart},
            {path: 'add', component: AddUser},
            {path: ':id', component: UserDetail, props: true },
            {path: ':id/edit', component: UserEdit, props: true, name: 'userEdit' }
        ]},
    {path: '/usuari', redirect: '/user'},
    {path: '*', redirect: '/'}
]