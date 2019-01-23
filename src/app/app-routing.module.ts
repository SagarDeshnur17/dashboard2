import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
const routes: Routes = [

    {
        path: "login",
        component:  LoginComponent
    },

    
    {
        path: "dash",
        component:  DashComponent
    },
    {
        path: "",
        redirectTo: "/login",
        pathMatch: "full"
    }
    ];
    
    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
    