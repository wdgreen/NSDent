"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var data_service_1 = require("~/app/services/data.service");
var SessionGuard = /** @class */ (function () {
    function SessionGuard(dataService, routerExtensions) {
        this.dataService = dataService;
        this.routerExtensions = routerExtensions;
    }
    SessionGuard.prototype.canActivate = function () {
        if (this.dataService.testeInfos("Orthalis", "cabinet.json")) {
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
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.RouterExtensions])
    ], SessionGuard);
    return SessionGuard;
}());
exports.SessionGuard = SessionGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0Msc0RBQStEO0FBQy9ELDREQUEwRDtBQUcxRDtJQUNJLHNCQUFvQixXQUF3QixFQUN4QixnQkFBaUM7UUFEakMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUFJLENBQUM7SUFFMUQsa0NBQVcsR0FBWDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxjQUFjLENBQUUsQ0FBQyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxVQUFVLEVBQUU7b0JBQ1IsSUFBSSxFQUFFLE1BQU07aUJBQ2Y7YUFDSixDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7WUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO0lBQ0wsQ0FBQztJQWpCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBRXdCLDBCQUFXO1lBQ1AseUJBQWdCO09BRjVDLFlBQVksQ0FrQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICd+L2FwcC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIGNhbkFjdGl2YXRlKCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5kYXRhU2VydmljZS50ZXN0ZUluZm9zKFwiT3J0aGFsaXNcIiwgXCJjYWJpbmV0Lmpzb25cIikgKSB7XG4gICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYXV0aFwiXSwge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2Vzc2lvbkd1YXJkIDogaW5mb3MgY2FiaW5ldCBkZWphIGVuIGxvY2FsXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXNzaW9uR3VhcmQgOiBOb3V2ZWwgdXRpbGlzYXRldXJcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==