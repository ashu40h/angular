import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent},
  {path: 'app-todo', component: TodoComponent},
  {path: 'app-contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent)},
  {path: 'app-founder', loadComponent: () => import('./founder/founder.component').then(m => m.FounderComponent)},
  {path: 'app-bottom', loadComponent: () => import('./bottom/bottom.component').then(m => m.BottomComponent)}
];