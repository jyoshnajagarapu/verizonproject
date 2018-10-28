import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { EmpDataComponent } from './component/emp-data/emp-data.component';
import { RequestsComponent } from './component/requests/requests.component';
import { SkillsComponent } from './component/skills/skills.component';
import { SingleDetailComponent } from './component/single-detail/single-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'Empdata', component: EmpDataComponent},
  { path: 'home', component: HomeComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'detail/:id', component: SingleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
