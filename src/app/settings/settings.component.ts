import { Component, ViewChild, ElementRef,OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { TNSCheckBoxModule } from 'nativescript-checkbox/angular';
import { DataService } from "../services/data.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
    styleUrls: ["./settings-common.css"]
})
export class SettingsComponent implements OnInit {
    @ViewChild("CB1") FirstCheckBox: ElementRef;

    constructor(private dataService:DataService,
                private routerExtensions:RouterExtensions) {}

    public toggleCheck() {
        this.FirstCheckBox.nativeElement.toggle();
    }
 
    public getCheckProp() {
        console.log('checked prop value = ' + this.FirstCheckBox.nativeElement.checked);
    }
    
    ngOnInit(): void {
        // Init your component properties here.
    }

    // Logout button
    submit() {
        this.dataService.supprimeInfos("Orthalis");
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
