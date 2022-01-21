import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsolesComponent } from './views/consoles/consoles.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { PlaystationComponent } from './views/playstation/playstation.component';
import { XboxComponent } from './views/xbox/xbox.component';

const routes: Routes = [

  {path: "", component: HomeComponent},
 
  {path: "home", component: HomeComponent},

  {path: "consoles", component: ConsolesComponent},

  {path: "playstation", component: PlaystationComponent},

  {path: "xbox", component: XboxComponent},
  
  {path: "login", component: LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
