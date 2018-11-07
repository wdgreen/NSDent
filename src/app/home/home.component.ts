import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { Globals } from "~/app/services/globals";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home-common.css"]
})
export class HomeComponent implements OnInit {

    chargement: boolean;
    cabinet;

    constructor() {
        this.chargement = Globals.chargement;
        this.cabinet = Globals.cabinet[0];
    }

    ngOnInit(): void {
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.cabinet : " + JSON.stringify(Globals.cabinet) );
        console.log("_______________________________________________ Test : " + JSON.stringify(this.cabinet.photo_cabinet));
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(Globals.patient) );
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
