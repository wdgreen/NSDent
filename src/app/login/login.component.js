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
        this.codeCabinet = "";
        // Use the component constructor to inject providers.
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    LoginComponent.prototype.submit = function () {
        // Ajouter : [(ngModel)]="formulaire.codeCabinet"
        this.loginService.loginCabinet(this.codeCabinet)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUcvRCw4REFBNEQ7QUFFNUQsMkRBQTJEO0FBQzNELHVEQUF1RDtBQVF2RDtJQUlJLHdCQUFvQixnQkFBaUMsRUFDakMsWUFBeUI7UUFEekIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUg3QyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUliLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNJLGlEQUFpRDtRQUVqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQzNDLFNBQVMsQ0FDTixVQUFBLEdBQUc7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FDUixDQUFDO1FBRUYsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNyQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqQ1EsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FLdUMseUJBQWdCO1lBQ3BCLDRCQUFZO09BTHBDLGNBQWMsQ0FzQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tIFwifi9hcHAvc2VydmljZXMvbW9kZWxzL2F1dGgubW9kZWxlXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvbG9naW4uc2VydmljZVwiO1xuXG4vLyBpbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG4vLyBpbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4tY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjb2RlQ2FiaW5ldCA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGxvZ2luU2VydmljZTpMb2dpblNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICAvLyBBam91dGVyIDogWyhuZ01vZGVsKV09XCJmb3JtdWxhaXJlLmNvZGVDYWJpbmV0XCJcblxuICAgICAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbkNhYmluZXQodGhpcy5jb2RlQ2FiaW5ldClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29kZSBjYWJpbmV0IGluY29ycmVjdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gUG91ciBsJ2luc3RhbnQgbGUgYm91dG9uIHZhbGlkZXIgY2hhbmdlIGRlIHBhZ2UgcG91ciBmZWF0dXJlZFxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYXV0aFwiXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAvLyAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIC8vICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICAvLyB9XG59Il19