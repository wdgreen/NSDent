import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from "~/app/services/models/auth.modele";
import { LoginService } from "~/app/services/login.service";

// import { NavigationEnd, Router } from "@angular/router";
// import * as app from "tns-core-modules/application";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent implements OnInit {

    codeCabinet = "";

    constructor(private routerExtensions:RouterExtensions,
                private loginService:LoginService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // Init your component properties here.
    }

    submit() {
        // Ajouter : [(ngModel)]="formulaire.codeCabinet"

        this.loginService.loginCabinet(this.codeCabinet)
            .subscribe(
                res => {
                    console.log(res);
                },
                err => {
                    alert("Code cabinet incorrect");
                    console.log(err);
                }
        );

        // Pour l'instant le bouton valider change de page pour featured
        this.routerExtensions.navigate(["auth"], {
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