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
        var _this = this;
        // // Pour l'instant le bouton valider change de page pour featured
        // this.routerExtensions.navigate(["featured"], {
        //     transition: {
        //         name: "slideLeft",
        //         duration: 200
        //     }
        // });
        this.authService.loginPatient(this.formulaire)
            .subscribe(function (res) {
            if (res != "") {
                console.log("Combinaison codePatient/motDePasse correcte.");
                // Write infos in local file
                _this.dataService.ecritInfos("Orthalis", "patient", res);
                // Store them in Globals
                _this.dataService.globaliseInfos("Orthalis", "patient");
                // Redirect to home page
                _this.routerExtensions.navigate(["home"], {
                    transition: {
                        name: "slideLeft",
                        duration: 200
                    }
                });
            }
            else {
                console.log("Combinaison codePatient/motDePasse incorrecte.");
                alert("Combinaison codePatient/motDePasse incorrecte, veuillez entrer une combinaison valide.");
            }
        }, function (err) {
            console.log("Erreur serveur.");
            alert("Erreur serveur");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBQzFELDREQUEwRDtBQVExRDtJQUtJLHVCQUFvQixnQkFBaUMsRUFDakMsV0FBdUIsRUFDdkIsV0FBdUI7UUFGdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUNqQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUwzQyxlQUFVLEdBQVMsRUFBQyxhQUFhLEVBQUMsRUFBRTtZQUNoQixZQUFZLEVBQUMsRUFBRSxFQUFFLENBQUM7UUFLbEMscURBQXFEO0lBQ3pELENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCw4QkFBTSxHQUFOO1FBQUEsaUJBa0NDO1FBakNHLG1FQUFtRTtRQUNuRSxpREFBaUQ7UUFDakQsb0JBQW9CO1FBQ3BCLDZCQUE2QjtRQUM3Qix3QkFBd0I7UUFDeEIsUUFBUTtRQUNSLE1BQU07UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3pDLFNBQVMsQ0FDTixVQUFBLEdBQUc7WUFDQyxFQUFFLENBQUEsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7Z0JBQzVELDRCQUE0QjtnQkFDNUIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDeEQsd0JBQXdCO2dCQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZELHdCQUF3QjtnQkFDeEIsS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUNyQyxVQUFVLEVBQUU7d0JBQ1IsSUFBSSxFQUFFLFdBQVc7d0JBQ2pCLFFBQVEsRUFBRSxHQUFHO3FCQUNoQjtpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2dCQUM5RCxLQUFLLENBQUMsd0ZBQXdGLENBQUMsQ0FBQztZQUNwRyxDQUFDO1FBQ0wsQ0FBQyxFQUNELFVBQUEsR0FBRztZQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUM5QixLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQ0osQ0FBQztJQUNWLENBQUM7SUFqRFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FNdUMseUJBQWdCO1lBQ3JCLDBCQUFXO1lBQ1gsMEJBQVc7T0FQbEMsYUFBYSxDQWtEekI7SUFBRCxvQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCIuLi9zZXJ2aWNlcy9tb2RlbHMvYXV0aC5tb2RlbGVcIjtcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZGF0YS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkF1dGhcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXV0aC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hdXRoLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmb3JtdWxhaXJlOiBBdXRoID0ge1wiY29kZVBhdGllbnRcIjpcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJtb3REZVBhc3NlXCI6XCJcIiB9O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOlJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGRhdGFTZXJ2aWNlOkRhdGFTZXJ2aWNlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgLy8gLy8gUG91ciBsJ2luc3RhbnQgbGUgYm91dG9uIHZhbGlkZXIgY2hhbmdlIGRlIHBhZ2UgcG91ciBmZWF0dXJlZFxuICAgICAgICAvLyB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZmVhdHVyZWRcIl0sIHtcbiAgICAgICAgLy8gICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICBuYW1lOiBcInNsaWRlTGVmdFwiLFxuICAgICAgICAvLyAgICAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9naW5QYXRpZW50KHRoaXMuZm9ybXVsYWlyZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzICE9IFwiXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21iaW5haXNvbiBjb2RlUGF0aWVudC9tb3REZVBhc3NlIGNvcnJlY3RlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdyaXRlIGluZm9zIGluIGxvY2FsIGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZWNyaXRJbmZvcyhcIk9ydGhhbGlzXCIsIFwicGF0aWVudFwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlbSBpbiBHbG9iYWxzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTZXJ2aWNlLmdsb2JhbGlzZUluZm9zKFwiT3J0aGFsaXNcIiwgXCJwYXRpZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVkaXJlY3QgdG8gaG9tZSBwYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiaG9tZVwiXSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb21iaW5haXNvbiBjb2RlUGF0aWVudC9tb3REZVBhc3NlIGluY29ycmVjdGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJDb21iaW5haXNvbiBjb2RlUGF0aWVudC9tb3REZVBhc3NlIGluY29ycmVjdGUsIHZldWlsbGV6IGVudHJlciB1bmUgY29tYmluYWlzb24gdmFsaWRlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJldXIgc2VydmV1ci5cIilcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJldXIgc2VydmV1clwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgIH1cbn0iXX0=