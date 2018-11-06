"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var session_guard_1 = require("~/app/services/session.guard");
var routes = [
    { path: "", redirectTo: "/search", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule", canActivate: [session_guard_1.SessionGuard] },
    { path: "auth", loadChildren: "~/app/auth/auth.module#AuthModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: "chat", loadChildren: "~/app/chat/chat.module#ChatModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUN2RSw4REFBNEQ7QUFFNUQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFFLFdBQVcsRUFBQyxDQUFDLDRCQUFZLENBQUMsRUFBRTtJQUNuRyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx5Q0FBeUMsRUFBRTtJQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHlDQUF5QyxFQUFFO0lBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO0NBQ3RFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFNlc3Npb25HdWFyZCB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9zZXNzaW9uLmd1YXJkXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvc2VhcmNoXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwiLCBjYW5BY3RpdmF0ZTpbU2Vzc2lvbkd1YXJkXSB9LFxuICAgIHsgcGF0aDogXCJhdXRoXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9hdXRoL2F1dGgubW9kdWxlI0F1dGhNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJob21lXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9ob21lL2hvbWUubW9kdWxlI0hvbWVNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJicm93c2VcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2Jyb3dzZS9icm93c2UubW9kdWxlI0Jyb3dzZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNlYXJjaFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc2VhcmNoL3NlYXJjaC5tb2R1bGUjU2VhcmNoTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiZmVhdHVyZWRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2ZlYXR1cmVkL2ZlYXR1cmVkLm1vZHVsZSNGZWF0dXJlZE1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInNldHRpbmdzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zZXR0aW5ncy9zZXR0aW5ncy5tb2R1bGUjU2V0dGluZ3NNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJjaGF0XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jaGF0L2NoYXQubW9kdWxlI0NoYXRNb2R1bGVcIiB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19