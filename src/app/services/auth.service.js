"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// servers Urls 
var settings_1 = require("~/app/services/settings");
// Used for notification system
var globals_1 = require("~/app/services/globals");
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
        // console.log(this.http.get<any>(`${Settings.urlPatients}/${Globals.appareil.os}/${Globals.appareil.pushToken}`));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCxnQkFBZ0I7QUFDaEIsb0RBQW1EO0FBQ25ELCtCQUErQjtBQUMvQixrREFBaUQ7QUFFakQsZ0NBQW1DO0FBQ25DLDJCQUE2QjtBQUc3QjtJQUtJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUV6QyxjQUFjO0lBQ2Qsa0NBQVksR0FBWixVQUFhLFVBQVU7UUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFNLG1CQUFRLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxlQUFlO0lBQ2Ysa0NBQVksR0FBWixVQUFhLFVBQVU7UUFFbkIsSUFBSSxHQUFHLEdBQU0sVUFBVSxDQUFDLFdBQVcsU0FBSSxVQUFVLENBQUMsVUFBWSxDQUFDO1FBQy9ELElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxxQkFBcUI7UUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNmLE9BQU8sRUFBRSxJQUFJLGtCQUFXLENBQUM7Z0JBQ3JCLGNBQWMsRUFBRSxXQUFXO2dCQUMzQixlQUFlLEVBQUUsV0FBUyxVQUFZO2FBQ3pDLENBQUM7U0FDTCxDQUFDO1FBQ0YsbUhBQW1IO1FBQ25ILDJIQUEySDtRQUMzSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQVMsbUJBQVEsQ0FBQyxXQUFXLFNBQUksaUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFJLGlCQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsTUFBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqSSxDQUFDO0lBN0JRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FNaUIsaUJBQVU7T0FMM0IsV0FBVyxDQTBDdkI7SUFBRCxrQkFBQztDQUFBLEFBMUNELElBMENDO0FBMUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbi8vIHNlcnZlcnMgVXJscyBcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL3NldHRpbmdzXCI7XG4vLyBVc2VkIGZvciBub3RpZmljYXRpb24gc3lzdGVtXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSAnfi9hcHAvc2VydmljZXMvZ2xvYmFscyc7XG5cbmltcG9ydCAqIGFzICBiYXNlNjQgZnJvbSBcImJhc2UtNjRcIjtcbmltcG9ydCAqIGFzIHV0ZjggZnJvbSBcInV0ZjhcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcblxuICAgIGh0dHBBcHBhcmVpbDtcbiAgICBodHRwT3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG5cbiAgICAvLyBGaXJzdCBMb2dpblxuICAgIGxvZ2luQ2FiaW5ldChmb3JtdWxhaXJlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxhbnk+KFNldHRpbmdzLnVybENhYmluZXRzLCBmb3JtdWxhaXJlKTtcbiAgICB9XG5cbiAgICAvLyBTZWNvbmQgTG9naW5cbiAgICBsb2dpblBhdGllbnQoZm9ybXVsYWlyZSkge1xuXG4gICAgICAgIGxldCBzdHIgPSBgJHtmb3JtdWxhaXJlLmNvZGVQYXRpZW50fToke2Zvcm11bGFpcmUubW90RGVQYXNzZX1gO1xuICAgICAgICBsZXQgYnl0ZXMgPSB1dGY4LmVuY29kZShzdHIpO1xuICAgICAgICBsZXQgZW5jb2RlZFN0ciA9IGJhc2U2NC5lbmNvZGUoYnl0ZXMpO1xuXG4gICAgICAgIC8vIERlZmluZSBIdHRwIEhlYWRlclxuICAgICAgICB0aGlzLmh0dHBPcHRpb25zID0ge1xuICAgICAgICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvaHRtbCcsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmFzaWMgJHtlbmNvZGVkU3RyfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaHR0cC5nZXQ8YW55PihgJHtTZXR0aW5ncy51cmxQYXRpZW50c30vJHtHbG9iYWxzLmFwcGFyZWlsLm9zfS8ke0dsb2JhbHMuYXBwYXJlaWwucHVzaFRva2VufWApKTtcbiAgICAgICAgLy8gUmVxdWVzdCBBUEkgICAgICAgICAgICAgVXJsICAgICAgICAgICAgICAgICAgICAgL09TICAgICAgICAgICAgICAgICAgICAvVG9rZW4gICAgICAgICAgICAgICAgSGVhZGVyOiBVc2VybmFtZSAmIFBhc3N3b3JkXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PGFueT4oYCR7U2V0dGluZ3MudXJsUGF0aWVudHN9LyR7R2xvYmFscy5hcHBhcmVpbC5vc30vJHtHbG9iYWxzLmFwcGFyZWlsLnB1c2hUb2tlbn0vYCwgdGhpcy5odHRwT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gbG9nb3V0VXNlcigpIHtcbiAgICAvLyAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICAvLyAgICAgLy8gdGhpcy5fcm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pXG4gICAgLy8gfVxuICAgIC8vIGdldFRva2VuKCkge1xuICAgIC8vICAgICAvLyByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICAvLyB9XG5cbiAgICAvLyBsb2dnZWRJbigpIHtcbiAgICAvLyAgICAgLy8gcmV0dXJuICEhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICAvLyB9XG59Il19