import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule }    from '@angular/http';
import { FormsModule }    from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { EmpDataComponent } from './component/emp-data/emp-data.component';
import { RequestsComponent } from './component/requests/requests.component';
import { SkillsComponent } from './component/skills/skills.component';
import { SingleDetailComponent } from './component/single-detail/single-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpDataComponent,
    RequestsComponent,
    SkillsComponent,
    SingleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
