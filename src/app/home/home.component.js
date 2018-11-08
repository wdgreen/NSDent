"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var app = require("tns-core-modules/application");
var chat_service_1 = require("../services/chat.service");
var globals_1 = require("../services/globals");
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
var HomeComponent = /** @class */ (function () {
    function HomeComponent(chatService) {
        this.chatService = chatService;
        //pour changer le nom du cabinet sur le commentaire de l'image du cabinet  
        this.NomCabinet = "Cabinet Arthur Orthodontiste";
        this.rdv = [];
        //public messages: Array<Message> ;
        this.messages = [];
        /* Contenu dynamique */
        this.chargement = globals_1.Globals.chargement;
        this.cabinet = globals_1.Globals.cabinet[0];
        this.photoCabinet = this.cabinet.photo_cabinet;
        /* Notification */
        //const chat = chatService.getChat();
        //
        this.me = {
            name: 'Me',
            pictureUrl: "res://utilisateur",
            coverUrl: "res://fond.png",
        };
        this.other = {
            name: "Doctor Eleisbaeth Anns",
            pictureUrl: "res://lamai",
            coverUrl: "res://cabinet",
        };
        //les RDV en dur
        // init( this.me , "il etait une fois", "2018-10-56" );
        var sender = this.other;
        var content = "Rendez-vous le 12 Oct 2018";
        var date = "2018-10-10";
        this.messages.push({
            sender: sender,
            content: content,
            date: date
        });
        var sender2 = this.other;
        var content2 = "Rendez-vous le 21 Oct 2018\n Docteur Aznard\n Scanner 3D ";
        var date2 = "2018-10-10";
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
    Object.defineProperty(HomeComponent.prototype, "chatBox", {
        get: function () {
            return this.chatBoxRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent.prototype.ngOnInit = function () {
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.cabinet : " + JSON.stringify(globals_1.Globals.cabinet));
        console.log("_______________________________________________ Test : " + this.cabinet.photo_cabinet);
        console.log("_______________________________________________ Test : " + this.photoCabinet);
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(globals_1.Globals.patient));
        //       this.chargement = false;
        //       console.log("Contenu de Globals.cabinet : " + Globals.cabinet);
        //        //permet de mettre un interval dans la notif 
        //      this.id = setInterval(() => {
        //       this.schedule();   
        //     }, 10000);
        //     setTimeout(() => {
        //      clearInterval(this.id);
        // //this.schedule();   
        //     }, 40000);   
        // this.Notifmessage1 = "Rendez-vous  10 h 45 \n Docteur Athure Etienne\n Remplacement de bagues.";
        // LocalNotifications.addOnMessageReceivedCallback(() => {
        //     this.sendMessage();                         
        // });
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
    };
    HomeComponent.prototype.schedule = function () {
        var _this = this;
        nativescript_local_notifications_1.LocalNotifications.requestPermission().then(function (granted) {
            if (granted) {
                nativescript_local_notifications_1.LocalNotifications.schedule([{
                        id: _this.input.id,
                        title: _this.input.title,
                        body: _this.input.body,
                        at: new Date(new Date().getTime() + (10 * 1000))
                    }]).then(function () {
                }, function (error) {
                    console.dir(error);
                });
            }
        });
    };
    // -> fancy alert modif / add -- start
    HomeComponent.prototype.sendMessage = function () {
        var message = this.initializeMessageWith(this.Notifmessage1);
        // this.messages.push(message);
        // this.Notifmessage1 = this.initializeMessageWith("eeeeeeeeeeeeeeeeeeeeeeeeeefgsssfffqsq");
        this.messages.push(message);
        this.scrollChatToBottom();
    };
    HomeComponent.prototype.initializeMessageWith = function (content) {
        return {
            content: content,
            sender: this.me,
            date: new Date(),
        };
    };
    HomeComponent.prototype.pubdefile = function (pub) {
    };
    HomeComponent.prototype.scrollChatToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.chatBox.scrollToIndex(1);
        }, 0);
    };
    HomeComponent.prototype.bubbleClass = function (message) {
        var sender = this.isMy(message) ? 'me' : 'other';
        return "bubble-from-" + sender;
    };
    HomeComponent.prototype.isMy = function (message) {
        return message.sender == this.me;
    };
    // -> fancy alert modif / add -- end
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild('chatBox'),
        __metadata("design:type", core_1.ElementRef)
    ], HomeComponent.prototype, "chatBoxRef", void 0);
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home-common.css"],
            providers: [chat_service_1.ChatService]
        }),
        __metadata("design:paramtypes", [chat_service_1.ChatService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
function init(sender1, content1, date1) {
    var sender = sender1;
    var content = content1;
    var date = date1;
    return this.messages.push({
        senssder: sender,
        content: content,
        date: date
    });
}
exports.init = init;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxxRkFBc0U7QUFFdEUsa0RBQW9EO0FBQ3BELHlEQUE0RjtBQVM1RiwrQ0FBOEM7QUFDOUMsNkVBQTZFO0FBQzdFOzs7Ozs7OztFQVFFO0FBU0Y7SUErQkEsdUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBN0I1QywyRUFBMkU7UUFDcEUsZUFBVSxHQUFZLDhCQUE4QixDQUFDO1FBUTVELFFBQUcsR0FBZSxFQUFFLENBQUM7UUFVckIsbUNBQW1DO1FBQzVCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFXakIsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBRTdDLGtCQUFrQjtRQUNsQixxQ0FBcUM7UUFFckMsRUFBRTtRQUNGLElBQUksQ0FBQyxFQUFFLEdBQUk7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsVUFBVSxFQUFFLGFBQWE7WUFDekIsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztRQUVGLGdCQUFnQjtRQUNqQix1REFBdUQ7UUFFcEQsSUFBTSxNQUFNLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFNLE9BQU8sR0FBRyw0QkFBNEIsQ0FBQztRQUM3QyxJQUFNLElBQUksR0FB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aEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDaEMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztTQUMzQixDQUFDO3lDQWlDK0IsMEJBQVc7T0EvQi9CLGFBQWEsQ0F5THpCO0lBQUQsb0JBQUM7Q0FBQSxBQXpMRCxJQXlMQztBQXpMWSxzQ0FBYTtBQTJMMUIsY0FBc0IsT0FBYSxFQUFHLFFBQWdCLEVBQUUsS0FBYTtJQUVuRSxJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUU7SUFDeEIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQ3pCLElBQU0sSUFBSSxHQUFHLEtBQUssQ0FBRTtJQUNwQixNQUFNLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDekIsUUFBUSxFQUFFLE1BQU07UUFDaEIsT0FBTyxFQUFFLE9BQU87UUFDaEIsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDLENBQUM7QUFFSixDQUFDO0FBWEYsb0JBV0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCxWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExvY2FsTm90aWZpY2F0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBDaGF0U2VydmljZSwgVXNlciwgTWVzc2FnZSAsIFBhcnRpY2lwYW50cyAsIENoYXQgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGF0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd1aS9saXN0LXZpZXcnO1xuaW1wb3J0IHsgc2V0SW50ZXJ2YWwsIGNsZWFySW50ZXJ2YWwgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90aW1lclwiO1xuaW1wb3J0IHsgSW1hZ2UgIH0gZnJvbSBcInVpL2ltYWdlL2ltYWdlXCI7XG5cbmltcG9ydCAqIGFzIGVudW1zIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcInVpL2FuaW1hdGlvblwiO1xuXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dsb2JhbHNcIjtcbi8vaW1wb3J0IHsgUmVuZGV6Vm91c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9hcHAvc2VydmljZXMvcmVuZGV6LXZvdXMuc2VydmljZSc7XG4vKmltcG9ydCB7XG4gIFBhdGllbnRSZHYsIFxuICBDYWJpbmV0UmR2LFxuICBNZXNzYWdlICxcbiAgUGFydGljaXBhbnRzLFxuICBSZW5kZXpWb3VzLFxuIH0gZnJvbSAnLi4vLi4vYXBwL3NlcnZpY2VzL21vZGVscy9yZW5kZXpWb3VzLm1vZGVsZSc7XG4gaW1wb3J0IHsgTm90aWZSRFYgfSBmcm9tICcuLi8uLi9hcHAvc2VydmljZXMvbW9kZWxzL25vdGlmLm1vZGVsZSc7XG4qL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUtY29tbW9uLmNzc1wiXSxcbiAgICBwcm92aWRlcnM6IFtDaGF0U2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuLy9wb3VyIGNoYW5nZXIgbGUgbm9tIGR1IGNhYmluZXQgc3VyIGxlIGNvbW1lbnRhaXJlIGRlIGwnaW1hZ2UgZHUgY2FiaW5ldCAgXG5wdWJsaWMgTm9tQ2FiaW5ldCA6IHN0cmluZyA9IFwiQ2FiaW5ldCBBcnRodXIgT3J0aG9kb250aXN0ZVwiO1xuXG5cbnB1YmxpYyBpbnB1dDogYW55O1xuLy9wdWJsaWMgaW5wdXQ6IE5vdGlmUkRWO1xucHVibGljIE5vdGlmbWVzc2FnZTE6IGFueTtcblxuc2V0OiBhbnk7XG5yZHY6IEFycmF5PGFueT4gPSBbXTtcbmNhYmluZXQ6IGFueTtcbnBob3RvQ2FiaW5ldDtcbmNoYXJnZW1lbnQ6IGJvb2xlYW47XG5pZCA6IG51bWJlcjsgLy91dGlsaXPDqSBwb3VyIGwnaW50ZXJ2YWwgYydlc3QgbCdpZW50aWZpYW50IHBvdXIgbGUgZMOpc2FjdGl2ZXJcbi8vICAgIGNhYmluZXQgPSBHbG9iYWxzLmNhYmluZXQ7XG5cbi8qY2hhdCBpbnRlZ3JhdGlvbiovXG5wdWJsaWMgbWU6IFVzZXI7XG5wdWJsaWMgb3RoZXI6IFVzZXI7XG4vL3B1YmxpYyBtZXNzYWdlczogQXJyYXk8TWVzc2FnZT4gO1xucHVibGljIG1lc3NhZ2VzID0gW107XG5cbi8vcGVybWV0IGRlIGNvbW11bmlxdWVyIGVudHJlIGVuZmFudCBldCBwYXJlbnRcbkBWaWV3Q2hpbGQoJ2NoYXRCb3gnKSBjaGF0Qm94UmVmOiBFbGVtZW50UmVmO1xuXG5wcml2YXRlIGdldCBjaGF0Qm94KCk6IExpc3RWaWV3IHtcbiAgICByZXR1cm4gdGhpcy5jaGF0Qm94UmVmLm5hdGl2ZUVsZW1lbnQ7XG59XG5cbmNvbnN0cnVjdG9yKHByaXZhdGUgY2hhdFNlcnZpY2U6IENoYXRTZXJ2aWNlKSB7XG5cbiAgICAvKiBDb250ZW51IGR5bmFtaXF1ZSAqL1xuICAgIHRoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICB0aGlzLmNhYmluZXQgPSBHbG9iYWxzLmNhYmluZXRbMF07XG4gICAgdGhpcy5waG90b0NhYmluZXQgPSB0aGlzLmNhYmluZXQucGhvdG9fY2FiaW5ldDtcbiAgICAgXG4gICAgICAvKiBOb3RpZmljYXRpb24gKi9cbiAgICAgIC8vY29uc3QgY2hhdCA9IGNoYXRTZXJ2aWNlLmdldENoYXQoKTtcblxuICAgICAgLy9cbiAgICAgIHRoaXMubWUgPSAge1xuICAgICAgICBuYW1lOiAnTWUnLFxuICAgICAgICBwaWN0dXJlVXJsOiBcInJlczovL3V0aWxpc2F0ZXVyXCIsLy8naHR0cHM6Ly91bnNwbGFzaC5pdC8xMDAvMTAwP2ltYWdlPTgzNycsXG4gICAgICAgIGNvdmVyVXJsOiBcInJlczovL2ZvbmQucG5nXCIsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm90aGVyID0ge1xuICAgICAgICBuYW1lOiBcIkRvY3RvciBFbGVpc2JhZXRoIEFubnNcIiwvL2Zha2VyLm5hbWUuZmluZE5hbWUoKSxcbiAgICAgICAgcGljdHVyZVVybDogXCJyZXM6Ly9sYW1haVwiLCAvLydodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODIzJyxcbiAgICAgICAgY292ZXJVcmw6IFwicmVzOi8vY2FiaW5ldFwiLC8vJ2h0dHBzOi8vdW5zcGxhc2guaXQvNTAwLzUwMD9pbWFnZT04NTcnLFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgLy9sZXMgUkRWIGVuIGR1clxuICAgICAvLyBpbml0KCB0aGlzLm1lICwgXCJpbCBldGFpdCB1bmUgZm9pc1wiLCBcIjIwMTgtMTAtNTZcIiApO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VuZGVyID10aGlzLm90aGVyO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gXCJSZW5kZXotdm91cyBsZSAxMiBPY3QgMjAxOFwiOyBcbiAgICAgICAgY29uc3QgZGF0ZSA9IFwiMjAxOC0xMC0xMFwiIDtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICBzZW5kZXI6IHNlbmRlcixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIGRhdGU6IGRhdGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2VuZGVyMiA9IHRoaXMub3RoZXIgO1xuICAgICAgICBjb25zdCBjb250ZW50MiA9IFwiUmVuZGV6LXZvdXMgbGUgMjEgT2N0IDIwMThcXG4gRG9jdGV1ciBBem5hcmRcXG4gU2Nhbm5lciAzRCBcIjsgXG4gICAgICAgIGNvbnN0IGRhdGUyID0gXCIyMDE4LTEwLTEwXCIgO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgIHNlbmRlcjogc2VuZGVyMixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50MixcbiAgICAgICAgICBkYXRlOiBkYXRlMlxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAvL3Blcm1ldCBkZSBjb25zdHJ1aXJlIGxlIG1lc3NhZ2UgZGUgbGEgbm90aWYgZGUgbCdhbmRyb2lkXG4gICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICBcImlkXCI6IFwiMTIzNDVcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJEVlwiLFxuICAgICAgICBcImJvZHlcIjogXCJDJ2VzdCB1biBSRFYgdXJnZW50XCJcbiAgICB9O1xuICAgICAgICAvL3RoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICAgICBcbiAgICB9XG4gIFxuICAgIFxuIFxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnRlbnUgZGUgR2xvYmFscy5jYWJpbmV0IDogXCIgKyBKU09OLnN0cmluZ2lmeShHbG9iYWxzLmNhYmluZXQpICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gVGVzdCA6IFwiICsgdGhpcy5jYWJpbmV0LnBob3RvX2NhYmluZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFRlc3QgOiBcIiArIHRoaXMucGhvdG9DYWJpbmV0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb250ZW51IGRlIEdsb2JhbHMucGF0aWVudCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoR2xvYmFscy5wYXRpZW50KSApO1xuICAgIFxuICAgIC8vICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBkZSBHbG9iYWxzLmNhYmluZXQgOiBcIiArIEdsb2JhbHMuY2FiaW5ldCk7XG4gICBcbi8vICAgICAgICAvL3Blcm1ldCBkZSBtZXR0cmUgdW4gaW50ZXJ2YWwgZGFucyBsYSBub3RpZiBcbi8vICAgICAgdGhpcy5pZCA9IHNldEludGVydmFsKCgpID0+IHtcbi8vICAgICAgIHRoaXMuc2NoZWR1bGUoKTsgICBcbi8vICAgICB9LCAxMDAwMCk7XG4gICBcbi8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbi8vIC8vdGhpcy5zY2hlZHVsZSgpOyAgIFxuLy8gICAgIH0sIDQwMDAwKTsgICBcblxuICAgIC8vIHRoaXMuTm90aWZtZXNzYWdlMSA9IFwiUmVuZGV6LXZvdXMgIDEwIGggNDUgXFxuIERvY3RldXIgQXRodXJlIEV0aWVubmVcXG4gUmVtcGxhY2VtZW50IGRlIGJhZ3Vlcy5cIjtcbiAgICAvLyBMb2NhbE5vdGlmaWNhdGlvbnMuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjaygoKSA9PiB7XG4gICAgLy8gICAgIHRoaXMuc2VuZE1lc3NhZ2UoKTsgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgLy8gfSk7XG4gICAgXG4gLypMb2NhbE5vdGlmaWNhdGlvbnMuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhub3RpZmljYXRpb25EYXRhID0+IHtcbiAgIERpYWxvZ3MuYWxlcnQoe1xuICAgICAgdGl0bGU6IFwiTm90aWZpY2F0aW9uIHJlY2VpdmVkXCIsXG4gICAgICBtZXNzYWdlOiBcIklEOiAgSmUgc3VpcyBpY2lcIiArLy8rIG5vdGlmaWNhdGlvbkRhdGEuaWQgK1xuICAgICAgXCJcXG5UaXRsZTogXCIgKyAgXCJSRFZcIiArLy8gbm90aWZpY2F0aW9uRGF0YS50aXRsZSArXG4gICAgICBcIlxcbkJvZHk6IEV0YyAgZXRjIGV0YyB0ZWNcIiAsLy8rIG5vdGlmaWNhdGlvbkRhdGEuYm9keSxcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJFeGNlbGxlbnQhXCJcbiAgfSk7XG59XG4pOyovXG59ICBcbiAgIHB1YmxpYyBzY2hlZHVsZSgpIHtcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKGdyYW50ZWQgPT4ge1xuICAgICAgICBpZihncmFudGVkKSB7XG4gICAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pbnB1dC5pZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pbnB1dC50aXRsZSxcbiAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmlucHV0LmJvZHksXG4gICAgICAgICAgICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEwICogMTAwMCkpXG4gICAgICAgICAgICB9XSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pO1xufVxuICAgIC8vIC0+IGZhbmN5IGFsZXJ0IG1vZGlmIC8gYWRkIC0tIHN0YXJ0XG4gICAgcHVibGljIHNlbmRNZXNzYWdlKCk6IHZvaWQge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VXaXRoKHRoaXMuTm90aWZtZXNzYWdlMSk7XG4gICAgIC8vIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgLy8gdGhpcy5Ob3RpZm1lc3NhZ2UxID0gdGhpcy5pbml0aWFsaXplTWVzc2FnZVdpdGgoXCJlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZnc3NzZmZmcXNxXCIpO1xuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zY3JvbGxDaGF0VG9Cb3R0b20oKTtcbiAgICB9XG4gIFxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZU1lc3NhZ2VXaXRoKGNvbnRlbnQ6IHN0cmluZyk6IE1lc3NhZ2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgc2VuZGVyOiB0aGlzLm1lLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgfTtcbiAgICB9XG4gIFxuICAgIHB1YmxpYyBwdWJkZWZpbGUocHViIDogSW1hZ2UpIHtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2Nyb2xsQ2hhdFRvQm90dG9tKCk6IHZvaWQge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhdEJveC5zY3JvbGxUb0luZGV4KCAxICk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIFxuICBcbiAgICBwdWJsaWMgYnViYmxlQ2xhc3MobWVzc2FnZTogTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgICBjb25zdCBzZW5kZXIgPSB0aGlzLmlzTXkobWVzc2FnZSkgPyAnbWUnIDogJ290aGVyJztcbiAgXG4gICAgICByZXR1cm4gYGJ1YmJsZS1mcm9tLSR7c2VuZGVyfWA7XG4gICAgfVxuICBcbiAgICBwcml2YXRlIGlzTXkobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIG1lc3NhZ2Uuc2VuZGVyID09IHRoaXMubWU7XG4gICAgfVxuICAgXG4gICAgLy8gLT4gZmFuY3kgYWxlcnQgbW9kaWYgLyBhZGQgLS0gZW5kXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoIHNlbmRlcjE6IFVzZXIgLCBjb250ZW50MTogc3RyaW5nLCBkYXRlMTogc3RyaW5nICkgOiB2b2lkIHtcblxuICBjb25zdCBzZW5kZXIgPSBzZW5kZXIxIDtcbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnQxOyBcbiAgY29uc3QgZGF0ZSA9IGRhdGUxIDtcbiAgcmV0dXJuICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgIHNlbnNzZGVyOiBzZW5kZXIsXG4gICAgY29udGVudDogY29udGVudCxcbiAgICBkYXRlOiBkYXRlXG4gIH0pO1xuICAgXG4gfVxuIl19