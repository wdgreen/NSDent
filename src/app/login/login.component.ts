import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Login } from "~/app/services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";
import { DataService } from "~/app/services/data.service";
import { ConnectiviteService } from "../services/connectivite.service";
import { Globals } from "../services/globals";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent implements OnInit {

    chargement: boolean;
    formulaire: Login =
        {
            "codeCabinet": ""
        };

    constructor(private routerExtensions: RouterExtensions,
        private authService: AuthService,
        private dataService: DataService,
        private connectiviteService: ConnectiviteService) {
            
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
            this.authService.loginCabinet(this.formulaire)
            .subscribe(
                // Server work
                res => {
                    // If right codeCabinet
                    if (res != "") {
                        console.log("Bon code cabinet, voici la réponse : "+res);
                        // Write infos in local file
                        this.dataService.ecritInfos("Orthalis", "cabinet", res);
                        // Store them in Globals
                        this.dataService.globaliseInfos("Orthalis", "cabinet");
                        // Redirect to user authentifcation page
                        this.routerExtensions.navigate(["auth"], {
                            clearHistory: true,
                            transition: {
                                name: "fade"
                            }
                        });
                    // If wrong codeCabinet
                    } else {
                        // Stop loading and let user retry
                        console.log("Mauvais code cabinet.")
                        alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");
                        this.chargement = false;
                    }
                },
                // Server doesn't work
                err => {
                    // Stop loading and let user cry
                    console.log("Erreur serveur.")
                    alert("Erreur serveur");
                    this.chargement = false;
                }
            )
        // If user is not connected, stop loading and let user cry
        } else {
            alert("Veuillez vous connecter à internet pour récupérer vos informations");
            this.chargement = false;
        }
    }
}