import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { RouterExtensions } from "nativescript-angular/router";
import { DeconnexionService } from "../services/deconnexion.service";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings-common.css"]
})
export class SettingsComponent implements OnInit {

    constructor(private routerExtensions:RouterExtensions,
                private deconnexionService:DeconnexionService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    submit() {
        // Pour l'instant le bouton valider change de page pour featured
        this.deconnexionService.deconnecte();
        this.routerExtensions.navigate(["login"], {
            transition: {
                name: "fade"
            }
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
