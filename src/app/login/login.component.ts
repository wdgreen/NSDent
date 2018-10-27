import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Login } from "~/app/services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";
import { DataService } from "~/app/services/data.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent {

    formulaire: Login = {"codeCabinet":""};

    chargement:boolean = false;

    constructor(private routerExtensions:RouterExtensions,
                private authService:AuthService,
                private dataService:DataService) {
    }

    submit() {
        this.chargement = true;
        this.authService.loginCabinet(this.formulaire)
            .subscribe(
                res => {
                    if(res != ""){
                        console.log("Bon code cabinet");
                        // Write infos in local file
                        this.dataService.ecritInfos("Orthalis", "cabinet", res );
                        // Store them in Globals
                        this.dataService.globaliseInfos("Orthalis", "cabinet");
                        // Redirect to user authentifcation page
                        this.routerExtensions.navigate(["auth"], {
                            transition: {
                                name: "fade"
                            }
                        });
                    } else {
                        console.log("Mauvais code cabinet.")
                        alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");

                        this.chargement = false;
                    }

                    
                },
                err => {
                    console.log("Erreur serveur.")
                    alert("Erreur serveur");

                    this.chargement = false;
                }
            )
    }
}