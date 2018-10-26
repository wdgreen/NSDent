"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var settings_1 = require("~/app/services/settings");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginCabinet = function (formulaire) {
        return this.http.post(settings_1.Settings.urlCabinets, formulaire);
    };
    AuthService.prototype.loginPatient = function (formulaire) {
        // return this.http.post<any>(this.serveur + "/user/login", formulaire);
        return this.http.post(settings_1.Settings.urlPatients, formulaire);
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
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUVsRCxvREFBbUQ7QUFHbkQ7SUFFSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsa0NBQVksR0FBWixVQUFhLFVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsVUFBVTtRQUNuQix3RUFBd0U7UUFDeEUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0ksbUNBQW1DO1FBQ25DLG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsOEJBQVEsR0FBUjtRQUNJLHlDQUF5QztJQUM3QyxDQUFDO0lBeEJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7T0FGM0IsV0FBVyxDQXlCdkI7SUFBRCxrQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIGxvZ2luQ2FiaW5ldChmb3JtdWxhaXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFNldHRpbmdzLnVybENhYmluZXRzLCBmb3JtdWxhaXJlKTtcbiAgICB9XG5cbiAgICBsb2dpblBhdGllbnQoZm9ybXVsYWlyZSkge1xuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZldXIgKyBcIi91c2VyL2xvZ2luXCIsIGZvcm11bGFpcmUpO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihTZXR0aW5ncy51cmxQYXRpZW50cywgZm9ybXVsYWlyZSk7XG4gICAgfVxuXG4gICAgbG9nb3V0VXNlcigpIHtcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgfVxuXG4gICAgZ2V0VG9rZW4oKSB7XG4gICAgICAgIC8vIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cblxuICAgIGxvZ2dlZEluKCkge1xuICAgICAgICAvLyByZXR1cm4gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIH1cbn0iXX0=