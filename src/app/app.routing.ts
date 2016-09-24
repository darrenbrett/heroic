import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes = [
    { path: '', component: HeroesComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
    { path: 'detail/:id', component: HeroDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
