import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { Globals } from "../services/globals";

import { ConnectiviteService } from "../services/connectivite.service";
import { PatientService } from "../services/patient.service";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ["./featured-common.css"]
})
export class FeaturedComponent implements OnInit {

    chargement: boolean;

    constructor(private connectiviteService:ConnectiviteService,
                private patientService:PatientService) {
        this.chargement = Globals.chargement;
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void { 
        this.chargement = false;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
