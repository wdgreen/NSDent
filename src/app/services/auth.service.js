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
        console.log(this.http.get(settings_1.Settings.urlPatients + "/" + globals_1.Globals.appareil.os + "/" + globals_1.Globals.appareil.pushToken));
        // Request API             Url                     /OS                    /Token                Header: Username & Password
        return this.http.get(settings_1.Settings.urlPatients + "/" + globals_1.Globals.appareil.os + "/1234/", this.httpOptions);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxnQkFBZ0I7QUFDaEIsb0RBQW1EO0FBQ25ELCtCQUErQjtBQUMvQixrREFBaUQ7QUFHakQ7SUFLSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsY0FBYztJQUNkLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZUFBZTtJQUNmLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBQ25CLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHO1lBQ2YsT0FBTyxFQUFFLElBQUksa0JBQVcsQ0FBQztnQkFDckIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsVUFBVSxFQUFFLEtBQUcsVUFBVSxDQUFDLFdBQWE7Z0JBQ3ZDLFVBQVUsRUFBRSxLQUFHLFVBQVUsQ0FBQyxVQUFZO2FBQ3pDLENBQUM7U0FDTCxDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBUyxtQkFBUSxDQUFDLFdBQVcsU0FBSSxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLFNBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsU0FBVyxDQUFDLENBQUMsQ0FBQztRQUNoSCwySEFBMkg7UUFDM0gsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFTLG1CQUFRLENBQUMsV0FBVyxTQUFJLGlCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsV0FBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4RyxDQUFDO0lBekJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FNaUIsaUJBQVU7T0FMM0IsV0FBVyxDQXNDdkI7SUFBRCxrQkFBQztDQUFBLEFBdENELElBc0NDO0FBdENZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbi8vIHNlcnZlcnMgVXJscyBcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NldHRpbmdzXCI7XG4vLyBVc2VkIGZvciBub3RpZmljYXRpb24gc3lzdGVtXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvZ2xvYmFscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XG5cbiAgICBodHRwQXBwYXJlaWw7XG4gICAgaHR0cE9wdGlvbnM7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxuXG4gICAgLy8gRmlyc3QgTG9naW5cbiAgICBsb2dpbkNhYmluZXQoZm9ybXVsYWlyZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8YW55PihTZXR0aW5ncy51cmxDYWJpbmV0cywgZm9ybXVsYWlyZSk7XG4gICAgfVxuXG4gICAgLy8gU2Vjb25kIExvZ2luXG4gICAgbG9naW5QYXRpZW50KGZvcm11bGFpcmUpIHtcbiAgICAgICAgLy8gRGVmaW5lIEh0dHAgSGVhZGVyXG4gICAgICAgIHRoaXMuaHR0cE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogYCR7Zm9ybXVsYWlyZS5jb2RlUGF0aWVudH1gLFxuICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IGAke2Zvcm11bGFpcmUubW90RGVQYXNzZX1gXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmh0dHAuZ2V0PGFueT4oYCR7U2V0dGluZ3MudXJsUGF0aWVudHN9LyR7R2xvYmFscy5hcHBhcmVpbC5vc30vJHtHbG9iYWxzLmFwcGFyZWlsLnB1c2hUb2tlbn1gKSk7XG4gICAgICAgIC8vIFJlcXVlc3QgQVBJICAgICAgICAgICAgIFVybCAgICAgICAgICAgICAgICAgICAgIC9PUyAgICAgICAgICAgICAgICAgICAgL1Rva2VuICAgICAgICAgICAgICAgIEhlYWRlcjogVXNlcm5hbWUgJiBQYXNzd29yZFxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxhbnk+KGAke1NldHRpbmdzLnVybFBhdGllbnRzfS8ke0dsb2JhbHMuYXBwYXJlaWwub3N9LzEyMzQvYCwgdGhpcy5odHRwT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gbG9nb3V0VXNlcigpIHtcbiAgICAvLyAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAvLyAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgLy8gfVxuICAgIC8vIGdldFRva2VuKCkge1xuICAgIC8vICAgICAvLyByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICAvLyB9XG5cbiAgICAvLyBsb2dnZWRJbigpIHtcbiAgICAvLyAgICAgLy8gcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICAvLyB9XG59Il19