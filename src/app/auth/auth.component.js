"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var auth_service_1 = require("~/app/services/auth.service");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(routerExtensions, authService) {
        this.routerExtensions = routerExtensions;
        this.authService = authService;
        // Use the component constructor to inject providers.
    }
    AuthComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    AuthComponent.prototype.submit = function () {
        // Ajouter : [(ngModel)]="formulaire.username"
        //           [(ngModel)]="formulaire.password"
        // this.authService.loginUser(this.formulaire)
        //     .subscribe(
        //         res => {
        //             console.log(res.token);
        //         },
        //         err => {
        //             alert("identifiants incorrects");
        //             console.log(err);
        //         }
        // );
        // Pour l'instant le bouton valider change de page pour featured
        this.routerExtensions.navigate(["featured"], {
            transition: {
                name: "fade"
            }
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
            auth_service_1.AuthService])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBUTFEO0lBSUksdUJBQW9CLGdCQUFpQyxFQUNqQyxXQUF1QjtRQUR2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZDLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLDhDQUE4QztRQUM5Qyw4Q0FBOEM7UUFFOUMsOENBQThDO1FBQzlDLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsc0NBQXNDO1FBQ3RDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZ0RBQWdEO1FBQ2hELGdDQUFnQztRQUNoQyxZQUFZO1FBQ1osS0FBSztRQUVMLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBbENRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ25DLENBQUM7eUNBS3VDLHlCQUFnQjtZQUNyQiwwQkFBVztPQUxsQyxhQUFhLENBbUN6QjtJQUFELG9CQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7QUFuQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBBdXRoIH0gZnJvbSBcIi4uL3NlcnZpY2VzL21vZGVscy9hdXRoLm1vZGVsZVwiO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkF1dGhcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vYXV0aC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9hdXRoLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQXV0aENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBmb3JtdWxhaXJlOiBBdXRoO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOlJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBhdXRoU2VydmljZTpBdXRoU2VydmljZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIC8vIEFqb3V0ZXIgOiBbKG5nTW9kZWwpXT1cImZvcm11bGFpcmUudXNlcm5hbWVcIlxuICAgICAgICAvLyAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmb3JtdWxhaXJlLnBhc3N3b3JkXCJcblxuICAgICAgICAvLyB0aGlzLmF1dGhTZXJ2aWNlLmxvZ2luVXNlcih0aGlzLmZvcm11bGFpcmUpXG4gICAgICAgIC8vICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgIHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50b2tlbik7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBlcnIgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBhbGVydChcImlkZW50aWZpYW50cyBpbmNvcnJlY3RzXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gKTtcblxuICAgICAgICAvLyBQb3VyIGwnaW5zdGFudCBsZSBib3V0b24gdmFsaWRlciBjaGFuZ2UgZGUgcGFnZSBwb3VyIGZlYXR1cmVkXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJmZWF0dXJlZFwiXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=