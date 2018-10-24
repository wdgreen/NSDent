"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_service_1 = require("~/app/services/login.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions, loginService) {
        this.routerExtensions = routerExtensions;
        this.loginService = loginService;
        this.formulaire = { "codeCabinet": "" };
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.loginService.loginCabinet(this.formulaire)
            .subscribe(function (res) {
            console.log("Le code cabinet est valide est la reponse est : " + res);
            _this.routerExtensions.navigate(["auth"], {
                transition: {
                    name: "fade"
                }
            });
        }, function (err) {
            console.log(err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUcvRCw4REFBNEQ7QUFRNUQ7SUFJSSx3QkFBb0IsZ0JBQWlDLEVBQ2pDLFlBQXlCO1FBRHpCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFIN0MsZUFBVSxHQUFTLEVBQUMsYUFBYSxFQUFDLEVBQUUsRUFBQyxDQUFDO0lBSXRDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBb0JDO1FBbkJHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDMUMsU0FBUyxDQUNOLFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELEdBQUcsR0FBRyxDQUFDLENBQUM7WUFFdEUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07aUJBQ2Y7YUFDSixDQUFDLENBQUM7UUFDUCxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ1IsQ0FBQztJQUtOLENBQUM7SUE1QlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FLdUMseUJBQWdCO1lBQ3BCLDRCQUFZO09BTHBDLGNBQWMsQ0FpQzFCO0lBQUQscUJBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZVwiO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4tY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG5cbiAgICBmb3JtdWxhaXJlOiBBdXRoID0ge1wiY29kZUNhYmluZXRcIjpcIlwifTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgbG9naW5TZXJ2aWNlOkxvZ2luU2VydmljZSkge1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dpblNlcnZpY2UubG9naW5DYWJpbmV0KHRoaXMuZm9ybXVsYWlyZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZSBjb2RlIGNhYmluZXQgZXN0IHZhbGlkZSBlc3QgbGEgcmVwb25zZSBlc3QgOiBcIiArIHJlcyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImF1dGhcIl0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICApO1xuXG4gICAgICAgIFxuXG4gICAgICAgIFxuICAgIH1cbiAgICAvLyBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAvLyAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIC8vICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICAvLyB9XG59Il19