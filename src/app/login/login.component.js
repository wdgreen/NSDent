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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsa0RBQWlEO0FBUWpEO0lBSUksd0JBQW9CLGdCQUFpQyxFQUNqQyxXQUF1QjtRQUR2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBSDNDLGVBQVUsR0FBVSxFQUFDLGFBQWEsRUFBQyxFQUFFLEVBQUMsQ0FBQztJQUl2QyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3pDLFNBQVMsQ0FDTixVQUFBLEdBQUc7WUFDQyxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDVixpQkFBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0RBQWtELEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDO2dCQUN2RixLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3JDLFVBQVUsRUFBRTt3QkFDUixJQUFJLEVBQUUsTUFBTTtxQkFDZjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUN4QyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztZQUMvRSxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUNKLENBQUE7SUFDVCxDQUFDO0lBN0JRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBS3VDLHlCQUFnQjtZQUNyQiwwQkFBVztPQUxsQyxjQUFjLENBOEIxQjtJQUFELHFCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgTG9naW4gfSBmcm9tIFwifi9hcHAvc2VydmljZXMvbW9kZWxzL2F1dGgubW9kZWxlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcblxuICAgIGZvcm11bGFpcmU6IExvZ2luID0ge1wiY29kZUNhYmluZXRcIjpcIlwifTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5DYWJpbmV0KHRoaXMuZm9ybXVsYWlyZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFscy5jYWJpbmV0ID0gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMZSBjb2RlIGNhYmluZXQgZXN0IHZhbGlkZSBlc3QgbGEgcmVwb25zZSBlc3QgOiBcIiArIEpTT04uc3RyaW5naWZ5KHJlcykgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhdXRoXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJNYXV2YWlzIGNvZGUgY2FiaW5ldCAuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkF1Y3VuIGNvZGUgY2FiaW5ldCBjb3JyZXNwb25kYW50LCB2ZXVpbGxleiBlbnRyZXIgdW4gY29kZSB2YWxpZGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBzZXJ2ZXVyXCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICB9XG59Il19