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
                    console.log("Bon code cabinet, voici la réponse : " + res);
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
                    console.log("Mauvais code cabinet.");
                    alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");
                    _this.chargement = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUcvRCw0REFBMEQ7QUFDMUQsNERBQTBEO0FBQzFELHlFQUF1RTtBQUN2RSwrQ0FBOEM7QUFROUM7SUFRSSx3QkFBb0IsZ0JBQWtDLEVBQzFDLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLG1CQUF3QztRQUhoQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQzFDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFScEQsZUFBVSxHQUNOO1lBQ0ksYUFBYSxFQUFFLEVBQUU7U0FDcEIsQ0FBQztRQU9GLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUM7SUFDekMsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUFBLGlCQTZDQztRQTVDRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixpQkFBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRXJDLHNGQUFzRjtRQUN0RixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztpQkFDN0MsU0FBUztZQUNOLGNBQWM7WUFDZCxVQUFBLEdBQUc7Z0JBQ0MsdUJBQXVCO2dCQUN2QixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUF1QyxHQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN6RCw0QkFBNEI7b0JBQzVCLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ3hELHdCQUF3QjtvQkFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUN2RCx3Q0FBd0M7b0JBQ3hDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDckMsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLFVBQVUsRUFBRTs0QkFDUixJQUFJLEVBQUUsTUFBTTt5QkFDZjtxQkFDSixDQUFDLENBQUM7b0JBQ1AsdUJBQXVCO2dCQUN2QixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNKLGtDQUFrQztvQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO29CQUNwQyxLQUFLLENBQUMsbUVBQW1FLENBQUMsQ0FBQztvQkFDM0UsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQzVCLENBQUM7WUFDTCxDQUFDO1lBQ0Qsc0JBQXNCO1lBQ3RCLFVBQUEsR0FBRztnQkFDQyxnQ0FBZ0M7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtnQkFDOUIsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzVCLENBQUMsQ0FDSixDQUFBO1lBQ0wsMERBQTBEO1FBQzFELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLEtBQUssQ0FBQyxvRUFBb0UsQ0FBQyxDQUFDO1lBQzVFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLENBQUM7SUFDTCxDQUFDO0lBakVRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO1NBQ3BDLENBQUM7eUNBU3dDLHlCQUFnQjtZQUM3QiwwQkFBVztZQUNYLDBCQUFXO1lBQ0gsMENBQW1CO09BWDNDLGNBQWMsQ0FrRTFCO0lBQUQscUJBQUM7Q0FBQSxBQWxFRCxJQWtFQztBQWxFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IExvZ2luIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY29ubmVjdGl2aXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNoYXJnZW1lbnQ6IGJvb2xlYW47XG4gICAgZm9ybXVsYWlyZTogTG9naW4gPVxuICAgICAgICB7XG4gICAgICAgICAgICBcImNvZGVDYWJpbmV0XCI6IFwiXCJcbiAgICAgICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6IERhdGFTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIGNvbm5lY3Rpdml0ZVNlcnZpY2U6IENvbm5lY3Rpdml0ZVNlcnZpY2UpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFscy5jaGFyZ2VtZW50ID0gdGhpcy5jaGFyZ2VtZW50O1xuXG4gICAgICAgIC8vIElmIHVzZXIgY29ubmVjdGVkLCB0cnkgdG8gZ2V0IGluZm9ybWF0aW9ucyBmcm9tIHNlcnZlciBhbmQgd3JpdGUgdGhlbSBvbiBsb2NhbCBmaWxlXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpdml0ZVNlcnZpY2UudGVzdGVDb25uZWN0aXZpdGUoKSkge1xuICAgICAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpbkNhYmluZXQodGhpcy5mb3JtdWxhaXJlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAvLyBTZXJ2ZXIgd29ya1xuICAgICAgICAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIElmIHJpZ2h0IGNvZGVDYWJpbmV0XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJCb24gY29kZSBjYWJpbmV0LCB2b2ljaSBsYSByw6lwb25zZSA6IFwiK3Jlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXcml0ZSBpbmZvcyBpbiBsb2NhbCBmaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmVjcml0SW5mb3MoXCJPcnRoYWxpc1wiLCBcImNhYmluZXRcIiwgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZW0gaW4gR2xvYmFsc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nbG9iYWxpc2VJbmZvcyhcIk9ydGhhbGlzXCIsIFwiY2FiaW5ldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIHVzZXIgYXV0aGVudGlmY2F0aW9uIHBhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhdXRoXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgd3JvbmcgY29kZUNhYmluZXRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgbG9hZGluZyBhbmQgbGV0IHVzZXIgcmV0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWF1dmFpcyBjb2RlIGNhYmluZXQuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIkF1Y3VuIGNvZGUgY2FiaW5ldCBjb3JyZXNwb25kYW50LCB2ZXVpbGxleiBlbnRyZXIgdW4gY29kZSB2YWxpZGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIFNlcnZlciBkb2Vzbid0IHdvcmtcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIGxvYWRpbmcgYW5kIGxldCB1c2VyIGNyeVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBzZXJ2ZXVyLlwiKVxuICAgICAgICAgICAgICAgICAgICBhbGVydChcIkVycmV1ciBzZXJ2ZXVyXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIC8vIElmIHVzZXIgaXMgbm90IGNvbm5lY3RlZCwgc3RvcCBsb2FkaW5nIGFuZCBsZXQgdXNlciBjcnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVmV1aWxsZXogdm91cyBjb25uZWN0ZXIgw6AgaW50ZXJuZXQgcG91ciByw6ljdXDDqXJlciB2b3MgaW5mb3JtYXRpb25zXCIpO1xuICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59Il19