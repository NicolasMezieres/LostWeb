import { Routes } from '@angular/router';
import { Signin } from './pages/signin/signin';
import { Home } from './pages/home/home';
import { UserList } from './pages/user-list/user-list';
import { AnnouncementList } from './pages/announcement-list/announcement-list';
import { Statistic } from './pages/statistic/statistic';
import { Announcement } from './pages/announcement/announcement';

export const routes: Routes = [
  { path: 'signin', component: Signin },
  { path: 'home', component: Home },
  { path: 'user_list', component: UserList },
  { path: 'announcement_list', component: AnnouncementList },
  { path: 'announcement/:id', component: Announcement },
  { path: 'statistic', component: Statistic },
  { path: '**', redirectTo: 'signin', pathMatch: 'full' },
];
