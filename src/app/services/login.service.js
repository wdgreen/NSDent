"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("nativescript-angular/router");
var LoginService = /** @class */ (function () {
    function LoginService(http, routerExtensions) {
        this.http = http;
        this.routerExtensions = routerExtensions;
    }
    LoginService.prototype.loginCabinet = function (formulaire) {
        return this.http.post("http://192.168.2.70:3000/cabinet/cabinet", formulaire);
    };
    LoginService.prototype.loginUser = function (formulaire) {
        return this.http.post("http://localhost:3000/user/login", formulaire);
    };
    LoginService.prototype.logoutUser = function () {
        // localStorage.removeItem('token')
        // this._router.navigate(['/login'])
    };
    LoginService.prototype.getToken = function () {
        // return localStorage.getItem('token')
    };
    LoginService.prototype.loggedIn = function () {
        // return !!localStorage.getItem('token')
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.RouterExtensions])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBQy9ELHNEQUErRDtBQUsvRDtJQUVJLHNCQUFvQixJQUFnQixFQUNoQixnQkFBa0M7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxtQ0FBWSxHQUFaLFVBQWEsVUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sMENBQTBDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxVQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxrQ0FBa0MsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsaUNBQVUsR0FBVjtRQUNJLG1DQUFtQztRQUNuQyxvQ0FBb0M7SUFDeEMsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSx5Q0FBeUM7SUFDN0MsQ0FBQztJQXhCUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO1lBQ0UseUJBQWdCO09BSDdDLFlBQVksQ0F5QnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvbW9kZWxzL2F1dGgubW9kZWxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIGxvZ2luQ2FiaW5ldChmb3JtdWxhaXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFwiaHR0cDovLzE5Mi4xNjguMi43MDozMDAwL2NhYmluZXQvY2FiaW5ldFwiLCBmb3JtdWxhaXJlKTtcbiAgICB9XG5cbiAgICBsb2dpblVzZXIoZm9ybXVsYWlyZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QXV0aD4oXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlci9sb2dpblwiLCBmb3JtdWxhaXJlKTtcbiAgICB9XG5cbiAgICBsb2dvdXRVc2VyKCkge1xuICAgICAgICAvLyBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgICAgICAvLyB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSlcbiAgICB9XG5cbiAgICBnZXRUb2tlbigpIHtcbiAgICAgICAgLy8gcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxuXG4gICAgbG9nZ2VkSW4oKSB7XG4gICAgICAgIC8vIHJldHVybiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgfVxufSJdfQ==