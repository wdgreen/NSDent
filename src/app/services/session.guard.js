"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var session_service_1 = require("./session.service");
var router_1 = require("nativescript-angular/router");
var SessionGuard = /** @class */ (function () {
    function SessionGuard(sessionService, routerExtensions) {
        this.sessionService = sessionService;
        this.routerExtensions = routerExtensions;
    }
    SessionGuard.prototype.canActivate = function () {
        if (this.sessionService.testeSession()) {
            this.routerExtensions.navigate(["auth"], {
                transition: {
                    name: "fade"
                }
            });
            console.log("SessionGuard : infos cabinet deja en local");
            return false;
        }
        else {
            console.log("SessionGuard : Nouvel utilisateur");
            return true;
        }
    };
    SessionGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [session_service_1.SessionService,
            router_1.RouterExtensions])
    ], SessionGuard);
    return SessionGuard;
}());
exports.SessionGuard = SessionGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MscURBQW1EO0FBQ25ELHNEQUErRDtBQUcvRDtJQUNJLHNCQUFvQixjQUE4QixFQUM5QixnQkFBaUM7UUFEakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7SUFBSSxDQUFDO0lBRTFELGtDQUFXLEdBQVg7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjthQUNKLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7SUFDTCxDQUFDO0lBakJRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FFMkIsZ0NBQWM7WUFDYix5QkFBZ0I7T0FGNUMsWUFBWSxDQWtCeEI7SUFBRCxtQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2Vzc2lvblNlcnZpY2UgfSBmcm9tICcuL3Nlc3Npb24uc2VydmljZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5zZXNzaW9uU2VydmljZS50ZXN0ZVNlc3Npb24oKSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImF1dGhcIl0sIHtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlc3Npb25HdWFyZCA6IGluZm9zIGNhYmluZXQgZGVqYSBlbiBsb2NhbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Vzc2lvbkd1YXJkIDogTm91dmVsIHV0aWxpc2F0ZXVyXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=