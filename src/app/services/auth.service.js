"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// servers Urls 
var settings_1 = require("~/app/services/settings");
// Used for notification system
var globals_1 = require("~/app/services/globals");
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // First Login
    AuthService.prototype.loginCabinet = function (formulaire) {
        return this.http.post(settings_1.Settings.urlCabinets, formulaire);
    };
    // Second Login
    AuthService.prototype.loginPatient = function (formulaire) {
        // Define Http Header
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'username': "" + formulaire.codePatient,
                'password': "" + formulaire.motDePasse
            })
        };
        // Request API             Url                     /OS                    /Token                Header: Username & Password
        return this.http.get(settings_1.Settings.urlPatients + "/" + globals_1.Globals.appareil.os + "/" + globals_1.Globals.appareil.pushToken + "/", this.httpOptions);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxnQkFBZ0I7QUFDaEIsb0RBQW1EO0FBQ25ELCtCQUErQjtBQUMvQixrREFBaUQ7QUFHakQ7SUFLSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsY0FBYztJQUNkLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZUFBZTtJQUNmLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBQ25CLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2YsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztnQkFDckIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsVUFBVSxFQUFFLEtBQUcsVUFBVSxDQUFDLFdBQWE7Z0JBQ3ZDLFVBQVUsRUFBRSxLQUFHLFVBQVUsQ0FBQyxVQUFZO2FBQ3pDLENBQUM7U0FDTCxDQUFDO1FBQ0YsMkhBQTJIO1FBQzNILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxtQkFBUSxDQUFDLFdBQVcsU0FBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxNQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUF4QlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU1pQixpQkFBVTtPQUwzQixXQUFXLENBcUN2QjtJQUFELGtCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuLy8gc2VydmVycyBVcmxzIFxuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvc2V0dGluZ3NcIjtcbi8vIFVzZWQgZm9yIG5vdGlmaWNhdGlvbiBzeXN0ZW1cbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tICd+L2FwcC9zZXJ2aWNlcy9nbG9iYWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIGh0dHBBcHBhcmVpbDtcbiAgICBodHRwT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICAvLyBGaXJzdCBMb2dpblxuICAgIGxvZ2luQ2FiaW5ldChmb3JtdWxhaXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFNldHRpbmdzLnVybENhYmluZXRzLCBmb3JtdWxhaXJlKTtcbiAgICB9XG5cbiAgICAvLyBTZWNvbmQgTG9naW5cbiAgICBsb2dpblBhdGllbnQoZm9ybXVsYWlyZSkge1xuICAgICAgICAvLyBEZWZpbmUgSHR0cCBIZWFkZXJcbiAgICAgICAgdGhpcy5odHRwT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAndXNlcm5hbWUnOiBgJHtmb3JtdWxhaXJlLmNvZGVQYXRpZW50fWAsXG4gICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogYCR7Zm9ybXVsYWlyZS5tb3REZVBhc3NlfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIC8vIFJlcXVlc3QgQVBJICAgICAgICAgICAgIFVybCAgICAgICAgICAgICAgICAgICAgIC9PUyAgICAgICAgICAgICAgICAgICAgL1Rva2VuICAgICAgICAgICAgICAgIEhlYWRlcjogVXNlcm5hbWUgJiBQYXNzd29yZFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGAke1NldHRpbmdzLnVybFBhdGllbnRzfS8ke0dsb2JhbHMuYXBwYXJlaWwub3N9LyR7R2xvYmFscy5hcHBhcmVpbC5wdXNoVG9rZW59L2AsIHRoaXMuaHR0cE9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGxvZ291dFVzZXIoKSB7XG4gICAgLy8gICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgLy8gICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICAgIC8vIH1cbiAgICAvLyBnZXRUb2tlbigpIHtcbiAgICAvLyAgICAgLy8gcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgLy8gfVxuXG4gICAgLy8gbG9nZ2VkSW4oKSB7XG4gICAgLy8gICAgIC8vIHJldHVybiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgLy8gfVxufSJdfQ==