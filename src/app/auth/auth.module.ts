import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth.component";

import { NativeScriptFormsModule } from "nativescript-angular/forms";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        AuthRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AuthComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        
    ]
})
export class AuthModule { }
