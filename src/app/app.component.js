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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsNENBQXdDO0FBQ3hDLGtEQUFvRDtBQUNwRCw2QkFBNkI7QUFDN0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsa0RBQWlEO0FBQ2pELHdFQUFxRTtBQU9yRTtJQUlJLHNCQUFvQixNQUFjLEVBQ2QsZ0JBQWtDO0lBQzFDLCtCQUErQjtJQUN2QixtQkFBd0M7UUFIeEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFFbEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUFJLENBQUM7SUFFakUsK0JBQVEsR0FBUjtRQUFBLGlCQTRDQztRQTNDRyxPQUFPLENBQUMsR0FBRyxDQUFDLDREQUE0RCxDQUFDLENBQUM7UUFDMUUscUNBQXFDO1FBQ3JDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNWLGlDQUFpQyxFQUFFLElBQUk7Z0JBQ3ZDLHlCQUF5QixFQUFFLFVBQUMsT0FBTztvQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBZ0MsT0FBTyxDQUFDLEtBQUssaUJBQVksT0FBTyxDQUFDLElBQU0sQ0FBQyxDQUFDO29CQUNyRixzRUFBc0U7b0JBQ3RFLHNEQUFzRDtnQkFDMUQsQ0FBQzthQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxRQUFRO2dCQUNKLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWE7b0JBQzlDLHFCQUFxQjtvQkFDckIsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7d0JBQ2QsaUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztvQkFDcEMsQ0FBQztvQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ2pCLGlCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUM7b0JBQ2hDLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ0osaUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQTtvQkFDakMsQ0FBQztvQkFBQSxDQUFDO29CQUNGLDRCQUE0QjtvQkFDNUIsaUJBQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzVELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUNELFVBQUEsS0FBSztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztZQUNqRCxDQUFDLENBQ0osQ0FBQztZQUNOLDRDQUE0QztRQUM1QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUVELElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1EQUFzQixFQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsWUFBb0I7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzNDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXhFUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUs4QixlQUFNO1lBQ0kseUJBQWdCO1lBRWIsMENBQW1CO09BUG5ELFlBQVksQ0F5RXhCO0lBQUQsbUJBQUM7Q0FBQSxBQXpFRCxJQXlFQztBQXpFWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBSYWRTaWRlRHJhd2VyLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuLy8gRmlyZWJhc2UgcHVzaCBub3RpZmljYXRpb25cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2dsb2JhbHNcIjtcbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlcy9jb25uZWN0aXZpdGUuc2VydmljZVwiXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBmb3Igbm90aWZpY2F0aW9uIHN5c3RlbVxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTogQ29ubmVjdGl2aXRlU2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHBsaWNhdGlvbiBsYW5jw6llID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgICAgICAgLy8gSWYgY29ubmVjdGlvbiwgaW5pdGlhbGl6ZSBGaXJlYmFzZVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aXZpdGVTZXJ2aWNlLnRlc3RlQ29ubmVjdGl2aXRlKCkpIHtcbiAgICAgICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgTm90aWZpY2F0aW9uIHJlw6d1ZSA6IFRpdGxlID0gJHttZXNzYWdlLnRpdGxlfSwgQm9keSA9ICR7bWVzc2FnZS5ib2R5fWApO1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB5b3VyIHNlcnZlciBwYXNzZWQgYSBjdXN0b20gcHJvcGVydHkgY2FsbGVkICdmb28nLCB0aGVuIGRvIHRoaXM6XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBWYWx1ZSBvZiAnZm9vJzogJHttZXNzYWdlLmRhdGEuZm9vfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmaW5lIEFwcGFyZWlsLk9TXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbG9iYWxzLmFwcGFyZWlsLm9zID0gXCJhbmRyb2lkXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFwcC5pb3MpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBHbG9iYWxzLmFwcGFyZWlsLm9zID0gXCJpb3NcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2xvYmFscy5hcHBhcmVpbC5vcyA9IFwiYXV0cmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmluZSBBcHBhcmVpbC5QdXNoVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbHMuYXBwYXJlaWwucHVzaFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1M6IFwiICsgR2xvYmFscy5hcHBhcmVpbC5vcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInB1c2hUb2tlbjogXCIgKyBHbG9iYWxzLmFwcGFyZWlsLnB1c2hUb2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAvLyBJZiBubyBjb25uZWN0aW9uLCBkbyBub3RoaW5nIGFuZCBjb250aW51ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hvcnMgbGlnbmUgOiBQYXMgZGUgRmlyZWJhc2UgOignKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlZFVybCA9IFwiL2hvbWVcIjtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkVXJsID09PSB1cmw7XG4gICAgfVxuXG4gICAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==