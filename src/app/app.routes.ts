import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { FirtstimeComponent } from './firtstime/firtstime.component';

export const routes: Routes = [
    {path: '', component: StartComponent},
    {path: 'login', component: LoginComponent},   
    {path: 'create', component: CreateComponent},
    {path: 'firtstime', component: FirtstimeComponent}
];
