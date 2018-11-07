"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var data_service_1 = require("~/app/services/data.service");
var connectivite_service_1 = require("../services/connectivite.service");
var globals_1 = require("~/app/services/globals");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(routerExtensions, authService, dataService, connectiviteService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        this.dataService = dataService;
        this.connectiviteService = connectiviteService;
        this.formulaire = { "codePatient": "",
            "motDePasse": ""
        };
        this.chargement = globals_1.Globals.chargement;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.chargement = false;
    };
    AuthComponent.prototype.submit = function () {
        var _this = this;
        this.chargement = true;
        globals_1.Globals.chargement = this.chargement;
        // If user connected, try to get informations from server and write them on local file
        if (this.connectiviteService.testeConnectivite()) {
            this.authService.loginPatient(this.formulaire)
                .subscribe(
            // If right username/password
            function (res) {
                console.log("Bonne combinaison codePatient/motDePasse, voici la réponse : " + res);
                // Write infos in local file
                _this.dataService.ecritInfos("Orthalis", "patient", res);
                // Store them in Globals
                _this.dataService.globaliseInfos("Orthalis", "patient");
                // Redirect to home page and clear navigation history
                _this.routerExtensions.navigate(["home"], {
                    clearHistory: true,
                    transition: {
                        name: "fade"
                    }
                });
            }, 
            // If wrong username/password
            function (err) {
                // Stop loading and let user retry
                console.log("Erreur serveur ou mauvaise combinaison.");
                alert("Mauvaise combinaison code patient / mot de passe");
                _this.chargement = false;
            });
            // If user is not connected, let user cry
        }
        else {
            alert("Veuillez vous connecter à internet pour récupérer vos informations");
        }
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: "Auth",
            moduleId: module.id,
            templateUrl: "./auth.component.html",
            styleUrls: ["./auth-common.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            auth_service_1.AuthService,
            data_service_1.DataService,
            connectivite_service_1.ConnectiviteService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBQzFELDREQUEwRDtBQUMxRCx5RUFBdUU7QUFDdkUsa0RBQWlEO0FBU2pEO0lBUUksdUJBQW9CLGdCQUFpQyxFQUNqQyxXQUF1QixFQUN2QixXQUF1QixFQUN2QixtQkFBdUM7UUFIdkMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBUjNELGVBQVUsR0FDVixFQUFJLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLFlBQVksRUFBRSxFQUFFO1NBQ25CLENBQUM7UUFNRSxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFBQSxpQkFtQ0M7UUFsQ0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsaUJBQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVyQyxzRkFBc0Y7UUFDdEYsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7aUJBQzdDLFNBQVM7WUFDTiw2QkFBNkI7WUFDN0IsVUFBQSxHQUFHO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0RBQStELEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQ25GLDRCQUE0QjtnQkFDNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUUsQ0FBQztnQkFDekQsd0JBQXdCO2dCQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELHFEQUFxRDtnQkFDckQsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNyQyxZQUFZLEVBQUUsSUFBSTtvQkFDbEIsVUFBVSxFQUFFO3dCQUNSLElBQUksRUFBRSxNQUFNO3FCQUNmO2lCQUNKLENBQUMsQ0FBQztZQUNQLENBQUM7WUFDRCw2QkFBNkI7WUFDN0IsVUFBQSxHQUFHO2dCQUNDLGtDQUFrQztnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO2dCQUN2RCxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQyxDQUNKLENBQUM7WUFDTix5Q0FBeUM7UUFDekMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7UUFDaEYsQ0FBQztJQUNMLENBQUM7SUF0RFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FTdUMseUJBQWdCO1lBQ3JCLDBCQUFXO1lBQ1gsMEJBQVc7WUFDSCwwQ0FBbUI7T0FYbEQsYUFBYSxDQXVEekI7SUFBRCxvQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDb25uZWN0aXZpdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Nvbm5lY3Rpdml0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2dsb2JhbHNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJBdXRoXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2F1dGguY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXV0aC1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hhcmdlbWVudDogYm9vbGVhbjtcbiAgICBmb3JtdWxhaXJlOiBBdXRoID0gXG4gICAgeyAgIFwiY29kZVBhdGllbnRcIjogXCJcIixcbiAgICAgICAgXCJtb3REZVBhc3NlXCI6IFwiXCIgXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTpEYXRhU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbm5lY3Rpdml0ZVNlcnZpY2U6Q29ubmVjdGl2aXRlU2VydmljZSkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFscy5jaGFyZ2VtZW50ID0gdGhpcy5jaGFyZ2VtZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gSWYgdXNlciBjb25uZWN0ZWQsIHRyeSB0byBnZXQgaW5mb3JtYXRpb25zIGZyb20gc2VydmVyIGFuZCB3cml0ZSB0aGVtIG9uIGxvY2FsIGZpbGVcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGl2aXRlU2VydmljZS50ZXN0ZUNvbm5lY3Rpdml0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luUGF0aWVudCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIC8vIElmIHJpZ2h0IHVzZXJuYW1lL3Bhc3N3b3JkXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCb25uZSBjb21iaW5haXNvbiBjb2RlUGF0aWVudC9tb3REZVBhc3NlLCB2b2ljaSBsYSByw6lwb25zZSA6IFwiICsgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gV3JpdGUgaW5mb3MgaW4gbG9jYWwgZmlsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmVjcml0SW5mb3MoXCJPcnRoYWxpc1wiLCBcInBhdGllbnRcIiwgcmVzICk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZW0gaW4gR2xvYmFsc1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdsb2JhbGlzZUluZm9zKFwiT3J0aGFsaXNcIiwgXCJwYXRpZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2UgYW5kIGNsZWFyIG5hdmlnYXRpb24gaGlzdG9yeVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiaG9tZVwiXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gSWYgd3JvbmcgdXNlcm5hbWUvcGFzc3dvcmRcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGxvYWRpbmcgYW5kIGxldCB1c2VyIHJldHJ5XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIHNlcnZldXIgb3UgbWF1dmFpc2UgY29tYmluYWlzb24uXCIpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk1hdXZhaXNlIGNvbWJpbmFpc29uIGNvZGUgcGF0aWVudCAvIG1vdCBkZSBwYXNzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgLy8gSWYgdXNlciBpcyBub3QgY29ubmVjdGVkLCBsZXQgdXNlciBjcnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVmV1aWxsZXogdm91cyBjb25uZWN0ZXIgw6AgaW50ZXJuZXQgcG91ciByw6ljdXDDqXJlciB2b3MgaW5mb3JtYXRpb25zXCIpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==