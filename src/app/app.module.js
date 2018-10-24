"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Framework Modules
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var http_client_1 = require("nativescript-angular/http-client");
// Template Modules
var angular_1 = require("nativescript-ui-sidedrawer/angular");
// Services
var connectivite_service_1 = require("./services/connectivite.service");
var patient_service_1 = require("./services/patient.service");
var session_service_1 = require("./services/session.service");
var auth_service_1 = require("~/app/services/auth.service");
var login_service_1 = require("~/app/services/login.service");
// Guards
var session_guard_1 = require("~/app/services/session.guard");
var auth_guard_1 = require("~/app/services/auth.guard");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule,
                http_client_1.NativeScriptHttpClientModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            providers: [
                connectivite_service_1.ConnectiviteService,
                patient_service_1.PatientService,
                session_service_1.SessionService,
                auth_service_1.AuthService,
                login_service_1.LoginService,
                session_guard_1.SessionGuard,
                auth_guard_1.AuthGuard
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvQkFBb0I7QUFDcEIsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQyxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUNoRixtQkFBbUI7QUFDbkIsOERBQW9GO0FBQ3BGLFdBQVc7QUFDWCx3RUFBc0U7QUFDdEUsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw0REFBMEQ7QUFDMUQsOERBQTREO0FBQzVELFNBQVM7QUFDVCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBNEJ0RDtJQUFBO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBMUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCxxQ0FBZ0I7Z0JBQ2hCLHdDQUFrQjtnQkFDbEIsd0NBQThCO2dCQUM5QiwwQ0FBNEI7YUFDL0I7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7YUFDZjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQ0FBbUI7Z0JBQ25CLGdDQUFjO2dCQUNkLGdDQUFjO2dCQUNkLDBCQUFXO2dCQUNYLDRCQUFZO2dCQUNaLDRCQUFZO2dCQUNaLHNCQUFTO2FBQ1o7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gRnJhbWV3b3JrIE1vZHVsZXNcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG4vLyBUZW1wbGF0ZSBNb2R1bGVzXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuLy8gU2VydmljZXNcbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb25uZWN0aXZpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9wYXRpZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZXMvc2Vzc2lvbi5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG4vLyBHdWFyZHNcbmltcG9ydCB7IFNlc3Npb25HdWFyZCB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9zZXNzaW9uLmd1YXJkXCI7XG5pbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC5ndWFyZFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDb25uZWN0aXZpdGVTZXJ2aWNlLFxuICAgICAgICBQYXRpZW50U2VydmljZSxcbiAgICAgICAgU2Vzc2lvblNlcnZpY2UsXG4gICAgICAgIEF1dGhTZXJ2aWNlLFxuICAgICAgICBMb2dpblNlcnZpY2UsXG4gICAgICAgIFNlc3Npb25HdWFyZCxcbiAgICAgICAgQXV0aEd1YXJkXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==