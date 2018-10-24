"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_service_1 = require("./session.service");
var router_1 = require("nativescript-angular/router");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(sessionService, routerExtensions) {
        this.sessionService = sessionService;
        this.routerExtensions = routerExtensions;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.sessionService.testeSession()) {
            console.log("AuthGuard : Page autorisée par la garde");
            return true;
        }
        else {
            console.log("AuthGuard : Erreur authentification");
            this.routerExtensions.navigate(["login"], {
                transition: {
                    name: "fade"
                }
            });
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [session_service_1.SessionService,
            router_1.RouterExtensions])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGguZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MscURBQW1EO0FBQ25ELHNEQUErRDtBQUcvRDtJQUNJLG1CQUFvQixjQUE4QixFQUM5QixnQkFBaUM7UUFEakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7SUFBSSxDQUFDO0lBRTFELCtCQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRyxDQUFDLENBQUMsQ0FBQztZQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07aUJBQ2Y7YUFDSixDQUFDLENBQUM7WUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBakJRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTt5Q0FFMkIsZ0NBQWM7WUFDYix5QkFBZ0I7T0FGNUMsU0FBUyxDQWtCckI7SUFBRCxnQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zZXNzaW9uU2VydmljZS50ZXN0ZVNlc3Npb24oKSApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXV0aEd1YXJkIDogUGFnZSBhdXRvcmlzw6llIHBhciBsYSBnYXJkZVwiKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBdXRoR3VhcmQgOiBFcnJldXIgYXV0aGVudGlmaWNhdGlvblwiKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJsb2dpblwiXSwge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==