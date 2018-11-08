"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var app = require("tns-core-modules/application");
var chat_service_1 = require("../services/chat.service");
var timer_1 = require("tns-core-modules/timer");
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
        this.photoCabinet = "http://" + encodeURI(this.cabinet.photo_cabinet);
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
        var _this = this;
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.cabinet : " + JSON.stringify(globals_1.Globals.cabinet));
        console.log("_______________________________________________ Test : " + this.cabinet.photo_cabinet);
        console.log("_______________________________________________ Test : " + this.photoCabinet);
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(globals_1.Globals.patient));
        //       this.chargement = false;
        //       console.log("Contenu de Globals.cabinet : " + Globals.cabinet);
        //permet de mettre un interval dans la notif 
        this.id = timer_1.setInterval(function () {
            _this.schedule();
        }, 10000);
        setTimeout(function () {
            timer_1.clearInterval(_this.id);
            //this.schedule();   
        }, 40000);
        this.Notifmessage1 = "Rendez-vous  10 h 45 \n Docteur Athure Etienne\n Remplacement de bagues.";
        nativescript_local_notifications_1.LocalNotifications.addOnMessageReceivedCallback(function (notificationData) {
            _this.sendMessage();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxxRkFBc0U7QUFFdEUsa0RBQW9EO0FBQ3BELHlEQUE0RjtBQUU1RixnREFBb0U7QUFPcEUsK0NBQThDO0FBQzlDLDZFQUE2RTtBQUM3RTs7Ozs7Ozs7RUFRRTtBQVNGO0lBK0JBLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTdCNUMsMkVBQTJFO1FBQ3BFLGVBQVUsR0FBWSw4QkFBOEIsQ0FBQztRQVE1RCxRQUFHLEdBQWUsRUFBRSxDQUFDO1FBVXJCLG1DQUFtQztRQUM1QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBV2pCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFVLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRyxDQUFDO1FBRXBFLGtCQUFrQjtRQUNsQixxQ0FBcUM7UUFFckMsRUFBRTtRQUNGLElBQUksQ0FBQyxFQUFFLEdBQUk7WUFDVCxJQUFJLEVBQUUsSUFBSTtZQUNWLFVBQVUsRUFBRSxtQkFBbUI7WUFDL0IsUUFBUSxFQUFFLGdCQUFnQjtTQUMzQixDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLElBQUksRUFBRSx3QkFBd0I7WUFDOUIsVUFBVSxFQUFFLGFBQWE7WUFDekIsUUFBUSxFQUFFLGVBQWU7U0FDMUIsQ0FBQztRQUVGLGdCQUFnQjtRQUNqQix1REFBdUQ7UUFFcEQsSUFBTSxNQUFNLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QixJQUFNLE9BQU8sR0FB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O0lBQ25DLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTdKaUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUF6QmhDLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzt5Q0FpQytCLDBCQUFXO09BL0IvQixhQUFhLENBeUx6QjtJQUFELG9CQUFDO0NBQUEsQUF6TEQsSUF5TEM7QUF6TFksc0NBQWE7QUEyTDFCLGNBQXNCLE9BQWEsRUFBRyxRQUFnQixFQUFFLEtBQWE7SUFFbkUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFFO0lBQ3hCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUN6QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUU7SUFDcEIsTUFBTSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3pCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQyxDQUFDO0FBRUosQ0FBQztBQVhGLG9CQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmLCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UsIFVzZXIsIE1lc3NhZ2UgLCBQYXJ0aWNpcGFudHMgLCBDaGF0IH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IHNldEludGVydmFsLCBjbGVhckludGVydmFsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIjtcbmltcG9ydCB7IEltYWdlICB9IGZyb20gXCJ1aS9pbWFnZS9pbWFnZVwiO1xuXG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9nbG9iYWxzXCI7XG4vL2ltcG9ydCB7IFJlbmRlelZvdXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXBwL3NlcnZpY2VzL3JlbmRlei12b3VzLnNlcnZpY2UnO1xuLyppbXBvcnQge1xuICBQYXRpZW50UmR2LCBcbiAgQ2FiaW5ldFJkdixcbiAgTWVzc2FnZSAsXG4gIFBhcnRpY2lwYW50cyxcbiAgUmVuZGV6Vm91cyxcbiB9IGZyb20gJy4uLy4uL2FwcC9zZXJ2aWNlcy9tb2RlbHMvcmVuZGV6Vm91cy5tb2RlbGUnO1xuIGltcG9ydCB7IE5vdGlmUkRWIH0gZnJvbSAnLi4vLi4vYXBwL3NlcnZpY2VzL21vZGVscy9ub3RpZi5tb2RlbGUnO1xuKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9ob21lLWNvbW1vbi5jc3NcIl0sXG4gICAgcHJvdmlkZXJzOiBbQ2hhdFNlcnZpY2VdXG59KVxuXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbi8vcG91ciBjaGFuZ2VyIGxlIG5vbSBkdSBjYWJpbmV0IHN1ciBsZSBjb21tZW50YWlyZSBkZSBsJ2ltYWdlIGR1IGNhYmluZXQgIFxucHVibGljIE5vbUNhYmluZXQgOiBzdHJpbmcgPSBcIkNhYmluZXQgQXJ0aHVyIE9ydGhvZG9udGlzdGVcIjtcblxuXG5wdWJsaWMgaW5wdXQ6IGFueTtcbi8vcHVibGljIGlucHV0OiBOb3RpZlJEVjtcbnB1YmxpYyBOb3RpZm1lc3NhZ2UxOiBhbnk7XG5cbnNldDogYW55O1xucmR2OiBBcnJheTxhbnk+ID0gW107XG5jYWJpbmV0OiBhbnk7XG5waG90b0NhYmluZXQ7XG5jaGFyZ2VtZW50OiBib29sZWFuO1xuaWQgOiBudW1iZXI7IC8vdXRpbGlzw6kgcG91ciBsJ2ludGVydmFsIGMnZXN0IGwnaWVudGlmaWFudCBwb3VyIGxlIGTDqXNhY3RpdmVyXG4vLyAgICBjYWJpbmV0ID0gR2xvYmFscy5jYWJpbmV0O1xuXG4vKmNoYXQgaW50ZWdyYXRpb24qL1xucHVibGljIG1lOiBVc2VyO1xucHVibGljIG90aGVyOiBVc2VyO1xuLy9wdWJsaWMgbWVzc2FnZXM6IEFycmF5PE1lc3NhZ2U+IDtcbnB1YmxpYyBtZXNzYWdlcyA9IFtdO1xuXG4vL3Blcm1ldCBkZSBjb21tdW5pcXVlciBlbnRyZSBlbmZhbnQgZXQgcGFyZW50XG5AVmlld0NoaWxkKCdjaGF0Qm94JykgY2hhdEJveFJlZjogRWxlbWVudFJlZjtcblxucHJpdmF0ZSBnZXQgY2hhdEJveCgpOiBMaXN0VmlldyB7XG4gICAgcmV0dXJuIHRoaXMuY2hhdEJveFJlZi5uYXRpdmVFbGVtZW50O1xufVxuXG5jb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSkge1xuXG4gICAgLyogQ29udGVudSBkeW5hbWlxdWUgKi9cbiAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgdGhpcy5jYWJpbmV0ID0gR2xvYmFscy5jYWJpbmV0WzBdO1xuICAgIHRoaXMucGhvdG9DYWJpbmV0ID0gYGh0dHA6Ly8ke2VuY29kZVVSSSh0aGlzLmNhYmluZXQucGhvdG9fY2FiaW5ldCl9YDtcbiAgICAgXG4gICAgICAvKiBOb3RpZmljYXRpb24gKi9cbiAgICAgIC8vY29uc3QgY2hhdCA9IGNoYXRTZXJ2aWNlLmdldENoYXQoKTtcblxuICAgICAgLy9cbiAgICAgIHRoaXMubWUgPSAge1xuICAgICAgICBuYW1lOiAnTWUnLFxuICAgICAgICBwaWN0dXJlVXJsOiBcInJlczovL3V0aWxpc2F0ZXVyXCIsLy8naHR0cHM6Ly91bnNwbGFzaC5pdC8xMDAvMTAwP2ltYWdlPTgzNycsXG4gICAgICAgIGNvdmVyVXJsOiBcInJlczovL2ZvbmQucG5nXCIsXG4gICAgICB9O1xuXG4gICAgICB0aGlzLm90aGVyID0ge1xuICAgICAgICBuYW1lOiBcIkRvY3RvciBFbGVpc2JhZXRoIEFubnNcIiwvL2Zha2VyLm5hbWUuZmluZE5hbWUoKSxcbiAgICAgICAgcGljdHVyZVVybDogXCJyZXM6Ly9sYW1haVwiLCAvLydodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODIzJyxcbiAgICAgICAgY292ZXJVcmw6IFwicmVzOi8vY2FiaW5ldFwiLC8vJ2h0dHBzOi8vdW5zcGxhc2guaXQvNTAwLzUwMD9pbWFnZT04NTcnLFxuICAgICAgfTtcbiAgICAgIFxuICAgICAgLy9sZXMgUkRWIGVuIGR1clxuICAgICAvLyBpbml0KCB0aGlzLm1lICwgXCJpbCBldGFpdCB1bmUgZm9pc1wiLCBcIjIwMTgtMTAtNTZcIiApO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc2VuZGVyID10aGlzLm90aGVyO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gXCJSZW5kZXotdm91cyBsZSAxMiBPY3QgMjAxOFwiOyBcbiAgICAgICAgY29uc3QgZGF0ZSA9IFwiMjAxOC0xMC0xMFwiIDtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcbiAgICAgICAgICBzZW5kZXI6IHNlbmRlcixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgIGRhdGU6IGRhdGVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3Qgc2VuZGVyMiA9IHRoaXMub3RoZXIgO1xuICAgICAgICBjb25zdCBjb250ZW50MiA9IFwiUmVuZGV6LXZvdXMgbGUgMjEgT2N0IDIwMThcXG4gRG9jdGV1ciBBem5hcmRcXG4gU2Nhbm5lciAzRCBcIjsgXG4gICAgICAgIGNvbnN0IGRhdGUyID0gXCIyMDE4LTEwLTEwXCIgO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgIHNlbmRlcjogc2VuZGVyMixcbiAgICAgICAgICBjb250ZW50OiBjb250ZW50MixcbiAgICAgICAgICBkYXRlOiBkYXRlMlxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAvL3Blcm1ldCBkZSBjb25zdHJ1aXJlIGxlIG1lc3NhZ2UgZGUgbGEgbm90aWYgZGUgbCdhbmRyb2lkXG4gICAgICB0aGlzLmlucHV0ID0ge1xuICAgICAgICBcImlkXCI6IFwiMTIzNDVcIixcbiAgICAgICAgXCJ0aXRsZVwiOiBcIlJEVlwiLFxuICAgICAgICBcImJvZHlcIjogXCJDJ2VzdCB1biBSRFYgdXJnZW50XCJcbiAgICB9O1xuICAgICAgICAvL3RoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICAgICBcbiAgICB9XG4gIFxuICAgIFxuIFxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnRlbnUgZGUgR2xvYmFscy5jYWJpbmV0IDogXCIgKyBKU09OLnN0cmluZ2lmeShHbG9iYWxzLmNhYmluZXQpICk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gVGVzdCA6IFwiICsgdGhpcy5jYWJpbmV0LnBob3RvX2NhYmluZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFRlc3QgOiBcIiArIHRoaXMucGhvdG9DYWJpbmV0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb250ZW51IGRlIEdsb2JhbHMucGF0aWVudCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoR2xvYmFscy5wYXRpZW50KSApO1xuICAgIFxuICAgIC8vICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBkZSBHbG9iYWxzLmNhYmluZXQgOiBcIiArIEdsb2JhbHMuY2FiaW5ldCk7XG4gICBcbiAgICAgICAvL3Blcm1ldCBkZSBtZXR0cmUgdW4gaW50ZXJ2YWwgZGFucyBsYSBub3RpZiBcbiAgICAgdGhpcy5pZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuc2NoZWR1bGUoKTsgICBcbiAgICB9LCAxMDAwMCk7XG4gICBcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbi8vdGhpcy5zY2hlZHVsZSgpOyAgIFxuICAgIH0sIDQwMDAwKTsgICBcblxuICAgIHRoaXMuTm90aWZtZXNzYWdlMSA9IFwiUmVuZGV6LXZvdXMgIDEwIGggNDUgXFxuIERvY3RldXIgQXRodXJlIEV0aWVubmVcXG4gUmVtcGxhY2VtZW50IGRlIGJhZ3Vlcy5cIjtcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhub3RpZmljYXRpb25EYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZSgpOyAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB9KTtcbiAgICBcbiAvKkxvY2FsTm90aWZpY2F0aW9ucy5hZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKG5vdGlmaWNhdGlvbkRhdGEgPT4ge1xuICAgRGlhbG9ncy5hbGVydCh7XG4gICAgICB0aXRsZTogXCJOb3RpZmljYXRpb24gcmVjZWl2ZWRcIixcbiAgICAgIG1lc3NhZ2U6IFwiSUQ6ICBKZSBzdWlzIGljaVwiICsvLysgbm90aWZpY2F0aW9uRGF0YS5pZCArXG4gICAgICBcIlxcblRpdGxlOiBcIiArICBcIlJEVlwiICsvLyBub3RpZmljYXRpb25EYXRhLnRpdGxlICtcbiAgICAgIFwiXFxuQm9keTogRXRjICBldGMgZXRjIHRlY1wiICwvLysgbm90aWZpY2F0aW9uRGF0YS5ib2R5LFxuICAgICAgb2tCdXR0b25UZXh0OiBcIkV4Y2VsbGVudCFcIlxuICB9KTtcbn1cbik7Ki9cbn0gIFxuICAgcHVibGljIHNjaGVkdWxlKCkge1xuICAgIExvY2FsTm90aWZpY2F0aW9ucy5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oZ3JhbnRlZCA9PiB7XG4gICAgICAgIGlmKGdyYW50ZWQpIHtcbiAgICAgICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5zY2hlZHVsZShbe1xuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmlucHV0LmlkLFxuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmlucHV0LnRpdGxlLFxuICAgICAgICAgICAgICAgIGJvZHk6IHRoaXMuaW5wdXQuYm9keSxcbiAgICAgICAgICAgICAgICBhdDogbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoMTAgKiAxMDAwKSlcbiAgICAgICAgICAgIH1dKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSk7XG59XG4gICAgLy8gLT4gZmFuY3kgYWxlcnQgbW9kaWYgLyBhZGQgLS0gc3RhcnRcbiAgICBwdWJsaWMgc2VuZE1lc3NhZ2UoKTogdm9pZCB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5pbml0aWFsaXplTWVzc2FnZVdpdGgodGhpcy5Ob3RpZm1lc3NhZ2UxKTtcbiAgICAgLy8gdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAvLyB0aGlzLk5vdGlmbWVzc2FnZTEgPSB0aGlzLmluaXRpYWxpemVNZXNzYWdlV2l0aChcImVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmdzc3NmZmZxc3FcIik7XG4gICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICB0aGlzLnNjcm9sbENoYXRUb0JvdHRvbSgpO1xuICAgIH1cbiAgXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplTWVzc2FnZVdpdGgoY29udGVudDogc3RyaW5nKTogTWVzc2FnZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICBzZW5kZXI6IHRoaXMubWUsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXG4gICAgICB9O1xuICAgIH1cbiAgXG4gICAgcHVibGljIHB1YmRlZmlsZShwdWIgOiBJbWFnZSkge1xuICAgICAgXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBzY3JvbGxDaGF0VG9Cb3R0b20oKTogdm9pZCB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5jaGF0Qm94LnNjcm9sbFRvSW5kZXgoIDEgKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgXG4gIFxuICAgIHB1YmxpYyBidWJibGVDbGFzcyhtZXNzYWdlOiBNZXNzYWdlKTogc3RyaW5nIHtcbiAgICAgIGNvbnN0IHNlbmRlciA9IHRoaXMuaXNNeShtZXNzYWdlKSA/ICdtZScgOiAnb3RoZXInO1xuICBcbiAgICAgIHJldHVybiBgYnViYmxlLWZyb20tJHtzZW5kZXJ9YDtcbiAgICB9XG4gIFxuICAgIHByaXZhdGUgaXNNeShtZXNzYWdlOiBNZXNzYWdlKTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gbWVzc2FnZS5zZW5kZXIgPT0gdGhpcy5tZTtcbiAgICB9XG4gICBcbiAgICAvLyAtPiBmYW5jeSBhbGVydCBtb2RpZiAvIGFkZCAtLSBlbmRcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgIFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdCggc2VuZGVyMTogVXNlciAsIGNvbnRlbnQxOiBzdHJpbmcsIGRhdGUxOiBzdHJpbmcgKSA6IHZvaWQge1xuXG4gIGNvbnN0IHNlbmRlciA9IHNlbmRlcjEgO1xuICBjb25zdCBjb250ZW50ID0gY29udGVudDE7IFxuICBjb25zdCBkYXRlID0gZGF0ZTEgO1xuICByZXR1cm4gIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgc2Vuc3NkZXI6IHNlbmRlcixcbiAgICBjb250ZW50OiBjb250ZW50LFxuICAgIGRhdGU6IGRhdGVcbiAgfSk7XG4gICBcbiB9XG4iXX0=