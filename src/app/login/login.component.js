"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var data_service_1 = require("~/app/services/data.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions, authService, dataService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        this.dataService = dataService;
        this.formulaire = { "codeCabinet": "" };
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
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
                    transition: {
                        name: "fade"
                    }
                });
            }
            else {
                console.log("Mauvais code cabinet.");
                alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");
            }
        }, function (err) {
            console.log("Erreur serveur.");
            alert("Erreur serveur");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsNERBQTBEO0FBUTFEO0lBSUksd0JBQW9CLGdCQUFpQyxFQUNqQyxXQUF1QixFQUN2QixXQUF1QjtRQUZ2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBSjNDLGVBQVUsR0FBVSxFQUFDLGFBQWEsRUFBQyxFQUFFLEVBQUMsQ0FBQztJQUt2QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQTBCQztRQXpCRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3pDLFNBQVMsQ0FDTixVQUFBLEdBQUc7WUFDQyxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ2hDLDRCQUE0QjtnQkFDNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUUsQ0FBQztnQkFDekQsd0JBQXdCO2dCQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELHdDQUF3QztnQkFDeEMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLE1BQU07cUJBQ2Y7aUJBQ0osQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtnQkFDcEMsS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7WUFDL0UsQ0FBQztRQUNMLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDOUIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUE7SUFDVCxDQUFDO0lBbkNRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBS3VDLHlCQUFnQjtZQUNyQiwwQkFBVztZQUNYLDBCQUFXO09BTmxDLGNBQWMsQ0FvQzFCO0lBQUQscUJBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgZm9ybXVsYWlyZTogTG9naW4gPSB7XCJjb2RlQ2FiaW5ldFwiOlwiXCJ9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOlJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOkRhdGFTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luQ2FiaW5ldCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm9uIGNvZGUgY2FiaW5ldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdyaXRlIGluZm9zIGluIGxvY2FsIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZWNyaXRJbmZvcyhcIk9ydGhhbGlzXCIsIFwiY2FiaW5ldFwiLCByZXMgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZW0gaW4gR2xvYmFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nbG9iYWxpc2VJbmZvcyhcIk9ydGhhbGlzXCIsIFwiY2FiaW5ldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIHVzZXIgYXV0aGVudGlmY2F0aW9uIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhdXRoXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXV2YWlzIGNvZGUgY2FiaW5ldC5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiQXVjdW4gY29kZSBjYWJpbmV0IGNvcnJlc3BvbmRhbnQsIHZldWlsbGV6IGVudHJlciB1biBjb2RlIHZhbGlkZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIHNlcnZldXIuXCIpXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbn0iXX0=