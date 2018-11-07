import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { Globals } from "../services/globals";

import { ConnectiviteService } from "../services/connectivite.service";
import { PatientService } from "../services/patient.service";
import { Settings } from "../services/settings";

@Component({
    selector: "Featured",
    moduleId: module.id,
    templateUrl: "./featured.component.html",
    styleUrls: ["./featured-common.css"]
})
export class FeaturedComponent implements OnInit {

    chargement: boolean;
    patient;
    photosPatient;
    photosUrl;
    photo;

    constructor(private connectiviteService:ConnectiviteService,
                private patientService:PatientService) {
        this.chargement = Globals.chargement;
        this.patient = Globals.patient.result[0][0];
        this.photosPatient = this.patient.photos.identity;
        this.photosUrl = Settings.urlPatients;
        this.photo = `${Settings.urlImages}${this.photosPatient}`;
    }

    ngOnInit(): void { 
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(Globals.patient) );
        console.log("_______________________________________________ Test : " + JSON.stringify(this.patient.patient.codePatient));
        console.log(this.photosPatient);
        console.log("Requete image : " + this.photo);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
