import { Routes } from '@angular/router';
import { Inicio } from './shared/inicio/inicio';
import { Login } from './shared/login/login';
import { Feed } from './shared/feed/feed';
import { Discover } from './shared/discover/discover';
import { Events } from './shared/events/events';
import { Messages } from './shared/messages/messages';
import { Profile } from './shared/profile/profile';
import { Notifications } from './shared/notifications/notifications';
import { Acessibility } from './shared/acessibility/acessibility';
import { Recommendations } from './shared/recommendations/recommendations';


export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'inicio', component: Inicio },
    { path: 'login', component: Login },
    { path: 'feed', component: Feed },
    { path: 'discover', component: Discover },
    { path: 'events', component: Events },
    { path: 'messages', component: Messages },
    { path: 'profile', component: Profile },
    { path: 'notifications', component: Notifications },
    { path: 'acessibility', component: Acessibility },
    { path: 'recommendations', component: Recommendations },
    { path: '**', redirectTo: '' },
];
