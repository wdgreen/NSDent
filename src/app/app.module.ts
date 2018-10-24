
// Framework Modules
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
// Template Modules
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
// Services
import { ConnectiviteService } from "./services/connectivite.service";
import { PatientService } from "./services/patient.service";
import { SessionService } from "./services/session.service";
import { AuthService } from "~/app/services/auth.service";
import { LoginService } from "~/app/services/login.service";
// Guards
import { SessionGuard } from "~/app/services/session.guard";
import { AuthGuard } from "~/app/services/auth.guard";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        ConnectiviteService,
        PatientService,
        SessionService,
        AuthService,
        LoginService,
        SessionGuard,
        AuthGuard
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
