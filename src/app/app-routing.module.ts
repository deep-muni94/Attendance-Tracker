import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from "./login/login.component";
import { RegisterComponent} from "./register/register.component";
import { ExplainComponent} from "./explain/explain.component";
import { AboutusComponent} from "./aboutus/aboutus.component";
import { NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes = [
  { path: "login", component: LoginComponent},
  { path: "register", component: RegisterComponent},
  { path: "explain", component: ExplainComponent},
  { path: "aboutus", component: AboutusComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
