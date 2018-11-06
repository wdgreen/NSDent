"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var data_service_1 = require("~/app/services/data.service");
var globals_1 = require("~/app/services/globals");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(routerExtensions, authService, dataService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        this.dataService = dataService;
        this.formulaire = { "codePatient": "",
            "motDePasse": ""
        };
        this.chargement = globals_1.Globals.chargement;
        // Use the component constructor to inject providers.
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.chargement = false;
    };
    AuthComponent.prototype.submit = function () {
        var _this = this;
        this.chargement = true;
        globals_1.Globals.chargement = this.chargement;
        // dans le header : username & password
        // par méthode GET : os & token
        this.authService.loginPatient(this.formulaire)
            .subscribe(function (res) {
            // If right combinaison
            console.log("Bonne combinaison codePatient/motDePasse" + res);
            // Write infos in local file
            _this.dataService.ecritInfos("Orthalis", "patient", res);
            // Store them in Globals
            _this.dataService.globaliseInfos("Orthalis", "patient");
            // Redirect to home page
            _this.routerExtensions.navigate(["home"], {
                clearHistory: true,
                transition: {
                    name: "fade"
                }
            });
        }, function (err) {
            // If wrong combinaison or server error
            console.log("Erreur serveur ou mauvaise combinaison.");
            // Stop loading
            alert("Mauvaise combinaison code patient / mot de passe");
            _this.chargement = false;
        });
        // setTimeout(() => {
        //     // Pour l'instant le bouton valider change de page pour featured
        //     this.routerExtensions.navigate(["home"], {
        //         clearHistory: true,
        //         transition: {
        //             name: "fade",
        //             duration: 200
        //         }
        //     });
        // }, 2000);
        // this.authService.loginPatient(this.formulaire)
        //     .subscribe(
        //         res => {
        //             if(res != ""){
        //                 console.log("Combinaison codePatient/motDePasse correcte.");
        //                 // Write infos in local file
        //                 this.dataService.ecritInfos("Orthalis", "patient", res);
        //                 // Store them in Globals
        //                 this.dataService.globaliseInfos("Orthalis", "patient");
        //                 // Redirect to home page
        //                 this.routerExtensions.navigate(["home"], {
        //                     transition: {
        //                         name: "slideLeft",
        //                         duration: 200
        //                     }
        //                 });
        //             } else {
        //                 console.log("Combinaison codePatient/motDePasse incorrecte.");
        //                 alert("Combinaison codePatient/motDePasse incorrecte, veuillez entrer une combinaison valide.");
        //             }
        //         },
        //         err => {
        //             console.log("Erreur serveur.")
        //             alert("Erreur serveur");
        //         }
        //     );
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
            data_service_1.DataService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBQzFELDREQUEwRDtBQUMxRCxrREFBaUQ7QUFRakQ7SUFRSSx1QkFBb0IsZ0JBQWlDLEVBQ2pDLFdBQXVCLEVBQ3ZCLFdBQXVCO1FBRnZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFQM0MsZUFBVSxHQUNWLEVBQUksYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7U0FDbkIsQ0FBQztRQUtFLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFBQSxpQkFzRUM7UUFyRUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsaUJBQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVyQyx1Q0FBdUM7UUFDdkMsK0JBQStCO1FBRS9CLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDekMsU0FBUyxDQUNOLFVBQUEsR0FBRztZQUNDLHVCQUF1QjtZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlELDRCQUE0QjtZQUM1QixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1lBQ3pELHdCQUF3QjtZQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkQsd0JBQXdCO1lBQ3hCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDckMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsRUFDRCxVQUFBLEdBQUc7WUFDQyx1Q0FBdUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO1lBQ3ZELGVBQWU7WUFDZixLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztZQUMxRCxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLENBQ0osQ0FBQztRQUVOLHFCQUFxQjtRQUNyQix1RUFBdUU7UUFDdkUsaURBQWlEO1FBQ2pELDhCQUE4QjtRQUM5Qix3QkFBd0I7UUFDeEIsNEJBQTRCO1FBQzVCLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osVUFBVTtRQUNWLFlBQVk7UUFFWixpREFBaUQ7UUFDakQsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiw2QkFBNkI7UUFDN0IsK0VBQStFO1FBQy9FLCtDQUErQztRQUMvQywyRUFBMkU7UUFDM0UsMkNBQTJDO1FBQzNDLDBFQUEwRTtRQUMxRSwyQ0FBMkM7UUFDM0MsNkRBQTZEO1FBQzdELG9DQUFvQztRQUNwQyw2Q0FBNkM7UUFDN0Msd0NBQXdDO1FBQ3hDLHdCQUF3QjtRQUN4QixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLGlGQUFpRjtRQUNqRixtSEFBbUg7UUFDbkgsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsNkNBQTZDO1FBQzdDLHVDQUF1QztRQUN2QyxZQUFZO1FBQ1osU0FBUztJQUNiLENBQUM7SUF6RlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FTdUMseUJBQWdCO1lBQ3JCLDBCQUFXO1lBQ1gsMEJBQVc7T0FWbEMsYUFBYSxDQTBGekI7SUFBRCxvQkFBQztDQUFBLEFBMUZELElBMEZDO0FBMUZZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2dsb2JhbHNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQXV0aFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hdXRoLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2F1dGgtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNoYXJnZW1lbnQ6IGJvb2xlYW47XG4gICAgZm9ybXVsYWlyZTogQXV0aCA9IFxuICAgIHsgICBcImNvZGVQYXRpZW50XCI6IFwiXCIsXG4gICAgICAgIFwibW90RGVQYXNzZVwiOiBcIlwiIFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgZGF0YVNlcnZpY2U6RGF0YVNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gR2xvYmFscy5jaGFyZ2VtZW50O1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IHRydWU7XG4gICAgICAgIEdsb2JhbHMuY2hhcmdlbWVudCA9IHRoaXMuY2hhcmdlbWVudDtcbiAgICAgICAgXG4gICAgICAgIC8vIGRhbnMgbGUgaGVhZGVyIDogdXNlcm5hbWUgJiBwYXNzd29yZFxuICAgICAgICAvLyBwYXIgbcOpdGhvZGUgR0VUIDogb3MgJiB0b2tlblxuICAgICAgICBcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dpblBhdGllbnQodGhpcy5mb3JtdWxhaXJlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiByaWdodCBjb21iaW5haXNvblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkJvbm5lIGNvbWJpbmFpc29uIGNvZGVQYXRpZW50L21vdERlUGFzc2VcIiArIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFdyaXRlIGluZm9zIGluIGxvY2FsIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5lY3JpdEluZm9zKFwiT3J0aGFsaXNcIiwgXCJwYXRpZW50XCIsIHJlcyApO1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGVtIGluIEdsb2JhbHNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nbG9iYWxpc2VJbmZvcyhcIk9ydGhhbGlzXCIsIFwicGF0aWVudFwiKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiB3cm9uZyBjb21iaW5haXNvbiBvciBzZXJ2ZXIgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgc2VydmV1ciBvdSBtYXV2YWlzZSBjb21iaW5haXNvbi5cIik7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIk1hdXZhaXNlIGNvbWJpbmFpc29uIGNvZGUgcGF0aWVudCAvIG1vdCBkZSBwYXNzZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gICAgIC8vIFBvdXIgbCdpbnN0YW50IGxlIGJvdXRvbiB2YWxpZGVyIGNoYW5nZSBkZSBwYWdlIHBvdXIgZmVhdHVyZWRcbiAgICAgICAgLy8gICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7XG4gICAgICAgIC8vICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgIC8vICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfSwgMjAwMCk7XG5cbiAgICAgICAgLy8gdGhpcy5hdXRoU2VydmljZS5sb2dpblBhdGllbnQodGhpcy5mb3JtdWxhaXJlKVxuICAgICAgICAvLyAgICAgLnN1YnNjcmliZShcbiAgICAgICAgLy8gICAgICAgICByZXMgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBpZihyZXMgIT0gXCJcIil7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbWJpbmFpc29uIGNvZGVQYXRpZW50L21vdERlUGFzc2UgY29ycmVjdGUuXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gV3JpdGUgaW5mb3MgaW4gbG9jYWwgZmlsZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5lY3JpdEluZm9zKFwiT3J0aGFsaXNcIiwgXCJwYXRpZW50XCIsIHJlcyk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGVtIGluIEdsb2JhbHNcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZ2xvYmFsaXNlSW5mb3MoXCJPcnRoYWxpc1wiLCBcInBhdGllbnRcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2VcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJob21lXCJdLCB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbWJpbmFpc29uIGNvZGVQYXRpZW50L21vdERlUGFzc2UgaW5jb3JyZWN0ZS5cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBhbGVydChcIkNvbWJpbmFpc29uIGNvZGVQYXRpZW50L21vdERlUGFzc2UgaW5jb3JyZWN0ZSwgdmV1aWxsZXogZW50cmVyIHVuZSBjb21iaW5haXNvbiB2YWxpZGUuXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBlcnIgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBzZXJ2ZXVyLlwiKVxuICAgICAgICAvLyAgICAgICAgICAgICBhbGVydChcIkVycmV1ciBzZXJ2ZXVyXCIpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICk7XG4gICAgfVxufSJdfQ==