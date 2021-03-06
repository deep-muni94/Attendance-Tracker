import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ExplainComponent } from './explain/explain.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    ExplainComponent,
    AboutusComponent,
    NotfoundComponent,
    AdminPanelComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
