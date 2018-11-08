import { Component, OnInit,ViewChild, ElementRef, } from "@angular/core";
import { LocalNotifications } from "nativescript-local-notifications";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ChatService, User, Message , Participants , Chat } from '../services/chat.service';
import { ListView } from 'ui/list-view';
import { setInterval, clearInterval } from "tns-core-modules/timer";
import { Image  } from "ui/image/image";

import * as enums from "tns-core-modules/ui/enums";
import { View } from "ui/core/view";
import { Animation } from "ui/animation";

import { Globals } from "../services/globals";
//import { RendezVousService } from '../../app/services/rendez-vous.service';
/*import {
  PatientRdv, 
  CabinetRdv,
  Message ,
  Participants,
  RendezVous,
 } from '../../app/services/models/rendezVous.modele';
 import { NotifRDV } from '../../app/services/models/notif.modele';
*/
@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home-common.css"],
    providers: [ChatService]
})

export class HomeComponent implements OnInit {

//pour changer le nom du cabinet sur le commentaire de l'image du cabinet  
public NomCabinet : string = "Cabinet Arthur Orthodontiste";


public input: any;
//public input: NotifRDV;
public Notifmessage1: any;

set: any;
rdv: Array<any> = [];
cabinet: any;
photoCabinet;
chargement: boolean;
id : number; //utilisé pour l'interval c'est l'ientifiant pour le désactiver
//    cabinet = Globals.cabinet;

/*chat integration*/
public me: User;
public other: User;
//public messages: Array<Message> ;
public messages = [];

//permet de communiquer entre enfant et parent
@ViewChild('chatBox') chatBoxRef: ElementRef;

private get chatBox(): ListView {
    return this.chatBoxRef.nativeElement;
}

constructor(private chatService: ChatService) {

    /* Contenu dynamique */
    this.chargement = Globals.chargement;
    this.cabinet = Globals.cabinet[0];
    this.photoCabinet = this.cabinet.photo_cabinet;
     
      /* Notification */
      //const chat = chatService.getChat();

      //
      this.me =  {
        name: 'Me',
        pictureUrl: "res://utilisateur",//'https://unsplash.it/100/100?image=837',
        coverUrl: "res://fond.png",
      };

      this.other = {
        name: "Doctor Eleisbaeth Anns",//faker.name.findName(),
        pictureUrl: "res://lamai", //'https://unsplash.it/100/100?image=823',
        coverUrl: "res://cabinet",//'https://unsplash.it/500/500?image=857',
      };
      
      //les RDV en dur
     // init( this.me , "il etait une fois", "2018-10-56" );
        
        const sender =this.other;
        const content = "Rendez-vous le 12 Oct 2018"; 
        const date = "2018-10-10" ;
        this.messages.push({
          sender: sender,
          content: content,
          date: date
        });

        const sender2 = this.other ;
        const content2 = "Rendez-vous le 21 Oct 2018\n Docteur Aznard\n Scanner 3D "; 
        const date2 = "2018-10-10" ;
        this.messages.push({
          sender: sender2,
          content: content2,
          date: date2
        });
        
      //permet de construire le message de la notif de l'android
      this.input = {
        "id": "12345",
        "title": "RDV",
        "body": "C'est un RDV urgent"
    };
        //this.chargement = Globals.chargement;
       
    }
  
    
 

    ngOnInit(): void {
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.cabinet : " + JSON.stringify(Globals.cabinet) );
        console.log("_______________________________________________ Test : " + this.cabinet.photo_cabinet);
        console.log("_______________________________________________ Test : " + this.photoCabinet);
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(Globals.patient) );
    
    //       this.chargement = false;
    //       console.log("Contenu de Globals.cabinet : " + Globals.cabinet);
   
       //permet de mettre un interval dans la notif 
     this.id = setInterval(() => {
      this.schedule();   
    }, 10000);
   
    setTimeout(() => {
     clearInterval(this.id);
//this.schedule();   
    }, 40000);   

    this.Notifmessage1 = "Rendez-vous  10 h 45 \n Docteur Athure Etienne\n Remplacement de bagues.";
    LocalNotifications.addOnMessageReceivedCallback(notificationData => {
        this.sendMessage();                         
    });
    
 /*LocalNotifications.addOnMessageReceivedCallback(notificationData => {
   Dialogs.alert({
      title: "Notification received",
      message: "ID:  Je suis ici" +//+ notificationData.id +
      "\nTitle: " +  "RDV" +// notificationData.title +
      "\nBody: Etc  etc etc tec" ,//+ notificationData.body,
      okButtonText: "Excellent!"
  });
}
);*/
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
            }, error => {
                console.dir(error);
            });
            
        }
    });
}
    // -> fancy alert modif / add -- start
    public sendMessage(): void {
      const message = this.initializeMessageWith(this.Notifmessage1);
     // this.messages.push(message);
     // this.Notifmessage1 = this.initializeMessageWith("eeeeeeeeeeeeeeeeeeeeeeeeeefgsssfffqsq");
      this.messages.push(message);
      this.scrollChatToBottom();
    }
  
    private initializeMessageWith(content: string): Message {
      return {
        content: content,
        sender: this.me,
        date: new Date(),
      };
    }
  
    public pubdefile(pub : Image) {
      
    }
    
    public scrollChatToBottom(): void {
      setTimeout(() => {
        this.chatBox.scrollToIndex( 1 );
      }, 0);
    }
  
  
    public bubbleClass(message: Message): string {
      const sender = this.isMy(message) ? 'me' : 'other';
  
      return `bubble-from-${sender}`;
    }
  
    private isMy(message: Message): boolean {
      return message.sender == this.me;
    }
   
    // -> fancy alert modif / add -- end
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

   
}

export function init( sender1: User , content1: string, date1: string ) : void {

  const sender = sender1 ;
  const content = content1; 
  const date = date1 ;
  return  this.messages.push({
    senssder: sender,
    content: content,
    date: date
  });
   
 }
