import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { ConnectiviteService } from "../services/connectivite.service";
import { PatientService } from "../services/patient.service";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ["./featured-common.css"]
})
export class FeaturedComponent implements OnInit {

    constructor(private connectiviteService:ConnectiviteService,
                private patientService:PatientService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
