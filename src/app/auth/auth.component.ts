import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from "../services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";
import { DataService } from "~/app/services/data.service";
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
                private dataService:DataService) {
        this.chargement = Globals.chargement;
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        this.chargement = false;
    }

    submit() {
        this.chargement = true;
        Globals.chargement = this.chargement;
        
        // dans le header : username & password
        // par méthode GET : os & token
        
        this.authService.loginPatient(this.formulaire)
            .subscribe(
                res => {
                    console.log("Bonne combinaison codePatient/motDePasse");
                    // Write infos in local file
                    this.dataService.ecritInfos("Orthalis", "patient", res );
                    // Store them in Globals
                    this.dataService.globaliseInfos("Orthalis", "patient");
                    // Redirect to home page
                    this.routerExtensions.navigate(["home"], {
                        clearHistory: true,
                        transition: {
                            name: "fade"
                        }
                    });
                },
                err => {
                    console.log("Erreur serveur ou mauvaise combinaison.")
                    alert("Mauvaise combinaison code patient / mot de passe");

                    this.chargement = false;
                }
            );

        // setTimeout(() => {
        //     // Pour l'instant le bouton valider change de page pour featured
        //     this.routerExtensions.navigate(["home"], {
        //         clearHistory: true,
        //         transition: {
        //             name: "fade",
        //             duration: 200
        //         }
        //     });
        // }, 2000);

        // this.authService.loginPatient(this.formulaire)
        //     .subscribe(
        //         res => {
        //             if(res != ""){
        //                 console.log("Combinaison codePatient/motDePasse correcte.");
        //                 // Write infos in local file
        //                 this.dataService.ecritInfos("Orthalis", "patient", res);
        //                 // Store them in Globals
        //                 this.dataService.globaliseInfos("Orthalis", "patient");
        //                 // Redirect to home page
        //                 this.routerExtensions.navigate(["home"], {
        //                     transition: {
        //                         name: "slideLeft",
        //                         duration: 200
        //                     }
        //                 });
        //             } else {
        //                 console.log("Combinaison codePatient/motDePasse incorrecte.");
        //                 alert("Combinaison codePatient/motDePasse incorrecte, veuillez entrer une combinaison valide.");
        //             }
        //         },
        //         err => {
        //             console.log("Erreur serveur.")
        //             alert("Erreur serveur");
        //         }
        //     );
    }
}