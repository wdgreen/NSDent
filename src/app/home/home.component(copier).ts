import { Component, OnInit,ViewChild, ElementRef, } from "@angular/core";
import { LocalNotifications } from "nativescript-local-notifications";
import * as Toast from "nativescript-toast";
import { alert } from "tns-core-modules/ui/dialogs";
import { Color } from "tns-core-modules/color";
import * as Dialogs from "ui/dialogs";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { setInterval, clearInterval } from "tns-core-modules/timer";


@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home-common.css"]
})

export class HomeComponent implements OnInit {
  public input: any;
  set: any;
  rdv: Array<any> = [];
  cabinet: any;
  chargement: boolean;
  id : number; //utilisé pour l'interval c'est l'ientifiant pour le désactiver
//    cabinet = Globals.cabinet;

    constructor() {
     
      //permet de construire le message de la notif de l'android
      this.input = {
        "id": "12345",
        "title": "RDV",
        "body": "C 'est un RDV urgent"
    };

        //this.chargement = Globals.chargement;
       
    }
    

    ngOnInit(): void {
    //       this.chargement = false;
    //       console.log("Contenu de Globals.cabinet : " + Globals.cabinet);

    /*setTimeout(() => {
      this.schedule();
    }, 1000);   

    setTimeout(() => {
      this.schedule();
    }, 10000);   
 */
 LocalNotifications.addOnMessageReceivedCallback(notificationData => {
  Dialogs.alert({
      title: "Notification received",
      message: "ID:  Je suis ici" +//+ notificationData.id +
      "\nTitle: " +  "RDV" +// notificationData.title +
      "\nBody: Etc  etc etc tec" ,//+ notificationData.body,
      okButtonText: "Excellent!"
  });
}
);
   }  
   public schedule() {
    LocalNotifications.requestPermission().then(granted => {
        if(granted) {
            LocalNotifications.schedule([{
                id: this.input.id,
                title: this.input.title,
                body: this.input.body,
                at: new Date(new Date().getTime() + (10 * 1000))
            }]).then(() => {
                //Toast.makeText("Notification scheduled!").show();
            }, error => {
                console.dir(error);
            });
        }
    });
}
    // -> fancy alert modif / add -- start

    // -> fancy alert modif / add -- end
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}

