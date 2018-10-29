"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var data_service_1 = require("~/app/services/data.service");
var globals_1 = require("../services/globals");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions, authService, dataService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        this.dataService = dataService;
        this.formulaire = { "codeCabinet": "" };
        this.chargement = globals_1.Globals.chargement;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.chargement = false;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.chargement = true;
        globals_1.Globals.chargement = this.chargement;
        this.authService.loginCabinet(this.formulaire)
            .subscribe(function (res) {
            if (res != "") {
                console.log("Bon code cabinet");
                // Write infos in local file
                _this.dataService.ecritInfos("Orthalis", "cabinet", res);
                // Store them in Globals
                _this.dataService.globaliseInfos("Orthalis", "cabinet");
                // Redirect to user authentifcation page
                _this.routerExtensions.navigate(["auth"], {
                    clearHistory: true,
                    transition: {
                        name: "fade"
                    }
                });
            }
            else {
                console.log("Mauvais code cabinet.");
                alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");
                _this.chargement = false;
            }
        }, function (err) {
            console.log("Erreur serveur.");
            alert("Erreur serveur");
            _this.chargement = false;
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            auth_service_1.AuthService,
            data_service_1.DataService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsNERBQTBEO0FBQzFELCtDQUE4QztBQU85QztJQUtJLHdCQUFvQixnQkFBaUMsRUFDakMsV0FBdUIsRUFDdkIsV0FBdUI7UUFGdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUozQyxlQUFVLEdBQVUsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFDLENBQUM7UUFLbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQUEsaUJBb0NDO1FBbkNHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN6QyxTQUFTLENBQ04sVUFBQSxHQUFHO1lBQ0MsRUFBRSxDQUFBLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFBLENBQUM7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNoQyw0QkFBNEI7Z0JBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFFLENBQUM7Z0JBQ3pELHdCQUF3QjtnQkFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2RCx3Q0FBd0M7Z0JBQ3hDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDckMsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLFVBQVUsRUFBRTt3QkFDUixJQUFJLEVBQUUsTUFBTTtxQkFDZjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO2dCQUNwQyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFFM0UsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztRQUdMLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDOUIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUE7SUFDVCxDQUFDO0lBbERRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBTXVDLHlCQUFnQjtZQUNyQiwwQkFBVztZQUNYLDBCQUFXO09BUGxDLGNBQWMsQ0FtRDFCO0lBQUQscUJBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2xvYmFsc1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4tY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjaGFyZ2VtZW50OiBib29sZWFuO1xuICAgIGZvcm11bGFpcmU6IExvZ2luID0ge1wiY29kZUNhYmluZXRcIjpcIlwifTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTpEYXRhU2VydmljZSkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IHRydWU7XG4gICAgICAgIEdsb2JhbHMuY2hhcmdlbWVudCA9IHRoaXMuY2hhcmdlbWVudDtcblxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luQ2FiaW5ldCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm9uIGNvZGUgY2FiaW5ldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdyaXRlIGluZm9zIGluIGxvY2FsIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZWNyaXRJbmZvcyhcIk9ydGhhbGlzXCIsIFwiY2FiaW5ldFwiLCByZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZW0gaW4gR2xvYmFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nbG9iYWxpc2VJbmZvcyhcIk9ydGhhbGlzXCIsIFwiY2FiaW5ldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIHVzZXIgYXV0aGVudGlmY2F0aW9uIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhdXRoXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1dmFpcyBjb2RlIGNhYmluZXQuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkF1Y3VuIGNvZGUgY2FiaW5ldCBjb3JyZXNwb25kYW50LCB2ZXVpbGxleiBlbnRyZXIgdW4gY29kZSB2YWxpZGUuXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgc2VydmV1ci5cIilcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgc2VydmV1clwiKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxufSJdfQ==