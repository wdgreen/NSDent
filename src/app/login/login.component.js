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
        this.authService.loginCabinet(this.formulaire)
            .subscribe(function (res) {
            if (res != "") {
                console.log("Bon code cabinet, réponse : " + res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsNERBQTBEO0FBQzFELCtDQUE4QztBQVE5QztJQVFJLHdCQUFvQixnQkFBa0MsRUFDMUMsV0FBd0IsRUFDeEIsV0FBd0I7UUFGaEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVBwQyxlQUFVLEdBQ047WUFDSSxhQUFhLEVBQUUsRUFBRTtTQUNwQixDQUFDO1FBTUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBa0NDO1FBakNHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLGlCQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFckMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN6QyxTQUFTLENBQ04sVUFBQSxHQUFHO1lBQ0MsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEQsNEJBQTRCO2dCQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN4RCx3QkFBd0I7Z0JBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdkQsd0NBQXdDO2dCQUN4QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3JDLFlBQVksRUFBRSxJQUFJO29CQUNsQixVQUFVLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLE1BQU07cUJBQ2Y7aUJBQ0osQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtnQkFDcEMsS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUM7Z0JBRTNFLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUM7UUFDTCxDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1lBQzlCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRXhCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUMsQ0FDSixDQUFBO0lBQ1QsQ0FBQztJQXJEUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNwQyxDQUFDO3lDQVN3Qyx5QkFBZ0I7WUFDN0IsMEJBQVc7WUFDWCwwQkFBVztPQVYzQixjQUFjLENBc0QxQjtJQUFELHFCQUFDO0NBQUEsQUF0REQsSUFzREM7QUF0RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dsb2JhbHNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4tY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjaGFyZ2VtZW50OiBib29sZWFuO1xuICAgIGZvcm11bGFpcmU6IExvZ2luID1cbiAgICAgICAge1xuICAgICAgICAgICAgXCJjb2RlQ2FiaW5ldFwiOiBcIlwiXG4gICAgICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOiBEYXRhU2VydmljZSkge1xuICAgICAgICAgICAgXG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSB0cnVlO1xuICAgICAgICBHbG9iYWxzLmNoYXJnZW1lbnQgPSB0aGlzLmNoYXJnZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbkNhYmluZXQodGhpcy5mb3JtdWxhaXJlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm9uIGNvZGUgY2FiaW5ldCwgcsOpcG9uc2UgOiBcIityZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV3JpdGUgaW5mb3MgaW4gbG9jYWwgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5lY3JpdEluZm9zKFwiT3J0aGFsaXNcIiwgXCJjYWJpbmV0XCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGVtIGluIEdsb2JhbHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2xvYmFsaXNlSW5mb3MoXCJPcnRoYWxpc1wiLCBcImNhYmluZXRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byB1c2VyIGF1dGhlbnRpZmNhdGlvbiBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYXV0aFwiXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hdXZhaXMgY29kZSBjYWJpbmV0LlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1biBjb2RlIGNhYmluZXQgY29ycmVzcG9uZGFudCwgdmV1aWxsZXogZW50cmVyIHVuIGNvZGUgdmFsaWRlLlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIHNlcnZldXIuXCIpXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbn0iXX0=