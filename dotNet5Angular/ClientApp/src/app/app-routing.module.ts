import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Здесь прописывается путь до компонентов, пример:
  /*
   * { path: 'dashboard', component: DashboardComponent },
   * { path: 'detail/:id', component: HeroDetailComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
