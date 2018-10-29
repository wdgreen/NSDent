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
            "motDePasse": "" };
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
        setTimeout(function () {
            // Pour l'instant le bouton valider change de page pour featured
            _this.routerExtensions.navigate(["home"], {
                clearHistory: true,
                transition: {
                    name: "fade",
                    duration: 200
                }
            });
        }, 2000);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBQzFELDREQUEwRDtBQUMxRCxrREFBaUQ7QUFRakQ7SUFNSSx1QkFBb0IsZ0JBQWlDLEVBQ2pDLFdBQXVCLEVBQ3ZCLFdBQXVCO1FBRnZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFMM0MsZUFBVSxHQUFTLEVBQUMsYUFBYSxFQUFDLEVBQUU7WUFDaEIsWUFBWSxFQUFDLEVBQUUsRUFBRSxDQUFDO1FBS2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFBQSxpQkF3Q0M7UUF2Q0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsaUJBQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNyQyxVQUFVLENBQUM7WUFDUCxnRUFBZ0U7WUFDaEUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxHQUFHO2lCQUNoQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULGlEQUFpRDtRQUNqRCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QiwrRUFBK0U7UUFDL0UsK0NBQStDO1FBQy9DLDJFQUEyRTtRQUMzRSwyQ0FBMkM7UUFDM0MsMEVBQTBFO1FBQzFFLDJDQUEyQztRQUMzQyw2REFBNkQ7UUFDN0Qsb0NBQW9DO1FBQ3BDLDZDQUE2QztRQUM3Qyx3Q0FBd0M7UUFDeEMsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsaUZBQWlGO1FBQ2pGLG1IQUFtSDtRQUNuSCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2Q0FBNkM7UUFDN0MsdUNBQXVDO1FBQ3ZDLFlBQVk7UUFDWixTQUFTO0lBQ2IsQ0FBQztJQXpEUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQU91Qyx5QkFBZ0I7WUFDckIsMEJBQVc7WUFDWCwwQkFBVztPQVJsQyxhQUFhLENBMER6QjtJQUFELG9CQUFDO0NBQUEsQUExREQsSUEwREM7QUExRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4uL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJBdXRoXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2F1dGguY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXV0aC1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hhcmdlbWVudDogYm9vbGVhbjtcbiAgICBmb3JtdWxhaXJlOiBBdXRoID0ge1wiY29kZVBhdGllbnRcIjpcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb3REZVBhc3NlXCI6XCJcIiB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOlJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOkRhdGFTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSB0cnVlO1xuICAgICAgICBHbG9iYWxzLmNoYXJnZW1lbnQgPSB0aGlzLmNoYXJnZW1lbnQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gUG91ciBsJ2luc3RhbnQgbGUgYm91dG9uIHZhbGlkZXIgY2hhbmdlIGRlIHBhZ2UgcG91ciBmZWF0dXJlZFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImhvbWVcIl0sIHtcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luUGF0aWVudCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHJlcyAhPSBcIlwiKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tYmluYWlzb24gY29kZVBhdGllbnQvbW90RGVQYXNzZSBjb3JyZWN0ZS5cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBXcml0ZSBpbmZvcyBpbiBsb2NhbCBmaWxlXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmVjcml0SW5mb3MoXCJPcnRoYWxpc1wiLCBcInBhdGllbnRcIiwgcmVzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZW0gaW4gR2xvYmFsc1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nbG9iYWxpc2VJbmZvcyhcIk9ydGhhbGlzXCIsIFwicGF0aWVudFwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIGhvbWUgcGFnZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImhvbWVcIl0sIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tYmluYWlzb24gY29kZVBhdGllbnQvbW90RGVQYXNzZSBpbmNvcnJlY3RlLlwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29tYmluYWlzb24gY29kZVBhdGllbnQvbW90RGVQYXNzZSBpbmNvcnJlY3RlLCB2ZXVpbGxleiBlbnRyZXIgdW5lIGNvbWJpbmFpc29uIHZhbGlkZS5cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGVyciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIHNlcnZldXIuXCIpXG4gICAgICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXJcIik7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgKTtcbiAgICB9XG59Il19