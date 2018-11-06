import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { CameraRoutingModule } from './camera-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { CameraComponent } from './camera.component';

@NgModule({
  imports: [
    CameraRoutingModule,
    NativeScriptCommonModule
  ],
  declarations: [CameraComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class CameraModule { }
