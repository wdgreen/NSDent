"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var data_service_1 = require("~/app/services/data.service");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(routerExtensions, authService, dataService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        this.dataService = dataService;
        this.formulaire = { "codePatient": "",
            "motDePasse": "" };
        // Use the component constructor to inject providers.
    }
    AuthComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    AuthComponent.prototype.submit = function () {
        // Pour l'instant le bouton valider change de page pour featured
        this.routerExtensions.navigate(["featured"], {
            transition: {
                name: "slideLeft",
                duration: 200
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBQzFELDREQUEwRDtBQVExRDtJQUtJLHVCQUFvQixnQkFBaUMsRUFDakMsV0FBdUIsRUFDdkIsV0FBdUI7UUFGdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUwzQyxlQUFVLEdBQVMsRUFBQyxhQUFhLEVBQUMsRUFBRTtZQUNoQixZQUFZLEVBQUMsRUFBRSxFQUFFLENBQUM7UUFLbEMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQ0ksZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN6QyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxHQUFHO2FBQ2hCO1NBQ0osQ0FBQyxDQUFDO1FBRUgsaURBQWlEO1FBQ2pELGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLCtFQUErRTtRQUMvRSwrQ0FBK0M7UUFDL0MsMkVBQTJFO1FBQzNFLDJDQUEyQztRQUMzQywwRUFBMEU7UUFDMUUsMkNBQTJDO1FBQzNDLDZEQUE2RDtRQUM3RCxvQ0FBb0M7UUFDcEMsNkNBQTZDO1FBQzdDLHdDQUF3QztRQUN4Qyx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixpRkFBaUY7UUFDakYsbUhBQW1IO1FBQ25ILGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDZDQUE2QztRQUM3Qyx1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLFNBQVM7SUFDYixDQUFDO0lBbERRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ25DLENBQUM7eUNBTXVDLHlCQUFnQjtZQUNyQiwwQkFBVztZQUNYLDBCQUFXO09BUGxDLGFBQWEsQ0FtRHpCO0lBQUQsb0JBQUM7Q0FBQSxBQW5ERCxJQW1EQztBQW5EWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi4vc2VydmljZXMvbW9kZWxzL2F1dGgubW9kZWxlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2RhdGEuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJBdXRoXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2F1dGguY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXV0aC1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgZm9ybXVsYWlyZTogQXV0aCA9IHtcImNvZGVQYXRpZW50XCI6XCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibW90RGVQYXNzZVwiOlwiXCIgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTpEYXRhU2VydmljZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIC8vIFBvdXIgbCdpbnN0YW50IGxlIGJvdXRvbiB2YWxpZGVyIGNoYW5nZSBkZSBwYWdlIHBvdXIgZmVhdHVyZWRcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZlYXR1cmVkXCJdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UubG9naW5QYXRpZW50KHRoaXMuZm9ybXVsYWlyZSlcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYocmVzICE9IFwiXCIpe1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21iaW5haXNvbiBjb2RlUGF0aWVudC9tb3REZVBhc3NlIGNvcnJlY3RlLlwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFdyaXRlIGluZm9zIGluIGxvY2FsIGZpbGVcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZWNyaXRJbmZvcyhcIk9ydGhhbGlzXCIsIFwicGF0aWVudFwiLCByZXMpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlbSBpbiBHbG9iYWxzXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdsb2JhbGlzZUluZm9zKFwiT3J0aGFsaXNcIiwgXCJwYXRpZW50XCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiaG9tZVwiXSwge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21iaW5haXNvbiBjb2RlUGF0aWVudC9tb3REZVBhc3NlIGluY29ycmVjdGUuXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb21iaW5haXNvbiBjb2RlUGF0aWVudC9tb3REZVBhc3NlIGluY29ycmVjdGUsIHZldWlsbGV6IGVudHJlciB1bmUgY29tYmluYWlzb24gdmFsaWRlLlwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH0sXG4gICAgICAgIC8vICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgc2VydmV1ci5cIilcbiAgICAgICAgLy8gICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgc2VydmV1clwiKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICApO1xuICAgIH1cbn0iXX0=