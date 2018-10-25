"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.serveur = "http://192.168.2.70:3000";
    }
    AuthService.prototype.loginCabinet = function (formulaire) {
        return this.http.post(this.serveur + "/cabinet/cabinet", formulaire);
    };
    AuthService.prototype.loginPatient = function (formulaire) {
        return this.http.post(this.serveur + "/user/login", formulaire);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUdsRDtJQUlJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRnBDLFlBQU8sR0FBRywwQkFBMEIsQ0FBQztJQUVHLENBQUM7SUFFekMsa0NBQVksR0FBWixVQUFhLFVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLElBQUksQ0FBQyxPQUFPLEdBQUcsa0JBQWtCLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxJQUFJLENBQUMsT0FBTyxHQUFHLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLG1DQUFtQztRQUNuQyxvQ0FBb0M7SUFDeEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSx5Q0FBeUM7SUFDN0MsQ0FBQztJQXpCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBS2lCLGlCQUFVO09BSjNCLFdBQVcsQ0EwQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIHNlcnZldXIgPSBcImh0dHA6Ly8xOTIuMTY4LjIuNzA6MzAwMFwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIGxvZ2luQ2FiaW5ldChmb3JtdWxhaXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KHRoaXMuc2VydmV1ciArIFwiL2NhYmluZXQvY2FiaW5ldFwiLCBmb3JtdWxhaXJlKTtcbiAgICB9XG5cbiAgICBsb2dpblBhdGllbnQoZm9ybXVsYWlyZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55Pih0aGlzLnNlcnZldXIgKyBcIi91c2VyL2xvZ2luXCIsIGZvcm11bGFpcmUpO1xuICAgIH1cblxuICAgIGxvZ291dFVzZXIoKSB7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICAgIH1cblxuICAgIGdldFRva2VuKCkge1xuICAgICAgICAvLyByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpIHtcbiAgICAgICAgLy8gcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG59Il19