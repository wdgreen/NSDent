import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { ConnectiviteService } from "../services/connectivite.service";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ["./featured-common.css"]
})
export class FeaturedComponent implements OnInit {

    constructor(private connectiviteService:ConnectiviteService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        if(this.connectiviteService.connexion){
            alert("vous êtes connecté à internet !");
        }
        else{
            alert("Pas connecté");
        }
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
