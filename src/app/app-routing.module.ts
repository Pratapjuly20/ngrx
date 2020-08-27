import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', 
    children: [
        { path: '', redirectTo: 'movies', pathMatch: 'full' },
        { path: 'movies', loadChildren: () => import('./movie/movie.module').then(m => m.MovieModule) }
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {}