"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var data_service_1 = require("~/app/services/data.service");
var connectivite_service_1 = require("../services/connectivite.service");
var globals_1 = require("../services/globals");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions, authService, dataService, connectiviteService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        this.dataService = dataService;
        this.connectiviteService = connectiviteService;
        this.formulaire = {
            "codeCabinet": ""
        };
        this.chargement = globals_1.Globals.chargement;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.chargement = false;
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.chargement = true;
        globals_1.Globals.chargement = this.chargement;
        // If user connected, try to get informations from server and write them on local file
        if (this.connectiviteService.testeConnectivite()) {
            this.authService.loginCabinet(this.formulaire)
                .subscribe(
            // Server work
            function (res) {
                // If right codeCabinet
                if (res != "") {
                    console.log('Bon code cabinet');
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
                    // If wrong codeCabinet
                }
                else {
                    // Stop loading and let user retry
                    _this.chargement = false;
                    console.log("Mauvais code cabinet.");
                    alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");
                }
            }, 
            // Server doesn't work
            function (err) {
                // Stop loading and let user cry
                console.log("Erreur serveur.");
                alert("Erreur serveur");
                _this.chargement = false;
            });
            // If user is not connected, stop loading and let user cry
        }
        else {
            alert("Veuillez vous connecter à internet pour récupérer vos informations");
            this.chargement = false;
        }
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
            data_service_1.DataService,
            connectivite_service_1.ConnectiviteService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsNERBQTBEO0FBQzFELHlFQUF1RTtBQUN2RSwrQ0FBOEM7QUFROUM7SUFRSSx3QkFBb0IsZ0JBQWtDLEVBQzFDLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLG1CQUF3QztRQUhoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFScEQsZUFBVSxHQUNOO1lBQ0ksYUFBYSxFQUFFLEVBQUU7U0FDcEIsQ0FBQztRQU9GLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQTZDQztRQTVDRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixpQkFBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXJDLHNGQUFzRjtRQUN0RixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDN0MsU0FBUztZQUNOLGNBQWM7WUFDZCxVQUFBLEdBQUc7Z0JBQ0MsdUJBQXVCO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ2hDLDRCQUE0QjtvQkFDNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDeEQsd0JBQXdCO29CQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3ZELHdDQUF3QztvQkFDeEMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO3dCQUNyQyxZQUFZLEVBQUUsSUFBSTt3QkFDbEIsVUFBVSxFQUFFOzRCQUNSLElBQUksRUFBRSxNQUFNO3lCQUNmO3FCQUNKLENBQUMsQ0FBQztvQkFDUCx1QkFBdUI7Z0JBQ3ZCLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osa0NBQWtDO29CQUNsQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO29CQUNyQyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFDL0UsQ0FBQztZQUNMLENBQUM7WUFDRCxzQkFBc0I7WUFDdEIsVUFBQSxHQUFHO2dCQUNDLGdDQUFnQztnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2dCQUM5QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQyxDQUNKLENBQUE7WUFDTCwwREFBMEQ7UUFDMUQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osS0FBSyxDQUFDLG9FQUFvRSxDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQztJQUNMLENBQUM7SUFqRVEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDcEMsQ0FBQzt5Q0FTd0MseUJBQWdCO1lBQzdCLDBCQUFXO1lBQ1gsMEJBQVc7WUFDSCwwQ0FBbUI7T0FYM0MsY0FBYyxDQWtFMUI7SUFBRCxxQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwifi9hcHAvc2VydmljZXMvbW9kZWxzL2F1dGgubW9kZWxlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuaW1wb3J0IHsgQ29ubmVjdGl2aXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25uZWN0aXZpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hhcmdlbWVudDogYm9vbGVhbjtcbiAgICBmb3JtdWxhaXJlOiBMb2dpbiA9XG4gICAgICAgIHtcbiAgICAgICAgICAgIFwiY29kZUNhYmluZXRcIjogXCJcIlxuICAgICAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTogQ29ubmVjdGl2aXRlU2VydmljZSkge1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSB0cnVlO1xuICAgICAgICBHbG9iYWxzLmNoYXJnZW1lbnQgPSB0aGlzLmNoYXJnZW1lbnQ7XG5cbiAgICAgICAgLy8gSWYgdXNlciBjb25uZWN0ZWQsIHRyeSB0byBnZXQgaW5mb3JtYXRpb25zIGZyb20gc2VydmVyIGFuZCB3cml0ZSB0aGVtIG9uIGxvY2FsIGZpbGVcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGl2aXRlU2VydmljZS50ZXN0ZUNvbm5lY3Rpdml0ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luQ2FiaW5ldCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIC8vIFNlcnZlciB3b3JrXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgcmlnaHQgY29kZUNhYmluZXRcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQm9uIGNvZGUgY2FiaW5ldCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV3JpdGUgaW5mb3MgaW4gbG9jYWwgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5lY3JpdEluZm9zKFwiT3J0aGFsaXNcIiwgXCJjYWJpbmV0XCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGVtIGluIEdsb2JhbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2xvYmFsaXNlSW5mb3MoXCJPcnRoYWxpc1wiLCBcImNhYmluZXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB1c2VyIGF1dGhlbnRpZmNhdGlvbiBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYXV0aFwiXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHdyb25nIGNvZGVDYWJpbmV0XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGxvYWRpbmcgYW5kIGxldCB1c2VyIHJldHJ5XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1dmFpcyBjb2RlIGNhYmluZXQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1biBjb2RlIGNhYmluZXQgY29ycmVzcG9uZGFudCwgdmV1aWxsZXogZW50cmVyIHVuIGNvZGUgdmFsaWRlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gU2VydmVyIGRvZXNuJ3Qgd29ya1xuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgbG9hZGluZyBhbmQgbGV0IHVzZXIgY3J5XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIHNlcnZldXIuXCIpXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXJcIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgLy8gSWYgdXNlciBpcyBub3QgY29ubmVjdGVkLCBzdG9wIGxvYWRpbmcgYW5kIGxldCB1c2VyIGNyeVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJWZXVpbGxleiB2b3VzIGNvbm5lY3RlciDDoCBpbnRlcm5ldCBwb3VyIHLDqWN1cMOpcmVyIHZvcyBpbmZvcm1hdGlvbnNcIik7XG4gICAgICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=