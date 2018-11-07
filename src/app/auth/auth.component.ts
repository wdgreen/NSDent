import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from "../services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";
import { DataService } from "~/app/services/data.service";
import { ConnectiviteService } from "../services/connectivite.service";
import { Globals } from "~/app/services/globals";


@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth-common.css"]
})
export class AuthComponent implements OnInit {

    chargement: boolean;
    formulaire: Auth = 
    {   "codePatient": "",
        "motDePasse": "" 
    };

    constructor(private routerExtensions:RouterExtensions,
                private authService:AuthService,
                private dataService:DataService,
                private connectiviteService:ConnectiviteService) {
        this.chargement = Globals.chargement;
    }

    ngOnInit() {
        this.chargement = false;
    }

    submit() {
        this.chargement = true;
        Globals.chargement = this.chargement;
        
        // If user connected, try to get informations from server and write them on local file
        if (this.connectiviteService.testeConnectivite()) {
            this.authService.loginPatient(this.formulaire)
            .subscribe(
                // If right username/password
                res => {
                    console.log("Bonne combinaison codePatient/motDePasse, voici la réponse : " + res);
                    // Write infos in local file
                    this.dataService.ecritInfos("Orthalis", "patient", res );
                    // Store them in Globals
                    this.dataService.globaliseInfos("Orthalis", "patient");
                    // Redirect to home page and clear navigation history
                    this.routerExtensions.navigate(["home"], {
                        clearHistory: true,
                        transition: {
                            name: "fade"
                        }
                    });
                },
                // If wrong username/password
                err => {
                    // Stop loading and let user retry
                    console.log("Erreur serveur ou mauvaise combinaison.");
                    alert("Mauvaise combinaison code patient / mot de passe");
                    this.chargement = false;
                }
            );
        // If user is not connected, let user cry
        } else {
            alert("Veuillez vous connecter à internet pour récupérer vos informations");
        }
    }
}