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
var AppComponent = /** @class */ (function () {
    function AppComponent(router, routerExtensions) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        // Use the component constructor to inject services.
    }
    AppComponent.prototype.ngOnInit = function () {
        // // Used for notification system
        // console.log("application lancée =======================================");
        // firebase.init({
        //     showNotificationsWhenInForeground: true,
        //     // onPushTokenReceivedCallback: (token) => {
        //     //     console.log("Firebase push token: " + token);
        //     //     Globals.pushToken = token;
        //     // },
        //     onMessageReceivedCallback: (message) => {
        //         console.log(`Title: ${message.title}`);
        //         console.log(`Body: ${message.body}`);
        //         // if your server passed a custom property called 'foo', then do this:
        //         // console.log(`Value of 'foo': ${message.data.foo}`);
        //     }
        // }).then(
        //     instance => {
        //         firebase.getCurrentPushToken().then((token: string) => {
        //             // Define Appareil.OS
        //             if (app.android) {
        //                 Globals.appareil.os = "android";
        //             } else if (app.ios) {
        //                 Globals.appareil.os = "ios";
        //             } else {
        //                 Globals.appareil.os = "autre"
        //             };
        //             // Define Appareil.PushToken
        //             Globals.appareil.pushToken = token;
        //             console.log("firebase.init done");
        //             console.log("OS: " + Globals.appareil.os);
        //             console.log("pushToken: " + Globals.appareil.pushToken);
        //         });
        //     },
        //     error => {
        //         console.log(`firebase.init error: ${error}`);
        //     }
        // );
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsNENBQXdDO0FBQ3hDLGtEQUFvRDtBQUNwRCw2QkFBNkI7QUFDN0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQ7SUFJSSxzQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUMxRSxvREFBb0Q7SUFDeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxrQ0FBa0M7UUFDbEMsNkVBQTZFO1FBQzdFLGtCQUFrQjtRQUNsQiwrQ0FBK0M7UUFDL0MsbURBQW1EO1FBQ25ELDJEQUEyRDtRQUMzRCx3Q0FBd0M7UUFDeEMsWUFBWTtRQUNaLGdEQUFnRDtRQUNoRCxrREFBa0Q7UUFDbEQsZ0RBQWdEO1FBQ2hELGlGQUFpRjtRQUNqRixpRUFBaUU7UUFDakUsUUFBUTtRQUNSLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsbUVBQW1FO1FBQ25FLG9DQUFvQztRQUNwQyxpQ0FBaUM7UUFDakMsbURBQW1EO1FBQ25ELG9DQUFvQztRQUNwQywrQ0FBK0M7UUFDL0MsdUJBQXVCO1FBQ3ZCLGdEQUFnRDtRQUNoRCxpQkFBaUI7UUFDakIsMkNBQTJDO1FBQzNDLGtEQUFrRDtRQUNsRCxpREFBaUQ7UUFDakQseURBQXlEO1FBQ3pELHVFQUF1RTtRQUN2RSxjQUFjO1FBQ2QsU0FBUztRQUNULGlCQUFpQjtRQUNqQix3REFBd0Q7UUFDeEQsUUFBUTtRQUNSLEtBQUs7UUFwQ1QsaUJBNENDO1FBTkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksbURBQXNCLEVBQUUsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDYixJQUFJLENBQUMsa0JBQU0sQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLEtBQUssWUFBWSxzQkFBYSxFQUE5QixDQUE4QixDQUFDLENBQUM7YUFDNUQsU0FBUyxDQUFDLFVBQUMsS0FBb0IsSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLGlCQUFpQixFQUE1QyxDQUE0QyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELHNCQUFJLDhDQUFvQjthQUF4QjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCwwQ0FBbUIsR0FBbkIsVUFBb0IsR0FBVztRQUMzQixNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxHQUFHLENBQUM7SUFDdEMsQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxZQUFvQjtRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDM0MsVUFBVSxFQUFFO2dCQUNSLElBQUksRUFBRSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7UUFFSCxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBdkVRLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBSzhCLGVBQU0sRUFBNEIseUJBQWdCO09BSnJFLFlBQVksQ0F3RXhCO0lBQUQsbUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IERyYXdlclRyYW5zaXRpb25CYXNlLCBSYWRTaWRlRHJhd2VyLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuLy8gRmlyZWJhc2UgcHVzaCBub3RpZmljYXRpb25cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2dsb2JhbHNcIjtcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2FjdGl2YXRlZFVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX3NpZGVEcmF3ZXJUcmFuc2l0aW9uOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3Qgc2VydmljZXMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIC8vIFVzZWQgZm9yIG5vdGlmaWNhdGlvbiBzeXN0ZW1cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcHBsaWNhdGlvbiBsYW5jw6llID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVwiKTtcbiAgICAgICAgLy8gZmlyZWJhc2UuaW5pdCh7XG4gICAgICAgIC8vICAgICBzaG93Tm90aWZpY2F0aW9uc1doZW5JbkZvcmVncm91bmQ6IHRydWUsXG4gICAgICAgIC8vICAgICAvLyBvblB1c2hUb2tlblJlY2VpdmVkQ2FsbGJhY2s6ICh0b2tlbikgPT4ge1xuICAgICAgICAvLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiRmlyZWJhc2UgcHVzaCB0b2tlbjogXCIgKyB0b2tlbik7XG4gICAgICAgIC8vICAgICAvLyAgICAgR2xvYmFscy5wdXNoVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgLy8gICAgIC8vIH0sXG4gICAgICAgIC8vICAgICBvbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrOiAobWVzc2FnZSkgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBUaXRsZTogJHttZXNzYWdlLnRpdGxlfWApO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBCb2R5OiAke21lc3NhZ2UuYm9keX1gKTtcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiB5b3VyIHNlcnZlciBwYXNzZWQgYSBjdXN0b20gcHJvcGVydHkgY2FsbGVkICdmb28nLCB0aGVuIGRvIHRoaXM6XG4gICAgICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coYFZhbHVlIG9mICdmb28nOiAke21lc3NhZ2UuZGF0YS5mb299YCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pLnRoZW4oXG4gICAgICAgIC8vICAgICBpbnN0YW5jZSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgZmlyZWJhc2UuZ2V0Q3VycmVudFB1c2hUb2tlbigpLnRoZW4oKHRva2VuOiBzdHJpbmcpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gRGVmaW5lIEFwcGFyZWlsLk9TXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChhcHAuYW5kcm9pZCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgR2xvYmFscy5hcHBhcmVpbC5vcyA9IFwiYW5kcm9pZFwiO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2UgaWYgKGFwcC5pb3MpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIEdsb2JhbHMuYXBwYXJlaWwub3MgPSBcImlvc1wiO1xuICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgR2xvYmFscy5hcHBhcmVpbC5vcyA9IFwiYXV0cmVcIlxuICAgICAgICAvLyAgICAgICAgICAgICB9O1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBEZWZpbmUgQXBwYXJlaWwuUHVzaFRva2VuXG4gICAgICAgIC8vICAgICAgICAgICAgIEdsb2JhbHMuYXBwYXJlaWwucHVzaFRva2VuID0gdG9rZW47XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlyZWJhc2UuaW5pdCBkb25lXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9TOiBcIiArIEdsb2JhbHMuYXBwYXJlaWwub3MpO1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInB1c2hUb2tlbjogXCIgKyBHbG9iYWxzLmFwcGFyZWlsLnB1c2hUb2tlbik7XG4gICAgICAgIC8vICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgZXJyb3IgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGBmaXJlYmFzZS5pbml0IGVycm9yOiAke2Vycm9yfWApO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyApO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fYWN0aXZhdGVkVXJsID0gXCIvaG9tZVwiO1xuICAgICAgICB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBTbGlkZUluT25Ub3BUcmFuc2l0aW9uKCk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgICAgICAucGlwZShmaWx0ZXIoKGV2ZW50OiBhbnkpID0+IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKChldmVudDogTmF2aWdhdGlvbkVuZCkgPT4gdGhpcy5fYWN0aXZhdGVkVXJsID0gZXZlbnQudXJsQWZ0ZXJSZWRpcmVjdHMpO1xuICAgIH1cblxuICAgIGdldCBzaWRlRHJhd2VyVHJhbnNpdGlvbigpOiBEcmF3ZXJUcmFuc2l0aW9uQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zaWRlRHJhd2VyVHJhbnNpdGlvbjtcbiAgICB9XG5cbiAgICBpc0NvbXBvbmVudFNlbGVjdGVkKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmF0ZWRVcmwgPT09IHVybDtcbiAgICB9XG5cbiAgICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxufVxuIl19