import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
// import { NavigationEnd, Router } from "@angular/router";
// import * as app from "tns-core-modules/application";

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth-common.css"]
})
export class AuthComponent implements OnInit {

    constructor(private routerExtensions:RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // Init your component properties here.
    }

    submit() {
        // Pour l'instant le bouton valider change de page pour featured
        this.routerExtensions.navigate(["featured"], {
            transition: {
                name: "fade"
            }
        });
    }
    // onDrawerButtonTap(): void {
    //     const sideDrawer = <RadSideDrawer>app.getRootView();
    //     sideDrawer.showDrawer();
    // }
}