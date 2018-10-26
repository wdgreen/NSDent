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
                name: "slideLeft",
                duration: 200
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFHL0QsNERBQTBEO0FBUTFEO0lBSUksdUJBQW9CLGdCQUFpQyxFQUNqQyxXQUF1QjtRQUR2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQ2pDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZDLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsOEJBQU0sR0FBTjtRQUNJLDhDQUE4QztRQUM5Qyw4Q0FBOEM7UUFFOUMsOENBQThDO1FBQzlDLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsc0NBQXNDO1FBQ3RDLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsZ0RBQWdEO1FBQ2hELGdDQUFnQztRQUNoQyxZQUFZO1FBQ1osS0FBSztRQUVMLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDekMsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsR0FBRzthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuQ1EsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzt5Q0FLdUMseUJBQWdCO1lBQ3JCLDBCQUFXO09BTGxDLGFBQWEsQ0FvQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztBQXBDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEF1dGggfSBmcm9tIFwiLi4vc2VydmljZXMvbW9kZWxzL2F1dGgubW9kZWxlXCI7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQXV0aFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9hdXRoLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2F1dGgtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGZvcm11bGFpcmU6IEF1dGg7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOkF1dGhTZXJ2aWNlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgLy8gQWpvdXRlciA6IFsobmdNb2RlbCldPVwiZm9ybXVsYWlyZS51c2VybmFtZVwiXG4gICAgICAgIC8vICAgICAgICAgICBbKG5nTW9kZWwpXT1cImZvcm11bGFpcmUucGFzc3dvcmRcIlxuXG4gICAgICAgIC8vIHRoaXMuYXV0aFNlcnZpY2UubG9naW5Vc2VyKHRoaXMuZm9ybXVsYWlyZSlcbiAgICAgICAgLy8gICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICAgICAgcmVzID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRva2VuKTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGVyciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGFsZXJ0KFwiaWRlbnRpZmlhbnRzIGluY29ycmVjdHNcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyApO1xuXG4gICAgICAgIC8vIFBvdXIgbCdpbnN0YW50IGxlIGJvdXRvbiB2YWxpZGVyIGNoYW5nZSBkZSBwYWdlIHBvdXIgZmVhdHVyZWRcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZlYXR1cmVkXCJdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZUxlZnRcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=