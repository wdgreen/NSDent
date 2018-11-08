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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxxRkFBc0U7QUFFdEUsa0RBQW9EO0FBQ3BELHlEQUE0RjtBQUU1RixnREFBb0U7QUFPcEUsK0NBQThDO0FBQzlDLDZFQUE2RTtBQUM3RTs7Ozs7Ozs7RUFRRTtBQVNGO0lBK0JBLHVCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQTdCNUMsMkVBQTJFO1FBQ3BFLGVBQVUsR0FBWSw4QkFBOEIsQ0FBQztRQVE1RCxRQUFHLEdBQWUsRUFBRSxDQUFDO1FBVXJCLG1DQUFtQztRQUM1QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBV2pCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUU3QyxrQkFBa0I7UUFDbEIscUNBQXFDO1FBRXJDLEVBQUU7UUFDRixJQUFJLENBQUMsRUFBRSxHQUFJO1lBQ1QsSUFBSSxFQUFFLElBQUk7WUFDVixVQUFVLEVBQUUsbUJBQW1CO1lBQy9CLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0IsQ0FBQztRQUVGLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxJQUFJLEVBQUUsd0JBQXdCO1lBQzlCLFVBQVUsRUFBRSxhQUFhO1lBQ3pCLFFBQVEsRUFBRSxlQUFlO1NBQzFCLENBQUM7UUFFRixnQkFBZ0I7UUFDakIsdURBQXVEO1FBRXBELElBQU0sTUFBTSxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBTSxPQUFPLEdBQUcsNEJBQTRCLENBQUM7UUFDN0Ms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QW9DO0lBQ3BDLHlDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUE3SmlCO1FBQXJCLGdCQUFTLENBQUMsU0FBUyxDQUFDO2tDQUFhLGlCQUFVO3FEQUFDO0lBekJoQyxhQUFhO1FBUnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNoQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1NBQzNCLENBQUM7eUNBaUMrQiwwQkFBVztPQS9CL0IsYUFBYSxDQXlMekI7SUFBRCxvQkFBQztDQUFBLEFBekxELElBeUxDO0FBekxZLHNDQUFhO0FBMkwxQixjQUFzQixPQUFhLEVBQUcsUUFBZ0IsRUFBRSxLQUFhO0lBRW5FLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBRTtJQUN4QixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUM7SUFDekIsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFFO0lBQ3BCLE1BQU0sQ0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN6QixRQUFRLEVBQUUsTUFBTTtRQUNoQixPQUFPLEVBQUUsT0FBTztRQUNoQixJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUMsQ0FBQztBQUVKLENBQUM7QUFYRixvQkFXRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9jYWxOb3RpZmljYXRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1sb2NhbC1ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IENoYXRTZXJ2aWNlLCBVc2VyLCBNZXNzYWdlICwgUGFydGljaXBhbnRzICwgQ2hhdCB9IGZyb20gJy4uL3NlcnZpY2VzL2NoYXQuc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBzZXRJbnRlcnZhbCwgY2xlYXJJbnRlcnZhbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3RpbWVyXCI7XG5pbXBvcnQgeyBJbWFnZSAgfSBmcm9tIFwidWkvaW1hZ2UvaW1hZ2VcIjtcblxuaW1wb3J0ICogYXMgZW51bXMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZW51bXNcIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwidWkvYW5pbWF0aW9uXCI7XG5cbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2xvYmFsc1wiO1xuLy9pbXBvcnQgeyBSZW5kZXpWb3VzU2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9zZXJ2aWNlcy9yZW5kZXotdm91cy5zZXJ2aWNlJztcbi8qaW1wb3J0IHtcbiAgUGF0aWVudFJkdiwgXG4gIENhYmluZXRSZHYsXG4gIE1lc3NhZ2UgLFxuICBQYXJ0aWNpcGFudHMsXG4gIFJlbmRlelZvdXMsXG4gfSBmcm9tICcuLi8uLi9hcHAvc2VydmljZXMvbW9kZWxzL3JlbmRlelZvdXMubW9kZWxlJztcbiBpbXBvcnQgeyBOb3RpZlJEViB9IGZyb20gJy4uLy4uL2FwcC9zZXJ2aWNlcy9tb2RlbHMvbm90aWYubW9kZWxlJztcbiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS1jb21tb24uY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW0NoYXRTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4vL3BvdXIgY2hhbmdlciBsZSBub20gZHUgY2FiaW5ldCBzdXIgbGUgY29tbWVudGFpcmUgZGUgbCdpbWFnZSBkdSBjYWJpbmV0ICBcbnB1YmxpYyBOb21DYWJpbmV0IDogc3RyaW5nID0gXCJDYWJpbmV0IEFydGh1ciBPcnRob2RvbnRpc3RlXCI7XG5cblxucHVibGljIGlucHV0OiBhbnk7XG4vL3B1YmxpYyBpbnB1dDogTm90aWZSRFY7XG5wdWJsaWMgTm90aWZtZXNzYWdlMTogYW55O1xuXG5zZXQ6IGFueTtcbnJkdjogQXJyYXk8YW55PiA9IFtdO1xuY2FiaW5ldDogYW55O1xucGhvdG9DYWJpbmV0O1xuY2hhcmdlbWVudDogYm9vbGVhbjtcbmlkIDogbnVtYmVyOyAvL3V0aWxpc8OpIHBvdXIgbCdpbnRlcnZhbCBjJ2VzdCBsJ2llbnRpZmlhbnQgcG91ciBsZSBkw6lzYWN0aXZlclxuLy8gICAgY2FiaW5ldCA9IEdsb2JhbHMuY2FiaW5ldDtcblxuLypjaGF0IGludGVncmF0aW9uKi9cbnB1YmxpYyBtZTogVXNlcjtcbnB1YmxpYyBvdGhlcjogVXNlcjtcbi8vcHVibGljIG1lc3NhZ2VzOiBBcnJheTxNZXNzYWdlPiA7XG5wdWJsaWMgbWVzc2FnZXMgPSBbXTtcblxuLy9wZXJtZXQgZGUgY29tbXVuaXF1ZXIgZW50cmUgZW5mYW50IGV0IHBhcmVudFxuQFZpZXdDaGlsZCgnY2hhdEJveCcpIGNoYXRCb3hSZWY6IEVsZW1lbnRSZWY7XG5cbnByaXZhdGUgZ2V0IGNoYXRCb3goKTogTGlzdFZpZXcge1xuICAgIHJldHVybiB0aGlzLmNoYXRCb3hSZWYubmF0aXZlRWxlbWVudDtcbn1cblxuY29uc3RydWN0b3IocHJpdmF0ZSBjaGF0U2VydmljZTogQ2hhdFNlcnZpY2UpIHtcblxuICAgIC8qIENvbnRlbnUgZHluYW1pcXVlICovXG4gICAgdGhpcy5jaGFyZ2VtZW50ID0gR2xvYmFscy5jaGFyZ2VtZW50O1xuICAgIHRoaXMuY2FiaW5ldCA9IEdsb2JhbHMuY2FiaW5ldFswXTtcbiAgICB0aGlzLnBob3RvQ2FiaW5ldCA9IHRoaXMuY2FiaW5ldC5waG90b19jYWJpbmV0O1xuICAgICBcbiAgICAgIC8qIE5vdGlmaWNhdGlvbiAqL1xuICAgICAgLy9jb25zdCBjaGF0ID0gY2hhdFNlcnZpY2UuZ2V0Q2hhdCgpO1xuXG4gICAgICAvL1xuICAgICAgdGhpcy5tZSA9ICB7XG4gICAgICAgIG5hbWU6ICdNZScsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwicmVzOi8vdXRpbGlzYXRldXJcIiwvLydodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODM3JyxcbiAgICAgICAgY292ZXJVcmw6IFwicmVzOi8vZm9uZC5wbmdcIixcbiAgICAgIH07XG5cbiAgICAgIHRoaXMub3RoZXIgPSB7XG4gICAgICAgIG5hbWU6IFwiRG9jdG9yIEVsZWlzYmFldGggQW5uc1wiLC8vZmFrZXIubmFtZS5maW5kTmFtZSgpLFxuICAgICAgICBwaWN0dXJlVXJsOiBcInJlczovL2xhbWFpXCIsIC8vJ2h0dHBzOi8vdW5zcGxhc2guaXQvMTAwLzEwMD9pbWFnZT04MjMnLFxuICAgICAgICBjb3ZlclVybDogXCJyZXM6Ly9jYWJpbmV0XCIsLy8naHR0cHM6Ly91bnNwbGFzaC5pdC81MDAvNTAwP2ltYWdlPTg1NycsXG4gICAgICB9O1xuICAgICAgXG4gICAgICAvL2xlcyBSRFYgZW4gZHVyXG4gICAgIC8vIGluaXQoIHRoaXMubWUgLCBcImlsIGV0YWl0IHVuZSBmb2lzXCIsIFwiMjAxOC0xMC01NlwiICk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZW5kZXIgPXRoaXMub3RoZXI7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBcIlJlbmRlei12b3VzIGxlIDEyIE9jdCAyMDE4XCI7IFxuICAgICAgICBjb25zdCBkYXRlID0gXCIyMDE4LTEwLTEwXCIgO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgIHNlbmRlcjogc2VuZGVyLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgZGF0ZTogZGF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzZW5kZXIyID0gdGhpcy5vdGhlciA7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQyID0gXCJSZW5kZXotdm91cyBsZSAyMSBPY3QgMjAxOFxcbiBEb2N0ZXVyIEF6bmFyZFxcbiBTY2FubmVyIDNEIFwiOyBcbiAgICAgICAgY29uc3QgZGF0ZTIgPSBcIjIwMTgtMTAtMTBcIiA7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgc2VuZGVyOiBzZW5kZXIyLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQyLFxuICAgICAgICAgIGRhdGU6IGRhdGUyXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgIC8vcGVybWV0IGRlIGNvbnN0cnVpcmUgbGUgbWVzc2FnZSBkZSBsYSBub3RpZiBkZSBsJ2FuZHJvaWRcbiAgICAgIHRoaXMuaW5wdXQgPSB7XG4gICAgICAgIFwiaWRcIjogXCIxMjM0NVwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiUkRWXCIsXG4gICAgICAgIFwiYm9keVwiOiBcIkMnZXN0IHVuIFJEViB1cmdlbnRcIlxuICAgIH07XG4gICAgICAgIC8vdGhpcy5jaGFyZ2VtZW50ID0gR2xvYmFscy5jaGFyZ2VtZW50O1xuICAgICAgIFxuICAgIH1cbiAgXG4gICAgXG4gXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29udGVudSBkZSBHbG9iYWxzLmNhYmluZXQgOiBcIiArIEpTT04uc3RyaW5naWZ5KEdsb2JhbHMuY2FiaW5ldCkgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBUZXN0IDogXCIgKyB0aGlzLmNhYmluZXQucGhvdG9fY2FiaW5ldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gVGVzdCA6IFwiICsgdGhpcy5waG90b0NhYmluZXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnRlbnUgZGUgR2xvYmFscy5wYXRpZW50IDogXCIgKyBKU09OLnN0cmluZ2lmeShHbG9iYWxzLnBhdGllbnQpICk7XG4gICAgXG4gICAgLy8gICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coXCJDb250ZW51IGRlIEdsb2JhbHMuY2FiaW5ldCA6IFwiICsgR2xvYmFscy5jYWJpbmV0KTtcbiAgIFxuICAgICAgIC8vcGVybWV0IGRlIG1ldHRyZSB1biBpbnRlcnZhbCBkYW5zIGxhIG5vdGlmIFxuICAgICB0aGlzLmlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5zY2hlZHVsZSgpOyAgIFxuICAgIH0sIDEwMDAwKTtcbiAgIFxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICBjbGVhckludGVydmFsKHRoaXMuaWQpO1xuLy90aGlzLnNjaGVkdWxlKCk7ICAgXG4gICAgfSwgNDAwMDApOyAgIFxuXG4gICAgdGhpcy5Ob3RpZm1lc3NhZ2UxID0gXCJSZW5kZXotdm91cyAgMTAgaCA0NSBcXG4gRG9jdGV1ciBBdGh1cmUgRXRpZW5uZVxcbiBSZW1wbGFjZW1lbnQgZGUgYmFndWVzLlwiO1xuICAgIExvY2FsTm90aWZpY2F0aW9ucy5hZGRPbk1lc3NhZ2VSZWNlaXZlZENhbGxiYWNrKG5vdGlmaWNhdGlvbkRhdGEgPT4ge1xuICAgICAgICB0aGlzLnNlbmRNZXNzYWdlKCk7ICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0pO1xuICAgIFxuIC8qTG9jYWxOb3RpZmljYXRpb25zLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2sobm90aWZpY2F0aW9uRGF0YSA9PiB7XG4gICBEaWFsb2dzLmFsZXJ0KHtcbiAgICAgIHRpdGxlOiBcIk5vdGlmaWNhdGlvbiByZWNlaXZlZFwiLFxuICAgICAgbWVzc2FnZTogXCJJRDogIEplIHN1aXMgaWNpXCIgKy8vKyBub3RpZmljYXRpb25EYXRhLmlkICtcbiAgICAgIFwiXFxuVGl0bGU6IFwiICsgIFwiUkRWXCIgKy8vIG5vdGlmaWNhdGlvbkRhdGEudGl0bGUgK1xuICAgICAgXCJcXG5Cb2R5OiBFdGMgIGV0YyBldGMgdGVjXCIgLC8vKyBub3RpZmljYXRpb25EYXRhLmJvZHksXG4gICAgICBva0J1dHRvblRleHQ6IFwiRXhjZWxsZW50IVwiXG4gIH0pO1xufVxuKTsqL1xufSAgXG4gICBwdWJsaWMgc2NoZWR1bGUoKSB7XG4gICAgTG9jYWxOb3RpZmljYXRpb25zLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbihncmFudGVkID0+IHtcbiAgICAgICAgaWYoZ3JhbnRlZCkge1xuICAgICAgICAgICAgTG9jYWxOb3RpZmljYXRpb25zLnNjaGVkdWxlKFt7XG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuaW5wdXQuaWQsXG4gICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuaW5wdXQudGl0bGUsXG4gICAgICAgICAgICAgICAgYm9keTogdGhpcy5pbnB1dC5ib2R5LFxuICAgICAgICAgICAgICAgIGF0OiBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICgxMCAqIDEwMDApKVxuICAgICAgICAgICAgfV0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGlyKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiAgICAvLyAtPiBmYW5jeSBhbGVydCBtb2RpZiAvIGFkZCAtLSBzdGFydFxuICAgIHB1YmxpYyBzZW5kTWVzc2FnZSgpOiB2b2lkIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSB0aGlzLmluaXRpYWxpemVNZXNzYWdlV2l0aCh0aGlzLk5vdGlmbWVzc2FnZTEpO1xuICAgICAvLyB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgIC8vIHRoaXMuTm90aWZtZXNzYWdlMSA9IHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VXaXRoKFwiZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVmZ3Nzc2ZmZnFzcVwiKTtcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgIHRoaXMuc2Nyb2xsQ2hhdFRvQm90dG9tKCk7XG4gICAgfVxuICBcbiAgICBwcml2YXRlIGluaXRpYWxpemVNZXNzYWdlV2l0aChjb250ZW50OiBzdHJpbmcpOiBNZXNzYWdlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgIHNlbmRlcjogdGhpcy5tZSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcbiAgICAgIH07XG4gICAgfVxuICBcbiAgICBwdWJsaWMgcHViZGVmaWxlKHB1YiA6IEltYWdlKSB7XG4gICAgICBcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHNjcm9sbENoYXRUb0JvdHRvbSgpOiB2b2lkIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLmNoYXRCb3guc2Nyb2xsVG9JbmRleCggMSApO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICBcbiAgXG4gICAgcHVibGljIGJ1YmJsZUNsYXNzKG1lc3NhZ2U6IE1lc3NhZ2UpOiBzdHJpbmcge1xuICAgICAgY29uc3Qgc2VuZGVyID0gdGhpcy5pc015KG1lc3NhZ2UpID8gJ21lJyA6ICdvdGhlcic7XG4gIFxuICAgICAgcmV0dXJuIGBidWJibGUtZnJvbS0ke3NlbmRlcn1gO1xuICAgIH1cbiAgXG4gICAgcHJpdmF0ZSBpc015KG1lc3NhZ2U6IE1lc3NhZ2UpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiBtZXNzYWdlLnNlbmRlciA9PSB0aGlzLm1lO1xuICAgIH1cbiAgIFxuICAgIC8vIC0+IGZhbmN5IGFsZXJ0IG1vZGlmIC8gYWRkIC0tIGVuZFxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCBzZW5kZXIxOiBVc2VyICwgY29udGVudDE6IHN0cmluZywgZGF0ZTE6IHN0cmluZyApIDogdm9pZCB7XG5cbiAgY29uc3Qgc2VuZGVyID0gc2VuZGVyMSA7XG4gIGNvbnN0IGNvbnRlbnQgPSBjb250ZW50MTsgXG4gIGNvbnN0IGRhdGUgPSBkYXRlMSA7XG4gIHJldHVybiAgdGhpcy5tZXNzYWdlcy5wdXNoKHtcbiAgICBzZW5zc2Rlcjogc2VuZGVyLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgZGF0ZTogZGF0ZVxuICB9KTtcbiAgIFxuIH1cbiJdfQ==