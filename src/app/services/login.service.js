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
        return this.http.post("http://localhost:3000/cabinet/cabinet", formulaire);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.RouterExtensions])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBQy9ELHNEQUErRDtBQUsvRDtJQUVJLHNCQUFvQixJQUFnQixFQUNoQixnQkFBa0M7UUFEbEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQztJQUUzRCxtQ0FBWSxHQUFaLFVBQWEsVUFBVTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQU8sdUNBQXVDLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQVBRLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTt5Q0FHaUIsaUJBQVU7WUFDRSx5QkFBZ0I7T0FIN0MsWUFBWSxDQVF4QjtJQUFELG1CQUFDO0NBQUEsQUFSRCxJQVFDO0FBUlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gJ34vYXBwL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgICBsb2dpbkNhYmluZXQoZm9ybXVsYWlyZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8QXV0aD4oXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvY2FiaW5ldC9jYWJpbmV0XCIsIGZvcm11bGFpcmUpO1xuICAgIH1cbn0iXX0=