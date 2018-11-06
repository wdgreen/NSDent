"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// servers Urls 
var settings_1 = require("~/app/services/settings");
// Used for notification system
var globals_1 = require("~/app/services/globals");
// API call requirements
var base64 = require("base-64");
var utf8 = require("utf8");
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
        var str = formulaire.codePatient + ":" + formulaire.motDePasse;
        var bytes = utf8.encode(str);
        var encodedStr = base64.encode(bytes);
        // Define Http Header
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'text/html',
                'Authorization': "Basic " + encodedStr
            })
        };
        // Request API             Url                     /OS                    /Token                           Http Header
        return this.http.get(settings_1.Settings.urlPatients + "/" + globals_1.Globals.appareil.os + "/" + globals_1.Globals.appareil.pushToken + "/", this.httpOptions);
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxnQkFBZ0I7QUFDaEIsb0RBQW1EO0FBQ25ELCtCQUErQjtBQUMvQixrREFBaUQ7QUFDakQsd0JBQXdCO0FBQ3hCLGdDQUFtQztBQUNuQywyQkFBNkI7QUFHN0I7SUFLSSxxQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFekMsY0FBYztJQUNkLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBTSxtQkFBUSxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsZUFBZTtJQUNmLGtDQUFZLEdBQVosVUFBYSxVQUFVO1FBRW5CLElBQUksR0FBRyxHQUFNLFVBQVUsQ0FBQyxXQUFXLFNBQUksVUFBVSxDQUFDLFVBQVksQ0FBQztRQUMvRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDZixPQUFPLEVBQUUsSUFBSSxrQkFBVyxDQUFDO2dCQUNyQixjQUFjLEVBQUUsV0FBVztnQkFDM0IsZUFBZSxFQUFFLFdBQVMsVUFBWTthQUN6QyxDQUFDO1NBQ0wsQ0FBQztRQUNGLHNIQUFzSDtRQUN0SCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsbUJBQVEsQ0FBQyxXQUFXLFNBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFJLGlCQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsTUFBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqSSxDQUFDO0lBNUJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FNaUIsaUJBQVU7T0FMM0IsV0FBVyxDQTZCdkI7SUFBRCxrQkFBQztDQUFBLEFBN0JELElBNkJDO0FBN0JZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbi8vIHNlcnZlcnMgVXJscyBcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NldHRpbmdzXCI7XG4vLyBVc2VkIGZvciBub3RpZmljYXRpb24gc3lzdGVtXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvZ2xvYmFscyc7XG4vLyBBUEkgY2FsbCByZXF1aXJlbWVudHNcbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIGh0dHBBcHBhcmVpbDtcbiAgICBodHRwT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICAvLyBGaXJzdCBMb2dpblxuICAgIGxvZ2luQ2FiaW5ldChmb3JtdWxhaXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFNldHRpbmdzLnVybENhYmluZXRzLCBmb3JtdWxhaXJlKTtcbiAgICB9XG5cbiAgICAvLyBTZWNvbmQgTG9naW5cbiAgICBsb2dpblBhdGllbnQoZm9ybXVsYWlyZSkge1xuXG4gICAgICAgIGxldCBzdHIgPSBgJHtmb3JtdWxhaXJlLmNvZGVQYXRpZW50fToke2Zvcm11bGFpcmUubW90RGVQYXNzZX1gO1xuICAgICAgICBsZXQgYnl0ZXMgPSB1dGY4LmVuY29kZShzdHIpO1xuICAgICAgICBsZXQgZW5jb2RlZFN0ciA9IGJhc2U2NC5lbmNvZGUoYnl0ZXMpO1xuXG4gICAgICAgIC8vIERlZmluZSBIdHRwIEhlYWRlclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHtlbmNvZGVkU3RyfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIC8vIFJlcXVlc3QgQVBJICAgICAgICAgICAgIFVybCAgICAgICAgICAgICAgICAgICAgIC9PUyAgICAgICAgICAgICAgICAgICAgL1Rva2VuICAgICAgICAgICAgICAgICAgICAgICAgICAgSHR0cCBIZWFkZXJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8YW55PihgJHtTZXR0aW5ncy51cmxQYXRpZW50c30vJHtHbG9iYWxzLmFwcGFyZWlsLm9zfS8ke0dsb2JhbHMuYXBwYXJlaWwucHVzaFRva2VufS9gLCB0aGlzLmh0dHBPcHRpb25zKTtcbiAgICB9XG59Il19