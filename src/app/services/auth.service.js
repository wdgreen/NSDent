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
        console.log("Caractéristiques de l'appareil : " + JSON.stringify(globals_1.Globals.appareil));
        // Request API
        return this.http.post(settings_1.Settings.urlPatients, globals_1.Globals.appareil, this.httpOptions);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxnQkFBZ0I7QUFDaEIsb0RBQW1EO0FBQ25ELCtCQUErQjtBQUMvQixrREFBaUQ7QUFHakQ7SUFRSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsY0FBYztJQUNkLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZUFBZTtJQUNmLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBRW5CLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2YsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztnQkFDckIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsVUFBVSxFQUFFLEtBQUcsVUFBVSxDQUFDLFdBQWE7Z0JBQ3ZDLFVBQVUsRUFBRSxLQUFHLFVBQVUsQ0FBQyxVQUFZO2FBQ3pDLENBQUM7U0FDTCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNwRixjQUFjO1FBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLGlCQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBN0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FTaUIsaUJBQVU7T0FSM0IsV0FBVyxDQTBDdkI7SUFBRCxrQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbi8vIHNlcnZlcnMgVXJscyBcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NldHRpbmdzXCI7XG4vLyBVc2VkIGZvciBub3RpZmljYXRpb24gc3lzdGVtXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvZ2xvYmFscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBodHRwQm9keToge1xuICAgICAgICB0b2tlbjogc3RyaW5nLFxuICAgICAgICBvczogc3RyaW5nXG4gICAgfVxuICAgIGh0dHBPcHRpb25zO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICAgIC8vIEZpcnN0IExvZ2luXG4gICAgbG9naW5DYWJpbmV0KGZvcm11bGFpcmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oU2V0dGluZ3MudXJsQ2FiaW5ldHMsIGZvcm11bGFpcmUpO1xuICAgIH1cblxuICAgIC8vIFNlY29uZCBMb2dpblxuICAgIGxvZ2luUGF0aWVudChmb3JtdWxhaXJlKSB7XG5cbiAgICAgICAgLy8gRGVmaW5lIEh0dHAgSGVhZGVyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogYCR7Zm9ybXVsYWlyZS5jb2RlUGF0aWVudH1gLFxuICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IGAke2Zvcm11bGFpcmUubW90RGVQYXNzZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNhcmFjdMOpcmlzdGlxdWVzIGRlIGwnYXBwYXJlaWwgOiBcIiArIEpTT04uc3RyaW5naWZ5KEdsb2JhbHMuYXBwYXJlaWwpKTtcbiAgICAgICAgLy8gUmVxdWVzdCBBUElcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PGFueT4oU2V0dGluZ3MudXJsUGF0aWVudHMsIEdsb2JhbHMuYXBwYXJlaWwsIHRoaXMuaHR0cE9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8vIGxvZ291dFVzZXIoKSB7XG4gICAgLy8gICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgLy8gICAgIC8vIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKVxuICAgIC8vIH1cbiAgICAvLyBnZXRUb2tlbigpIHtcbiAgICAvLyAgICAgLy8gcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgLy8gfVxuXG4gICAgLy8gbG9nZ2VkSW4oKSB7XG4gICAgLy8gICAgIC8vIHJldHVybiAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgLy8gfVxufSJdfQ==