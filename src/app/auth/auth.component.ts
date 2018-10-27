import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from "../services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";
import { DataService } from "~/app/services/data.service";

@Component({
    selector: "Auth",
    moduleId: module.id,
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth-common.css"]
})
export class AuthComponent implements OnInit {

    formulaire: Auth = {"codePatient":"",
                        "motDePasse":"" };

    constructor(private routerExtensions:RouterExtensions,
                private authService:AuthService,
                private dataService:DataService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit() {
        // Init your component properties here.
    }

    submit() {
        // Pour l'instant le bouton valider change de page pour featured
        this.routerExtensions.navigate(["featured"], {
            transition: {
                name: "slideLeft",
                duration: 200
            }
        });

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