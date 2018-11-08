import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
// Firebase push notification
const firebase = require("nativescript-plugin-firebase");
import { Globals } from "~/app/services/globals";
import { ConnectiviteService } from "./services/connectivite.service"

@Component({
    moduleId: module.id,
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;

    public isVisible: boolean = true;    // pour passer d'un utilisateur à l'autre
    public isVisible2: boolean = false;    // pour passer d'un utilisateur à l'autre
    
    constructor(private router: Router, 
                private routerExtensions: RouterExtensions,
                // Used for notification system
                private connectiviteService: ConnectiviteService) { }

    ngOnInit(): void {
        console.log("application lancée =======================================");
        // If connection, initialize Firebase
        if (this.connectiviteService.testeConnectivite()) {
            firebase.init({
                showNotificationsWhenInForeground: true,
                onMessageReceivedCallback: (message) => {
                    console.log(`Notification reçue : Title = ${message.title}, Body = ${message.body}`);
                    // if your server passed a custom property called 'foo', then do this:
                    // console.log(`Value of 'foo': ${message.data.foo}`);
                }
            }).then(
                instance => {
                    firebase.getCurrentPushToken().then((token: string) => {
                        // Define Appareil.OS
                        if (app.android) {
                            Globals.appareil.os = "android";
                        } else if (app.ios) {
                            Globals.appareil.os = "ios";
                        } else {
                            Globals.appareil.os = "autre"
                        };
                        // Define Appareil.PushToken
                        Globals.appareil.pushToken = token;
                        console.log("firebase.init done");
                        console.log("OS: " + Globals.appareil.os);
                        console.log("pushToken: " + Globals.appareil.pushToken);
                    });
                },
                error => {
                    console.log(`firebase.init error: ${error}`);
                }
            );
        // If no connection, do nothing and continue
        } else {
            console.log('Hors ligne : Pas de Firebase :(');
        }

        this._activatedUrl = "/home";
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
            .pipe(filter((event: any) => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    /* Pour changer d'utilisateur*/
    changeUtilisateur(): void  {
        if (this.isVisible) {
                this.isVisible = false;
                this.isVisible2 =true;
            } else  {
                this.isVisible = true;
                this.isVisible2 =false;
            }
        
    }
    /* Pour changer d'utilisateur*/
    changeUtilisateur2(): void  {
        if (this.isVisible2) {
                this.isVisible2 =false;
                this.isVisible = true;
            } else  {
                this.isVisible2 =true;
                this.isVisible = false;
            }
        
    }
}
