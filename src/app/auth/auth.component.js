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
        // // dans le header : username & password
        // // par méthode GET : os & token
        // this.authService.loginPatient(this.formulaire)
        //     .subscribe(
        //         res => {
        //             // If right combinaison
        //             console.log("Bonne combinaison codePatient/motDePasse");
        //             // Write infos in local file
        //             this.dataService.ecritInfos("Orthalis", "patient", res );
        //             // Store them in Globals
        //             this.dataService.globaliseInfos("Orthalis", "patient");
        //             // Redirect to home page
        //             this.routerExtensions.navigate(["home"], {
        //                 clearHistory: true,
        //                 transition: {
        //                     name: "fade"
        //                 }
        //             });
        //         },
        //         err => {
        //             // If wrong combinaison or server error
        //             console.log("Erreur serveur ou mauvaise combinaison.");
        //             // Stop loading
        //             alert("Mauvaise combinaison code patient / mot de passe");
        //             this.chargement = false;
        //         }
        //     );
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBQzFELDREQUEwRDtBQUMxRCxrREFBaUQ7QUFRakQ7SUFRSSx1QkFBb0IsZ0JBQWlDLEVBQ2pDLFdBQXVCLEVBQ3ZCLFdBQXVCO1FBRnZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFQM0MsZUFBVSxHQUNWLEVBQUksYUFBYSxFQUFFLEVBQUU7WUFDakIsWUFBWSxFQUFFLEVBQUU7U0FDbkIsQ0FBQztRQUtFLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELDhCQUFNLEdBQU47UUFBQSxpQkFzRUM7UUFyRUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsaUJBQU8sQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUVyQywwQ0FBMEM7UUFDMUMsa0NBQWtDO1FBRWxDLGlEQUFpRDtRQUNqRCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHNDQUFzQztRQUN0Qyx1RUFBdUU7UUFDdkUsMkNBQTJDO1FBQzNDLHdFQUF3RTtRQUN4RSx1Q0FBdUM7UUFDdkMsc0VBQXNFO1FBQ3RFLHVDQUF1QztRQUN2Qyx5REFBeUQ7UUFDekQsc0NBQXNDO1FBQ3RDLGdDQUFnQztRQUNoQyxtQ0FBbUM7UUFDbkMsb0JBQW9CO1FBQ3BCLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHNEQUFzRDtRQUN0RCxzRUFBc0U7UUFDdEUsOEJBQThCO1FBQzlCLHlFQUF5RTtRQUN6RSx1Q0FBdUM7UUFDdkMsWUFBWTtRQUNaLFNBQVM7UUFFVCxVQUFVLENBQUM7WUFDUCxnRUFBZ0U7WUFDaEUsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNyQyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxHQUFHO2lCQUNoQjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULGlEQUFpRDtRQUNqRCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLDZCQUE2QjtRQUM3QiwrRUFBK0U7UUFDL0UsK0NBQStDO1FBQy9DLDJFQUEyRTtRQUMzRSwyQ0FBMkM7UUFDM0MsMEVBQTBFO1FBQzFFLDJDQUEyQztRQUMzQyw2REFBNkQ7UUFDN0Qsb0NBQW9DO1FBQ3BDLDZDQUE2QztRQUM3Qyx3Q0FBd0M7UUFDeEMsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsaUZBQWlGO1FBQ2pGLG1IQUFtSDtRQUNuSCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw2Q0FBNkM7UUFDN0MsdUNBQXVDO1FBQ3ZDLFlBQVk7UUFDWixTQUFTO0lBQ2IsQ0FBQztJQXpGUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDO3lDQVN1Qyx5QkFBZ0I7WUFDckIsMEJBQVc7WUFDWCwwQkFBVztPQVZsQyxhQUFhLENBMEZ6QjtJQUFELG9CQUFDO0NBQUEsQUExRkQsSUEwRkM7QUExRlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4uL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9kYXRhLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJBdXRoXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2F1dGguY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vYXV0aC1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hhcmdlbWVudDogYm9vbGVhbjtcbiAgICBmb3JtdWxhaXJlOiBBdXRoID0gXG4gICAgeyAgIFwiY29kZVBhdGllbnRcIjogXCJcIixcbiAgICAgICAgXCJtb3REZVBhc3NlXCI6IFwiXCIgXG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6QXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBkYXRhU2VydmljZTpEYXRhU2VydmljZSkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFscy5jaGFyZ2VtZW50ID0gdGhpcy5jaGFyZ2VtZW50O1xuICAgICAgICBcbiAgICAgICAgLy8gLy8gZGFucyBsZSBoZWFkZXIgOiB1c2VybmFtZSAmIHBhc3N3b3JkXG4gICAgICAgIC8vIC8vIHBhciBtw6l0aG9kZSBHRVQgOiBvcyAmIHRva2VuXG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luUGF0aWVudCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIElmIHJpZ2h0IGNvbWJpbmFpc29uXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQm9ubmUgY29tYmluYWlzb24gY29kZVBhdGllbnQvbW90RGVQYXNzZVwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gV3JpdGUgaW5mb3MgaW4gbG9jYWwgZmlsZVxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmVjcml0SW5mb3MoXCJPcnRoYWxpc1wiLCBcInBhdGllbnRcIiwgcmVzICk7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIFN0b3JlIHRoZW0gaW4gR2xvYmFsc1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdsb2JhbGlzZUluZm9zKFwiT3J0aGFsaXNcIiwgXCJwYXRpZW50XCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBSZWRpcmVjdCB0byBob21lIHBhZ2VcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImhvbWVcIl0sIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGVyciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIElmIHdyb25nIGNvbWJpbmFpc29uIG9yIHNlcnZlciBlcnJvclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycmV1ciBzZXJ2ZXVyIG91IG1hdXZhaXNlIGNvbWJpbmFpc29uLlwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gU3RvcCBsb2FkaW5nXG4gICAgICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFwiTWF1dmFpc2UgY29tYmluYWlzb24gY29kZSBwYXRpZW50IC8gbW90IGRlIHBhc3NlXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICApO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gUG91ciBsJ2luc3RhbnQgbGUgYm91dG9uIHZhbGlkZXIgY2hhbmdlIGRlIHBhZ2UgcG91ciBmZWF0dXJlZFxuICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImhvbWVcIl0sIHtcbiAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAyMDAwKTtcblxuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luUGF0aWVudCh0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHJlcyAhPSBcIlwiKXtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tYmluYWlzb24gY29kZVBhdGllbnQvbW90RGVQYXNzZSBjb3JyZWN0ZS5cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBXcml0ZSBpbmZvcyBpbiBsb2NhbCBmaWxlXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmVjcml0SW5mb3MoXCJPcnRoYWxpc1wiLCBcInBhdGllbnRcIiwgcmVzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZW0gaW4gR2xvYmFsc1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nbG9iYWxpc2VJbmZvcyhcIk9ydGhhbGlzXCIsIFwicGF0aWVudFwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIFJlZGlyZWN0IHRvIGhvbWUgcGFnZVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImhvbWVcIl0sIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVMZWZ0XCIsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tYmluYWlzb24gY29kZVBhdGllbnQvbW90RGVQYXNzZSBpbmNvcnJlY3RlLlwiKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGFsZXJ0KFwiQ29tYmluYWlzb24gY29kZVBhdGllbnQvbW90RGVQYXNzZSBpbmNvcnJlY3RlLCB2ZXVpbGxleiBlbnRyZXIgdW5lIGNvbWJpbmFpc29uIHZhbGlkZS5cIik7XG4gICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGVyciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyZXVyIHNlcnZldXIuXCIpXG4gICAgICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyIHNlcnZldXJcIik7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgKTtcbiAgICB9XG59Il19