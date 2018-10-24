"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_service_1 = require("~/app/services/login.service");
// import { NavigationEnd, Router } from "@angular/router";
// import * as app from "tns-core-modules/application";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions, loginService) {
        this.routerExtensions = routerExtensions;
        this.loginService = loginService;
        this.formulaire = { "codeCabinet": "AAA" };
        // Use the component constructor to inject providers.
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    LoginComponent.prototype.submit = function () {
        // Ajouter : [(ngModel)]="formulaire.codeCabinet"
        this.loginService.loginCabinet(this.formulaire)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            alert("Code cabinet incorrect");
            console.log(err);
        });
        // Pour l'instant le bouton valider change de page pour featured
        this.routerExtensions.navigate(["auth"], {
            transition: {
                name: "fade"
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUcvRCw4REFBNEQ7QUFFNUQsMkRBQTJEO0FBQzNELHVEQUF1RDtBQVF2RDtJQUlJLHdCQUFvQixnQkFBaUMsRUFDakMsWUFBeUI7UUFEekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUg3QyxlQUFVLEdBQVMsRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLENBQUE7UUFJcEMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksaURBQWlEO1FBRWpELElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDMUMsU0FBUyxDQUNOLFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUNSLENBQUM7UUFFRixnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpDUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQUt1Qyx5QkFBZ0I7WUFDcEIsNEJBQVk7T0FMcEMsY0FBYyxDQXNDMUI7SUFBRCxxQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCI7XG5cbi8vIGltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbi8vIGltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZvcm11bGFpcmU6IEF1dGggPSB7XCJjb2RlQ2FiaW5ldFwiOlwiQUFBXCJ9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTpMb2dpblNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICAvLyBBam91dGVyIDogWyhuZ01vZGVsKV09XCJmb3JtdWxhaXJlLmNvZGVDYWJpbmV0XCJcblxuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbkNhYmluZXQodGhpcy5mb3JtdWxhaXJlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb2RlIGNhYmluZXQgaW5jb3JyZWN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBQb3VyIGwnaW5zdGFudCBsZSBib3V0b24gdmFsaWRlciBjaGFuZ2UgZGUgcGFnZSBwb3VyIGZlYXR1cmVkXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhdXRoXCJdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIC8vICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgLy8gICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIC8vIH1cbn0iXX0=