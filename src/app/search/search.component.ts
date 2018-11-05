import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";



@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html",
    styleUrls: ["./search-common.css"]
})
export class SearchComponent implements OnInit {
    public isVisible: boolean = false;
    public isVisible2: boolean = false;
    public isVisible1 : boolean = false;
    
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onTap() {
        if (this.isVisible) {
            this.isVisible = false;
        } else  {
            this.isVisible = true;
        }
    }
      onTap2() {   
        if (this.isVisible2) {
            this.isVisible2 = false;
        } else  {
            this.isVisible2 = true;
        }
    }
    imagezoom(): void {
       
    }
    test1() {
        if (this.isVisible1) {
            this.isVisible1 = false;
        } else  {
            this.isVisible1 = true;
        }
    }
    test2() {
        if (this.isVisible2) {
            this.isVisible2 = false;
        } else  {
            this.isVisible2 = true;
        }
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
