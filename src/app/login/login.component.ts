import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Login } from "~/app/services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";

import { Globals } from "~/app/services/globals";
import { DataService } from "~/app/services/data.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent {

    formulaire: Login = {"codeCabinet":""};

    constructor(private routerExtensions:RouterExtensions,
                private authService:AuthService,
                private dataService:DataService) {
    }

    submit() {
        this.authService.loginCabinet(this.formulaire)
            .subscribe(
                res => {
                    if(res != ""){
                        console.log("Bon code cabinet");
                        // Write infos in local file
                        this.dataService.ecritInfos("Orthalis", "cabinet.json", res);
                        // Redirect to user authentifcation page
                        this.routerExtensions.navigate(["auth"], {
                            transition: {
                                name: "fade"
                            }
                        });
                    } else {
                        console.log("Mauvais code cabinet ...");
                        alert("Aucun code cabinet correspondant, veuillez entrer un code valide.");
                    }
                },
                err => {
                    console.log("Erreur serveur" + err);
                }
            )
    }
}