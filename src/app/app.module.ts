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
import { AuthService } from "~/app/services/auth.service";
import { DataService } from "~/app/services/data.service";
// Guards
import { SessionGuard } from "~/app/services/session.guard";
import { ModalViewComponent } from './modal-view/modal-view.component';


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
        AppComponent,
        ModalViewComponent       
    ],
    providers: [
        ConnectiviteService,
        PatientService,
        AuthService,
        DataService,
        SessionGuard
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    entryComponents: [ModalViewComponent]
})
export class AppModule { }
