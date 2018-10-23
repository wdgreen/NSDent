import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from "../services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth-common.css"]
})
export class AuthComponent implements OnInit {

    formulaire: Auth;

    constructor(private routerExtensions:RouterExtensions,
                private authService:AuthService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // Init your component properties here.
    }

    submit() {
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
                name: "fade"
            }
        });
    }
}