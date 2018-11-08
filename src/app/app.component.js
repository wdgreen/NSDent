"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var nativescript_ui_sidedrawer_1 = require("nativescript-ui-sidedrawer");
var operators_1 = require("rxjs/operators");
var app = require("tns-core-modules/application");
// Firebase push notification
var firebase = require("nativescript-plugin-firebase");
var globals_1 = require("~/app/services/globals");
var connectivite_service_1 = require("./services/connectivite.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions, 
    // Used for notification system
    connectiviteService) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.connectiviteService = connectiviteService;
        this.isVisible = true; // pour passer d'un utilisateur à l'autre
        this.isVisible2 = false; // pour passer d'un utilisateur à l'autre
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("application lancée =======================================");
        // If connection, initialize Firebase
        if (this.connectiviteService.testeConnectivite()) {
            firebase.init({
                showNotificationsWhenInForeground: true,
                onMessageReceivedCallback: function (message) {
                    console.log("Notification re\u00E7ue : Title = " + message.title + ", Body = " + message.body);
                    // if your server passed a custom property called 'foo', then do this:
                    // console.log(`Value of 'foo': ${message.data.foo}`);
                }
            }).then(function (instance) {
                firebase.getCurrentPushToken().then(function (token) {
                    // Define Appareil.OS
                    if (app.android) {
                        globals_1.Globals.appareil.os = "android";
                    }
                    else if (app.ios) {
                        globals_1.Globals.appareil.os = "ios";
                    }
                    else {
                        globals_1.Globals.appareil.os = "autre";
                    }
                    ;
                    // Define Appareil.PushToken
                    globals_1.Globals.appareil.pushToken = token;
                    console.log("firebase.init done");
                    console.log("OS: " + globals_1.Globals.appareil.os);
                    console.log("pushToken: " + globals_1.Globals.appareil.pushToken);
                });
            }, function (error) {
                console.log("firebase.init error: " + error);
            });
            // If no connection, do nothing and continue
        }
        else {
            console.log('Hors ligne : Pas de Firebase :(');
        }
        this._activatedUrl = "/home";
        this._sideDrawerTransition = new nativescript_ui_sidedrawer_1.SlideInOnTopTransition();
        this.router.events
            .pipe(operators_1.filter(function (event) { return event instanceof router_1.NavigationEnd; }))
            .subscribe(function (event) { return _this._activatedUrl = event.urlAfterRedirects; });
    };
    Object.defineProperty(AppComponent.prototype, "sideDrawerTransition", {
        get: function () {
            return this._sideDrawerTransition;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.isComponentSelected = function (url) {
        return this._activatedUrl === url;
    };
    AppComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    /* Pour changer d'utilisateur*/
    AppComponent.prototype.changeUtilisateur = function () {
        if (this.isVisible) {
            this.isVisible = false;
            this.isVisible2 = true;
        }
        else {
            this.isVisible = true;
            this.isVisible2 = false;
        }
    };
    /* Pour changer d'utilisateur*/
    AppComponent.prototype.changeUtilisateur2 = function () {
        if (this.isVisible2) {
            this.isVisible2 = false;
            this.isVisible = true;
        }
        else {
            this.isVisible2 = true;
            this.isVisible = false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "ns-app",
            templateUrl: "app.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            connectivite_service_1.ConnectiviteService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsNENBQXdDO0FBQ3hDLGtEQUFvRDtBQUNwRCw2QkFBNkI7QUFDN0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsa0RBQWlEO0FBQ2pELHdFQUFxRTtBQU9yRTtJQVFJLHNCQUFvQixNQUFjLEVBQ2QsZ0JBQWtDO0lBQzFDLCtCQUErQjtJQUN2QixtQkFBd0M7UUFIeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQU5yRCxjQUFTLEdBQVksSUFBSSxDQUFDLENBQUkseUNBQXlDO1FBQ3ZFLGVBQVUsR0FBWSxLQUFLLENBQUMsQ0FBSSx5Q0FBeUM7SUFLaEIsQ0FBQztJQUVqRSwrQkFBUSxHQUFSO1FBQUEsaUJBNENDO1FBM0NHLE9BQU8sQ0FBQyxHQUFHLENBQUMsNERBQTRELENBQUMsQ0FBQztRQUMxRSxxQ0FBcUM7UUFDckMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9DLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ1YsaUNBQWlDLEVBQUUsSUFBSTtnQkFDdkMseUJBQXlCLEVBQUUsVUFBQyxPQUFPO29CQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLHVDQUFnQyxPQUFPLENBQUMsS0FBSyxpQkFBWSxPQUFPLENBQUMsSUFBTSxDQUFDLENBQUM7b0JBQ3JGLHNFQUFzRTtvQkFDdEUsc0RBQXNEO2dCQUMxRCxDQUFDO2FBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLFFBQVE7Z0JBQ0osUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtvQkFDOUMscUJBQXFCO29CQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzt3QkFDZCxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO29CQUNwQyxDQUFDO29CQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDakIsaUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztvQkFDaEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDSixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFBO29CQUNqQyxDQUFDO29CQUFBLENBQUM7b0JBQ0YsNEJBQTRCO29CQUM1QixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO29CQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDNUQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQXdCLEtBQU8sQ0FBQyxDQUFDO1lBQ2pELENBQUMsQ0FDSixDQUFDO1lBQ04sNENBQTRDO1FBQzVDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbURBQXNCLEVBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDYixJQUFJLENBQUMsa0JBQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLENBQUM7YUFDNUQsU0FBUyxDQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELHNCQUFJLDhDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxZQUFvQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDM0MsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsK0JBQStCO0lBQy9CLHdDQUFpQixHQUFqQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBRSxDQUFDO1lBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRSxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUVULENBQUM7SUFDRCwrQkFBK0I7SUFDL0IseUNBQWtCLEdBQWxCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsVUFBVSxHQUFFLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDO1FBQUMsSUFBSSxDQUFFLENBQUM7WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFFLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUMzQixDQUFDO0lBRVQsQ0FBQztJQW5HUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQVM4QixlQUFNO1lBQ0kseUJBQWdCO1lBRWIsMENBQW1CO09BWG5ELFlBQVksQ0FvR3hCO0lBQUQsbUJBQUM7Q0FBQSxBQXBHRCxJQW9HQztBQXBHWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBSYWRTaWRlRHJhd2VyLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuLy8gRmlyZWJhc2UgcHVzaCBub3RpZmljYXRpb25cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2dsb2JhbHNcIjtcbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb25uZWN0aXZpdGUuc2VydmljZVwiXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBwdWJsaWMgaXNWaXNpYmxlOiBib29sZWFuID0gdHJ1ZTsgICAgLy8gcG91ciBwYXNzZXIgZCd1biB1dGlsaXNhdGV1ciDDoCBsJ2F1dHJlXG4gICAgcHVibGljIGlzVmlzaWJsZTI6IGJvb2xlYW4gPSBmYWxzZTsgICAgLy8gcG91ciBwYXNzZXIgZCd1biB1dGlsaXNhdGV1ciDDoCBsJ2F1dHJlXG4gICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgIC8vIFVzZWQgZm9yIG5vdGlmaWNhdGlvbiBzeXN0ZW1cbiAgICAgICAgICAgICAgICBwcml2YXRlIGNvbm5lY3Rpdml0ZVNlcnZpY2U6IENvbm5lY3Rpdml0ZVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwbGljYXRpb24gbGFuY8OpZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gICAgICAgIC8vIElmIGNvbm5lY3Rpb24sIGluaXRpYWxpemUgRmlyZWJhc2VcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGl2aXRlU2VydmljZS50ZXN0ZUNvbm5lY3Rpdml0ZSgpKSB7XG4gICAgICAgICAgICBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYE5vdGlmaWNhdGlvbiByZcOndWUgOiBUaXRsZSA9ICR7bWVzc2FnZS50aXRsZX0sIEJvZHkgPSAke21lc3NhZ2UuYm9keX1gKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgeW91ciBzZXJ2ZXIgcGFzc2VkIGEgY3VzdG9tIHByb3BlcnR5IGNhbGxlZCAnZm9vJywgdGhlbiBkbyB0aGlzOlxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgVmFsdWUgb2YgJ2Zvbyc6ICR7bWVzc2FnZS5kYXRhLmZvb31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4oKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmluZSBBcHBhcmVpbC5PU1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwcC5hbmRyb2lkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFscy5hcHBhcmVpbC5vcyA9IFwiYW5kcm9pZFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcHAuaW9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFscy5hcHBhcmVpbC5vcyA9IFwiaW9zXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbHMuYXBwYXJlaWwub3MgPSBcImF1dHJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWZpbmUgQXBwYXJlaWwuUHVzaFRva2VuXG4gICAgICAgICAgICAgICAgICAgICAgICBHbG9iYWxzLmFwcGFyZWlsLnB1c2hUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9TOiBcIiArIEdsb2JhbHMuYXBwYXJlaWwub3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdXNoVG9rZW46IFwiICsgR2xvYmFscy5hcHBhcmVpbC5wdXNoVG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgLy8gSWYgbm8gY29ubmVjdGlvbiwgZG8gbm90aGluZyBhbmQgY29udGludWVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIb3JzIGxpZ25lIDogUGFzIGRlIEZpcmViYXNlIDooJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBcIi9ob21lXCI7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGlzQ29tcG9uZW50U2VsZWN0ZWQodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZFVybCA9PT0gdXJsO1xuICAgIH1cblxuICAgIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICAvKiBQb3VyIGNoYW5nZXIgZCd1dGlsaXNhdGV1ciovXG4gICAgY2hhbmdlVXRpbGlzYXRldXIoKTogdm9pZCAge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMiA9dHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLyogUG91ciBjaGFuZ2VyIGQndXRpbGlzYXRldXIqL1xuICAgIGNoYW5nZVV0aWxpc2F0ZXVyMigpOiB2b2lkICB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMiA9dHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iXX0=