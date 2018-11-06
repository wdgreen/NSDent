import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { CameraComponent } from "./camera.component";

const routes: Routes = [
    { path: "", component: CameraComponent }
];


@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class CameraRoutingModule { }
