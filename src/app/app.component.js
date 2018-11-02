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
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Used for notification system
        console.log("application lancée =======================================");
        firebase.init({
            showNotificationsWhenInForeground: true,
            // onPushTokenReceivedCallback: (token) => {
            //     console.log("Firebase push token: " + token);
            //     Globals.pushToken = token;
            // },
            onMessageReceivedCallback: function (message) {
                console.log("Title: " + message.title);
                console.log("Body: " + message.body);
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
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsNENBQXdDO0FBQ3hDLGtEQUFvRDtBQUNwRCw2QkFBNkI7QUFDN0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsa0RBQWlEO0FBT2pEO0lBSUksc0JBQW9CLE1BQWMsRUFBVSxnQkFBa0M7UUFBMUQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDMUUsb0RBQW9EO0lBQ3hELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBNENDO1FBM0NHLCtCQUErQjtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDREQUE0RCxDQUFDLENBQUM7UUFDMUUsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNWLGlDQUFpQyxFQUFFLElBQUk7WUFDdkMsNENBQTRDO1lBQzVDLG9EQUFvRDtZQUNwRCxpQ0FBaUM7WUFDakMsS0FBSztZQUNMLHlCQUF5QixFQUFFLFVBQUMsT0FBTztnQkFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFVLE9BQU8sQ0FBQyxLQUFPLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLE9BQU8sQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDckMsc0VBQXNFO2dCQUN0RSxzREFBc0Q7WUFDMUQsQ0FBQztTQUNKLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxRQUFRO1lBQ0osUUFBUSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsS0FBYTtnQkFDOUMscUJBQXFCO2dCQUNyQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztvQkFDZCxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsU0FBUyxDQUFDO2dCQUNwQyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDakIsaUJBQU8sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztnQkFDaEMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFBO2dCQUNqQyxDQUFDO2dCQUFBLENBQUM7Z0JBQ0YsNEJBQTRCO2dCQUM1QixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGlCQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFDRCxVQUFBLEtBQUs7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUF3QixLQUFPLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQ0osQ0FBQztRQUVGLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1EQUFzQixFQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsWUFBb0I7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzNDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQXZFUSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG9CQUFvQjtTQUNwQyxDQUFDO3lDQUs4QixlQUFNLEVBQTRCLHlCQUFnQjtPQUpyRSxZQUFZLENBd0V4QjtJQUFELG1CQUFDO0NBQUEsQUF4RUQsSUF3RUM7QUF4RVksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEcmF3ZXJUcmFuc2l0aW9uQmFzZSwgUmFkU2lkZURyYXdlciwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbiB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbi8vIEZpcmViYXNlIHB1c2ggbm90aWZpY2F0aW9uXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9hY3RpdmF0ZWRVcmw6IHN0cmluZztcbiAgICBwcml2YXRlIF9zaWRlRHJhd2VyVHJhbnNpdGlvbjogRHJhd2VyVHJhbnNpdGlvbkJhc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHNlcnZpY2VzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBVc2VkIGZvciBub3RpZmljYXRpb24gc3lzdGVtXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXBwbGljYXRpb24gbGFuY8OpZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cIik7XG4gICAgICAgIGZpcmViYXNlLmluaXQoe1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbnNXaGVuSW5Gb3JlZ3JvdW5kOiB0cnVlLFxuICAgICAgICAgICAgLy8gb25QdXNoVG9rZW5SZWNlaXZlZENhbGxiYWNrOiAodG9rZW4pID0+IHtcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIkZpcmViYXNlIHB1c2ggdG9rZW46IFwiICsgdG9rZW4pO1xuICAgICAgICAgICAgLy8gICAgIEdsb2JhbHMucHVzaFRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgb25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjazogKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgVGl0bGU6ICR7bWVzc2FnZS50aXRsZX1gKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQm9keTogJHttZXNzYWdlLmJvZHl9YCk7XG4gICAgICAgICAgICAgICAgLy8gaWYgeW91ciBzZXJ2ZXIgcGFzc2VkIGEgY3VzdG9tIHByb3BlcnR5IGNhbGxlZCAnZm9vJywgdGhlbiBkbyB0aGlzOlxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBWYWx1ZSBvZiAnZm9vJzogJHttZXNzYWdlLmRhdGEuZm9vfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgaW5zdGFuY2UgPT4ge1xuICAgICAgICAgICAgICAgIGZpcmViYXNlLmdldEN1cnJlbnRQdXNoVG9rZW4oKS50aGVuKCh0b2tlbjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIERlZmluZSBBcHBhcmVpbC5PU1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXBwLmFuZHJvaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbHMuYXBwYXJlaWwub3MgPSBcImFuZHJvaWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhcHAuaW9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBHbG9iYWxzLmFwcGFyZWlsLm9zID0gXCJpb3NcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEdsb2JhbHMuYXBwYXJlaWwub3MgPSBcImF1dHJlXCJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gRGVmaW5lIEFwcGFyZWlsLlB1c2hUb2tlblxuICAgICAgICAgICAgICAgICAgICBHbG9iYWxzLmFwcGFyZWlsLnB1c2hUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcmViYXNlLmluaXQgZG9uZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPUzogXCIgKyBHbG9iYWxzLmFwcGFyZWlsLm9zKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwdXNoVG9rZW46IFwiICsgR2xvYmFscy5hcHBhcmVpbC5wdXNoVG9rZW4pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgZmlyZWJhc2UuaW5pdCBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2FjdGl2YXRlZFVybCA9IFwiL2hvbWVcIjtcbiAgICAgICAgdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAgICAgLnBpcGUoZmlsdGVyKChldmVudDogYW55KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IE5hdmlnYXRpb25FbmQpID0+IHRoaXMuX2FjdGl2YXRlZFVybCA9IGV2ZW50LnVybEFmdGVyUmVkaXJlY3RzKTtcbiAgICB9XG5cbiAgICBnZXQgc2lkZURyYXdlclRyYW5zaXRpb24oKTogRHJhd2VyVHJhbnNpdGlvbkJhc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2lkZURyYXdlclRyYW5zaXRpb247XG4gICAgfVxuXG4gICAgaXNDb21wb25lbnRTZWxlY3RlZCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZhdGVkVXJsID09PSB1cmw7XG4gICAgfVxuXG4gICAgb25OYXZJdGVtVGFwKG5hdkl0ZW1Sb3V0ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbbmF2SXRlbVJvdXRlXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==