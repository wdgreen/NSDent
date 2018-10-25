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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxvQkFBb0I7QUFDcEIsMkRBQXdEO0FBQ3hELGlEQUErQztBQUMvQyxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLGdFQUFnRjtBQUNoRixtQkFBbUI7QUFDbkIsOERBQW9GO0FBQ3BGLFdBQVc7QUFDWCx3RUFBc0U7QUFDdEUsOERBQTREO0FBQzVELDhEQUE0RDtBQUM1RCw0REFBMEQ7QUFDMUQsU0FBUztBQUNULDhEQUE0RDtBQUM1RCx3REFBc0Q7QUEyQnREO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF6QnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFDQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQix3Q0FBOEI7Z0JBQzlCLDBDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBDQUFtQjtnQkFDbkIsZ0NBQWM7Z0JBQ2QsZ0NBQWM7Z0JBQ2QsMEJBQVc7Z0JBQ1gsNEJBQVk7Z0JBQ1osc0JBQVM7YUFDWjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBGcmFtZXdvcmsgTW9kdWxlc1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbi8vIFRlbXBsYXRlIE1vZHVsZXNcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG4vLyBTZXJ2aWNlc1xuaW1wb3J0IHsgQ29ubmVjdGl2aXRlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL2Nvbm5lY3Rpdml0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2VzL3BhdGllbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXNzaW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuLy8gR3VhcmRzXG5pbXBvcnQgeyBTZXNzaW9uR3VhcmQgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvc2Vzc2lvbi5ndWFyZFwiO1xuaW1wb3J0IHsgQXV0aEd1YXJkIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguZ3VhcmRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ29ubmVjdGl2aXRlU2VydmljZSxcbiAgICAgICAgUGF0aWVudFNlcnZpY2UsXG4gICAgICAgIFNlc3Npb25TZXJ2aWNlLFxuICAgICAgICBBdXRoU2VydmljZSxcbiAgICAgICAgU2Vzc2lvbkd1YXJkLFxuICAgICAgICBBdXRoR3VhcmRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19