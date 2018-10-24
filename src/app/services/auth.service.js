"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var router_1 = require("nativescript-angular/router");
var AuthService = /** @class */ (function () {
    function AuthService(http, routerExtensions) {
        this.http = http;
        this.routerExtensions = routerExtensions;
    }
    AuthService.prototype.loginUser = function (formulaire) {
        return this.http.post("http://localhost:3000/user/login", formulaire);
    };
    AuthService.prototype.logoutUser = function () {
        // localStorage.removeItem('token')
        // this._router.navigate(['/login'])
    };
    AuthService.prototype.getToken = function () {
        // return localStorage.getItem('token')
    };
    AuthService.prototype.loggedIn = function () {
        // return !!localStorage.getItem('token')
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.RouterExtensions])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxzREFBK0Q7QUFLL0Q7SUFJSSxxQkFBb0IsSUFBZ0IsRUFDaEIsZ0JBQWtDO1FBRGxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUFJLENBQUM7SUFFM0QsK0JBQVMsR0FBVCxVQUFVLFVBQVU7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFPLGtDQUFrQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksbUNBQW1DO1FBQ25DLG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLHlDQUF5QztJQUM3QyxDQUFDO0lBdEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FLaUIsaUJBQVU7WUFDRSx5QkFBZ0I7T0FMN0MsV0FBVyxDQXVCdkI7SUFBRCxrQkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBBdXRoIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvbW9kZWxzL2F1dGgubW9kZWxlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgYXV0aDogQXV0aDtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gICAgbG9naW5Vc2VyKGZvcm11bGFpcmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEF1dGg+KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXIvbG9naW5cIiwgZm9ybXVsYWlyZSk7XG4gICAgfVxuXG4gICAgbG9nb3V0VXNlcigpIHtcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIC8vIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIGxvZ2dlZEluKCkge1xuICAgICAgICAvLyByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cbn0iXX0=