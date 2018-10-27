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
        this.chargement = false;
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.chargement = true;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsNERBQTBEO0FBUTFEO0lBTUksd0JBQW9CLGdCQUFpQyxFQUNqQyxXQUF1QixFQUN2QixXQUF1QjtRQUZ2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBTjNDLGVBQVUsR0FBVSxFQUFDLGFBQWEsRUFBQyxFQUFFLEVBQUMsQ0FBQztRQUV2QyxlQUFVLEdBQVcsS0FBSyxDQUFDO0lBSzNCLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQUEsaUJBaUNDO1FBaENHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDekMsU0FBUyxDQUNOLFVBQUEsR0FBRztZQUNDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDaEMsNEJBQTRCO2dCQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBRSxDQUFDO2dCQUN6RCx3QkFBd0I7Z0JBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDdkQsd0NBQXdDO2dCQUN4QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3JDLFVBQVUsRUFBRTt3QkFDUixJQUFJLEVBQUUsTUFBTTtxQkFDZjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO2dCQUNwQyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztnQkFFM0UsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDNUIsQ0FBQztRQUdMLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7WUFDOUIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFeEIsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUNKLENBQUE7SUFDVCxDQUFDO0lBNUNRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBT3VDLHlCQUFnQjtZQUNyQiwwQkFBVztZQUNYLDBCQUFXO09BUmxDLGNBQWMsQ0E2QzFCO0lBQUQscUJBQUM7Q0FBQSxBQTdDRCxJQTZDQztBQTdDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBMb2dpbiB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgZm9ybXVsYWlyZTogTG9naW4gPSB7XCJjb2RlQ2FiaW5ldFwiOlwiXCJ9O1xuXG4gICAgY2hhcmdlbWVudDpib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6RGF0YVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5DYWJpbmV0KHRoaXMuZm9ybXVsYWlyZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCb24gY29kZSBjYWJpbmV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gV3JpdGUgaW5mb3MgaW4gbG9jYWwgZmlsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5lY3JpdEluZm9zKFwiT3J0aGFsaXNcIiwgXCJjYWJpbmV0XCIsIHJlcyApO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlbSBpbiBHbG9iYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdsb2JhbGlzZUluZm9zKFwiT3J0aGFsaXNcIiwgXCJjYWJpbmV0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gdXNlciBhdXRoZW50aWZjYXRpb24gcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImF1dGhcIl0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk1hdXZhaXMgY29kZSBjYWJpbmV0LlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1biBjb2RlIGNhYmluZXQgY29ycmVzcG9uZGFudCwgdmV1aWxsZXogZW50cmVyIHVuIGNvZGUgdmFsaWRlLlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIHNlcnZldXIuXCIpXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgIH1cbn0iXX0=