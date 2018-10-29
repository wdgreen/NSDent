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

    constructor() {
        this.chargement = Globals.chargement;
        console.log(Globals.cabinet);
    }

    ngOnInit(): void {
        this.chargement = false;
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
