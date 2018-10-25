"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginCabinet = function (formulaire) {
        return this.http.post("http://192.168.2.70:3000/cabinet/cabinet", formulaire);
    };
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
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUFrRDtBQUtsRDtJQUVJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxrQ0FBWSxHQUFaLFVBQWEsVUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU0sMENBQTBDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkYsQ0FBQztJQUVELCtCQUFTLEdBQVQsVUFBVSxVQUFVO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTyxrQ0FBa0MsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNoRixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLG1DQUFtQztRQUNuQyxvQ0FBb0M7SUFDeEMsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSx5Q0FBeUM7SUFDN0MsQ0FBQztJQXZCUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBR2lCLGlCQUFVO09BRjNCLFdBQVcsQ0F3QnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJ34vYXBwL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgbG9naW5DYWJpbmV0KGZvcm11bGFpcmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oXCJodHRwOi8vMTkyLjE2OC4yLjcwOjMwMDAvY2FiaW5ldC9jYWJpbmV0XCIsIGZvcm11bGFpcmUpO1xuICAgIH1cblxuICAgIGxvZ2luVXNlcihmb3JtdWxhaXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxBdXRoPihcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91c2VyL2xvZ2luXCIsIGZvcm11bGFpcmUpO1xuICAgIH1cblxuICAgIGxvZ291dFVzZXIoKSB7XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICAgIH1cblxuICAgIGdldFRva2VuKCkge1xuICAgICAgICAvLyByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG5cbiAgICBsb2dnZWRJbigpIHtcbiAgICAgICAgLy8gcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICB9XG59Il19