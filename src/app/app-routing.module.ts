import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SessionGuard } from "~/app/services/session.guard";

const routes: Routes = [
    { path: "", redirectTo: "/browse", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule", canActivate:[SessionGuard] },
    { path: "auth", loadChildren: "~/app/auth/auth.module#AuthModule" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
