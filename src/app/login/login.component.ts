import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from "~/app/services/models/auth.modele";
import { AuthService } from "~/app/services/auth.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css"]
})
export class LoginComponent {

    formulaire: Auth = {"codeCabinet":""};

    constructor(private routerExtensions:RouterExtensions,
                private authService:AuthService) {
    }

    submit() {
        this.authService.loginCabinet(this.formulaire)
            .subscribe(
                res => {
                    console.log("Le code cabinet est valide est la reponse est : " + res);

                    this.routerExtensions.navigate(["auth"], {
                        transition: {
                            name: "fade"
                        }
                    });
                },
                err => {
                    console.log(err);
                }
        );

        

        
    }
    // onDrawerButtonTap(): void {
    //     const sideDrawer = <RadSideDrawer>app.getRootView();
    //     sideDrawer.showDrawer();
    // }
}