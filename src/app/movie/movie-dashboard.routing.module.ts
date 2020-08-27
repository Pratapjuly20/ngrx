import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MovieDashboardComponent } from './movie-dashboard.component';

const routes: Routes = [
    { path: '', component: MovieDashboardComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class MovieDashboardRoutingModule {}