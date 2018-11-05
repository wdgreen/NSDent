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
        this.isVisible = true; // pour passer d'un utilisateur à l'autre
        this.isVisible2 = false; // pour passer d'un utilisateur à l'autre
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
        __metadata("design:paramtypes", [router_1.Router, router_2.RouterExtensions])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsMENBQXdEO0FBQ3hELHNEQUErRDtBQUMvRCx5RUFBeUc7QUFDekcsNENBQXdDO0FBQ3hDLGtEQUFvRDtBQUNwRCw2QkFBNkI7QUFDN0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFRekQ7SUFPSSxzQkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUh2RSxjQUFTLEdBQVksSUFBSSxDQUFDLENBQUkseUNBQXlDO1FBQ3ZFLGVBQVUsR0FBWSxLQUFLLENBQUMsQ0FBSSx5Q0FBeUM7UUFHNUUsb0RBQW9EO0lBQ3hELENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksa0NBQWtDO1FBQ2xDLDZFQUE2RTtRQUM3RSxrQkFBa0I7UUFDbEIsK0NBQStDO1FBQy9DLG1EQUFtRDtRQUNuRCwyREFBMkQ7UUFDM0Qsd0NBQXdDO1FBQ3hDLFlBQVk7UUFDWixnREFBZ0Q7UUFDaEQsa0RBQWtEO1FBQ2xELGdEQUFnRDtRQUNoRCxpRkFBaUY7UUFDakYsaUVBQWlFO1FBQ2pFLFFBQVE7UUFDUixXQUFXO1FBQ1gsb0JBQW9CO1FBQ3BCLG1FQUFtRTtRQUNuRSxvQ0FBb0M7UUFDcEMsaUNBQWlDO1FBQ2pDLG1EQUFtRDtRQUNuRCxvQ0FBb0M7UUFDcEMsK0NBQStDO1FBQy9DLHVCQUF1QjtRQUN2QixnREFBZ0Q7UUFDaEQsaUJBQWlCO1FBQ2pCLDJDQUEyQztRQUMzQyxrREFBa0Q7UUFDbEQsaURBQWlEO1FBQ2pELHlEQUF5RDtRQUN6RCx1RUFBdUU7UUFDdkUsY0FBYztRQUNkLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsd0RBQXdEO1FBQ3hELFFBQVE7UUFDUixLQUFLO1FBcENULGlCQTRDQztRQU5HLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLG1EQUFzQixFQUFFLENBQUM7UUFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNO2FBQ2IsSUFBSSxDQUFDLGtCQUFNLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxLQUFLLFlBQVksc0JBQWEsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO2FBQzVELFNBQVMsQ0FBQyxVQUFDLEtBQW9CLElBQUssT0FBQSxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxpQkFBaUIsRUFBNUMsQ0FBNEMsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxzQkFBSSw4Q0FBb0I7YUFBeEI7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDO1FBQ3RDLENBQUM7OztPQUFBO0lBRUQsMENBQW1CLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEtBQUssR0FBRyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxtQ0FBWSxHQUFaLFVBQWEsWUFBb0I7UUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzNDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO1FBRUgsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUErQjtJQUMvQix3Q0FBaUIsR0FBakI7UUFDSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUUsSUFBSSxDQUFDO1FBQzFCLENBQUM7UUFBQyxJQUFJLENBQUUsQ0FBQztZQUNMLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUUsS0FBSyxDQUFDO1FBQzNCLENBQUM7SUFFVCxDQUFDO0lBQ0QsK0JBQStCO0lBQy9CLHlDQUFrQixHQUFsQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRSxLQUFLLENBQUM7WUFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQztRQUFDLElBQUksQ0FBRSxDQUFDO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRSxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQztJQUVULENBQUM7SUFqR1EsWUFBWTtRQUx4QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FROEIsZUFBTSxFQUE0Qix5QkFBZ0I7T0FQckUsWUFBWSxDQWtHeEI7SUFBRCxtQkFBQztDQUFBLEFBbEdELElBa0dDO0FBbEdZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgRHJhd2VyVHJhbnNpdGlvbkJhc2UsIFJhZFNpZGVEcmF3ZXIsIFNsaWRlSW5PblRvcFRyYW5zaXRpb24gfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG4vLyBGaXJlYmFzZSBwdXNoIG5vdGlmaWNhdGlvblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfYWN0aXZhdGVkVXJsOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfc2lkZURyYXdlclRyYW5zaXRpb246IERyYXdlclRyYW5zaXRpb25CYXNlO1xuXG4gICAgcHVibGljIGlzVmlzaWJsZTogYm9vbGVhbiA9IHRydWU7ICAgIC8vIHBvdXIgcGFzc2VyIGQndW4gdXRpbGlzYXRldXIgw6AgbCdhdXRyZVxuICAgIHB1YmxpYyBpc1Zpc2libGUyOiBib29sZWFuID0gZmFsc2U7ICAgIC8vIHBvdXIgcGFzc2VyIGQndW4gdXRpbGlzYXRldXIgw6AgbCdhdXRyZVxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBzZXJ2aWNlcy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gLy8gVXNlZCBmb3Igbm90aWZpY2F0aW9uIHN5c3RlbVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFwcGxpY2F0aW9uIGxhbmPDqWUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XCIpO1xuICAgICAgICAvLyBmaXJlYmFzZS5pbml0KHtcbiAgICAgICAgLy8gICAgIHNob3dOb3RpZmljYXRpb25zV2hlbkluRm9yZWdyb3VuZDogdHJ1ZSxcbiAgICAgICAgLy8gICAgIC8vIG9uUHVzaFRva2VuUmVjZWl2ZWRDYWxsYmFjazogKHRva2VuKSA9PiB7XG4gICAgICAgIC8vICAgICAvLyAgICAgY29uc29sZS5sb2coXCJGaXJlYmFzZSBwdXNoIHRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgLy8gICAgIC8vICAgICBHbG9iYWxzLnB1c2hUb2tlbiA9IHRva2VuO1xuICAgICAgICAvLyAgICAgLy8gfSxcbiAgICAgICAgLy8gICAgIG9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2s6IChtZXNzYWdlKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYFRpdGxlOiAke21lc3NhZ2UudGl0bGV9YCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYEJvZHk6ICR7bWVzc2FnZS5ib2R5fWApO1xuICAgICAgICAvLyAgICAgICAgIC8vIGlmIHlvdXIgc2VydmVyIHBhc3NlZCBhIGN1c3RvbSBwcm9wZXJ0eSBjYWxsZWQgJ2ZvbycsIHRoZW4gZG8gdGhpczpcbiAgICAgICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhgVmFsdWUgb2YgJ2Zvbyc6ICR7bWVzc2FnZS5kYXRhLmZvb31gKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSkudGhlbihcbiAgICAgICAgLy8gICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgLy8gICAgICAgICBmaXJlYmFzZS5nZXRDdXJyZW50UHVzaFRva2VuKCkudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAvLyBEZWZpbmUgQXBwYXJlaWwuT1NcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGFwcC5hbmRyb2lkKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBHbG9iYWxzLmFwcGFyZWlsLm9zID0gXCJhbmRyb2lkXCI7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXBwLmlvcykge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgR2xvYmFscy5hcHBhcmVpbC5vcyA9IFwiaW9zXCI7XG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBHbG9iYWxzLmFwcGFyZWlsLm9zID0gXCJhdXRyZVwiXG4gICAgICAgIC8vICAgICAgICAgICAgIH07XG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIERlZmluZSBBcHBhcmVpbC5QdXNoVG9rZW5cbiAgICAgICAgLy8gICAgICAgICAgICAgR2xvYmFscy5hcHBhcmVpbC5wdXNoVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaXJlYmFzZS5pbml0IGRvbmVcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiT1M6IFwiICsgR2xvYmFscy5hcHBhcmVpbC5vcyk7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicHVzaFRva2VuOiBcIiArIEdsb2JhbHMuYXBwYXJlaWwucHVzaFRva2VuKTtcbiAgICAgICAgLy8gICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgIH0sXG4gICAgICAgIC8vICAgICBlcnJvciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coYGZpcmViYXNlLmluaXQgZXJyb3I6ICR7ZXJyb3J9YCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBcIi9ob21lXCI7XG4gICAgICAgIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IGFueSkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOYXZpZ2F0aW9uRW5kKSA9PiB0aGlzLl9hY3RpdmF0ZWRVcmwgPSBldmVudC51cmxBZnRlclJlZGlyZWN0cyk7XG4gICAgfVxuXG4gICAgZ2V0IHNpZGVEcmF3ZXJUcmFuc2l0aW9uKCk6IERyYXdlclRyYW5zaXRpb25CYXNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpZGVEcmF3ZXJUcmFuc2l0aW9uO1xuICAgIH1cblxuICAgIGlzQ29tcG9uZW50U2VsZWN0ZWQodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FjdGl2YXRlZFVybCA9PT0gdXJsO1xuICAgIH1cblxuICAgIG9uTmF2SXRlbVRhcChuYXZJdGVtUm91dGU6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICAvKiBQb3VyIGNoYW5nZXIgZCd1dGlsaXNhdGV1ciovXG4gICAgY2hhbmdlVXRpbGlzYXRldXIoKTogdm9pZCAge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMiA9dHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPWZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgLyogUG91ciBjaGFuZ2VyIGQndXRpbGlzYXRldXIqL1xuICAgIGNoYW5nZVV0aWxpc2F0ZXVyMigpOiB2b2lkICB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMiA9dHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iXX0=