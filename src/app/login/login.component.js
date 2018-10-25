"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var globals_1 = require("~/app/services/globals");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(routerExtensions, authService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        this.formulaire = { "codeCabinet": "" };
    }
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.authService.loginCabinet(this.formulaire)
            .subscribe(function (res) {
            if (res != "") {
                globals_1.Globals.cabinet = res;
                console.log("Le code cabinet est valide est la reponse est : " + JSON.stringify(res));
                _this.routerExtensions.navigate(["auth"], {
                    transition: {
                        name: "fade"
                    }
                });
            }
            else {
                console.log("Mauvais code cabinet ...");
                alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");
            }
        }, function (err) {
            console.log("Erreur serveur" + err);
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
            auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsa0RBQWlEO0FBUWpEO0lBSUksd0JBQW9CLGdCQUFpQyxFQUNqQyxXQUF1QjtRQUR2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBSDNDLGVBQVUsR0FBUyxFQUFDLGFBQWEsRUFBQyxFQUFFLEVBQUMsQ0FBQztJQUl0QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3pDLFNBQVMsQ0FDTixVQUFBLEdBQUc7WUFDQyxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDVixpQkFBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDO2dCQUN2RixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3JDLFVBQVUsRUFBRTt3QkFDUixJQUFJLEVBQUUsTUFBTTtxQkFDZjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztZQUMvRSxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUNKLENBQUE7SUFDVCxDQUFDO0lBN0JRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBS3VDLHlCQUFnQjtZQUNyQiwwQkFBVztPQUxsQyxjQUFjLENBOEIxQjtJQUFELHFCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xuXG4gICAgZm9ybXVsYWlyZTogQXV0aCA9IHtcImNvZGVDYWJpbmV0XCI6XCJcIn07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luQ2FiaW5ldCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyAhPSBcIlwiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbHMuY2FiaW5ldCA9IHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTGUgY29kZSBjYWJpbmV0IGVzdCB2YWxpZGUgZXN0IGxhIHJlcG9uc2UgZXN0IDogXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiYXV0aFwiXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1dmFpcyBjb2RlIGNhYmluZXQgLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1biBjb2RlIGNhYmluZXQgY29ycmVzcG9uZGFudCwgdmV1aWxsZXogZW50cmVyIHVuIGNvZGUgdmFsaWRlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgc2VydmV1clwiICsgZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgfVxufSJdfQ==