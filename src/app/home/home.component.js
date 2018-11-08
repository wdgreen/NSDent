"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_local_notifications_1 = require("nativescript-local-notifications");
var app = require("tns-core-modules/application");
var chat_service_1 = require("../services/chat.service");
var timer_1 = require("tns-core-modules/timer");
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
        /* Notification */
        //const chat = chatService.getChat();
        this.chatService = chatService;
        //pour changer le nom du cabinet sur le commentaire de l'image du cabinet  
        this.NomCabinet = "Cabinet Arthur Orthodontiste";
        this.rdv = [];
        //public messages: Array<Message> ;
        this.messages = [];
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
        //       this.chargement = false;
        //       console.log("Contenu de Globals.cabinet : " + Globals.cabinet);
        var _this = this;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUN6RSxxRkFBc0U7QUFFdEUsa0RBQW9EO0FBQ3BELHlEQUE0RjtBQUU1RixnREFBb0U7QUFPcEUsNkVBQTZFO0FBQzdFOzs7Ozs7OztFQVFFO0FBU0Y7SUFnQ0EsdUJBQW9CLFdBQXdCO1FBRXRDLGtCQUFrQjtRQUNsQixxQ0FBcUM7UUFIdkIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUE5QjVDLDJFQUEyRTtRQUNwRSxlQUFVLEdBQVksOEJBQThCLENBQUM7UUFRNUQsUUFBRyxHQUFlLEVBQUUsQ0FBQztRQVNyQixtQ0FBbUM7UUFDNUIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQWdCZixFQUFFO1FBQ0YsSUFBSSxDQUFDLEVBQUUsR0FBSTtZQUNULElBQUksRUFBRSxJQUFJO1lBQ1YsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixRQUFRLEVBQUUsZ0JBQWdCO1NBQzNCLENBQUM7UUFFRixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLHdCQUF3QjtZQUM5QixVQUFVLEVBQUUsYUFBYTtZQUN6QixRQUFRLEVBQUUsZUFBZTtTQUMxQixDQUFDO1FBRUYsZ0JBQWdCO1FBQ2pCLHVEQUF1RDtRQUVwRCxJQUFNLE1BQU0sR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQU0sT0FBTyxHQUFHLDRCQUE0QixDQUFDO1FBQzdDLElBQU0sSUFBSSxHQUFHLFlBQVksQ0FBRTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBRTtRQUM1QixJQUFNLFFBQVEsR0FBRywyREFBMkQsQ0FBQztRQUM3RSxJQUFNLEtBQUssR0FBRyxZQUFZLENBQUU7UUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDakIsTUFBTSxFQUFFLE9BQU87WUFDZixPQUFPLEVBQUUsUUFBUTtZQUNqQixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztRQUVMLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsSUFBSSxFQUFFLE9BQU87WUFDYixPQUFPLEVBQUUsS0FBSztZQUNkLE1BQU0sRUFBRSxxQkFBcUI7U0FDaEMsQ0FBQztRQUNFLHVDQUF1QztJQUUzQyxDQUFDO0lBckRMLHNCQUFZLGtDQUFPO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3pDLENBQUM7OztPQUFBO0lBd0RHLGdDQUFRLEdBQVI7UUFFQSxpQ0FBaUM7UUFDakMsd0VBQXdFO1FBSHhFLGlCQThCSDtRQXpCTSw2Q0FBNkM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBRyxtQkFBVyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsQixDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFVixVQUFVLENBQUM7WUFDVixxQkFBYSxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixxQkFBcUI7UUFDakIsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRVYsSUFBSSxDQUFDLGFBQWEsR0FBRywwRUFBMEUsQ0FBQztRQUNoRyxxREFBa0IsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFBLGdCQUFnQjtZQUN2QyxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsQ0FBQyxDQUFDLENBQUM7UUFFTjs7Ozs7Ozs7O1dBU0c7SUFDSixDQUFDO0lBQ1MsZ0NBQVEsR0FBZjtRQUFBLGlCQWVGO1FBZEcscURBQWtCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPO1lBQy9DLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ1QscURBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQ3pCLEVBQUUsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ2pCLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7d0JBQ3ZCLElBQUksRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7d0JBQ3JCLEVBQUUsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO3FCQUNuRCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ1QsQ0FBQyxFQUFFLFVBQUEsS0FBSztvQkFDSixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixDQUFDLENBQUMsQ0FBQztZQUVQLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRyxzQ0FBc0M7SUFDL0IsbUNBQVcsR0FBbEI7UUFDRSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hFLCtCQUErQjtRQUMvQiw0RkFBNEY7UUFDM0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVPLDZDQUFxQixHQUE3QixVQUE4QixPQUFlO1FBQzNDLE1BQU0sQ0FBQztZQUNMLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNmLElBQUksRUFBRSxJQUFJLElBQUksRUFBRTtTQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVNLGlDQUFTLEdBQWhCLFVBQWlCLEdBQVc7SUFFNUIsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtRQUFBLGlCQUlDO1FBSEMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUUsQ0FBQyxDQUFFLENBQUM7UUFDbEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztJQUdNLG1DQUFXLEdBQWxCLFVBQW1CLE9BQWdCO1FBQ2pDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxpQkFBZSxNQUFRLENBQUM7SUFDakMsQ0FBQztJQUVPLDRCQUFJLEdBQVosVUFBYSxPQUFnQjtRQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQXJKaUI7UUFBckIsZ0JBQVMsQ0FBQyxTQUFTLENBQUM7a0NBQWEsaUJBQVU7cURBQUM7SUF4QmhDLGFBQWE7UUFSekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7U0FDM0IsQ0FBQzt5Q0FrQytCLDBCQUFXO09BaEMvQixhQUFhLENBZ0x6QjtJQUFELG9CQUFDO0NBQUEsQUFoTEQsSUFnTEM7QUFoTFksc0NBQWE7QUFrTDFCLGNBQXNCLE9BQWEsRUFBRyxRQUFnQixFQUFFLEtBQWE7SUFFbkUsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFFO0lBQ3hCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQztJQUN6QixJQUFNLElBQUksR0FBRyxLQUFLLENBQUU7SUFDcEIsTUFBTSxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3pCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQyxDQUFDO0FBRUosQ0FBQztBQVhGLG9CQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsVmlld0NoaWxkLCBFbGVtZW50UmVmLCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBMb2NhbE5vdGlmaWNhdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvY2FsLW5vdGlmaWNhdGlvbnNcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgQ2hhdFNlcnZpY2UsIFVzZXIsIE1lc3NhZ2UgLCBQYXJ0aWNpcGFudHMgLCBDaGF0IH0gZnJvbSAnLi4vc2VydmljZXMvY2hhdC5zZXJ2aWNlJztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IHNldEludGVydmFsLCBjbGVhckludGVydmFsIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdGltZXJcIjtcbmltcG9ydCB7IEltYWdlICB9IGZyb20gXCJ1aS9pbWFnZS9pbWFnZVwiO1xuXG5pbXBvcnQgKiBhcyBlbnVtcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtc1wiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcblxuLy9pbXBvcnQgeyBSZW5kZXpWb3VzU2VydmljZSB9IGZyb20gJy4uLy4uL2FwcC9zZXJ2aWNlcy9yZW5kZXotdm91cy5zZXJ2aWNlJztcbi8qaW1wb3J0IHtcbiAgUGF0aWVudFJkdiwgXG4gIENhYmluZXRSZHYsXG4gIE1lc3NhZ2UgLFxuICBQYXJ0aWNpcGFudHMsXG4gIFJlbmRlelZvdXMsXG4gfSBmcm9tICcuLi8uLi9hcHAvc2VydmljZXMvbW9kZWxzL3JlbmRlelZvdXMubW9kZWxlJztcbiBpbXBvcnQgeyBOb3RpZlJEViB9IGZyb20gJy4uLy4uL2FwcC9zZXJ2aWNlcy9tb2RlbHMvbm90aWYubW9kZWxlJztcbiovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS1jb21tb24uY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW0NoYXRTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4vL3BvdXIgY2hhbmdlciBsZSBub20gZHUgY2FiaW5ldCBzdXIgbGUgY29tbWVudGFpcmUgZGUgbCdpbWFnZSBkdSBjYWJpbmV0ICBcbnB1YmxpYyBOb21DYWJpbmV0IDogc3RyaW5nID0gXCJDYWJpbmV0IEFydGh1ciBPcnRob2RvbnRpc3RlXCI7XG5cblxucHVibGljIGlucHV0OiBhbnk7XG4vL3B1YmxpYyBpbnB1dDogTm90aWZSRFY7XG5wdWJsaWMgTm90aWZtZXNzYWdlMTogYW55O1xuXG5zZXQ6IGFueTtcbnJkdjogQXJyYXk8YW55PiA9IFtdO1xuY2FiaW5ldDogYW55O1xuY2hhcmdlbWVudDogYm9vbGVhbjtcbmlkIDogbnVtYmVyOyAvL3V0aWxpc8OpIHBvdXIgbCdpbnRlcnZhbCBjJ2VzdCBsJ2llbnRpZmlhbnQgcG91ciBsZSBkw6lzYWN0aXZlclxuLy8gICAgY2FiaW5ldCA9IEdsb2JhbHMuY2FiaW5ldDtcblxuLypjaGF0IGludGVncmF0aW9uKi9cbnB1YmxpYyBtZTogVXNlcjtcbnB1YmxpYyBvdGhlcjogVXNlcjtcbi8vcHVibGljIG1lc3NhZ2VzOiBBcnJheTxNZXNzYWdlPiA7XG5wdWJsaWMgbWVzc2FnZXMgPSBbXTtcblxuLy9wZXJtZXQgZGUgY29tbXVuaXF1ZXIgZW50cmUgZW5mYW50IGV0IHBhcmVudFxuQFZpZXdDaGlsZCgnY2hhdEJveCcpIGNoYXRCb3hSZWY6IEVsZW1lbnRSZWY7XG5cbnByaXZhdGUgZ2V0IGNoYXRCb3goKTogTGlzdFZpZXcge1xuICAgIHJldHVybiB0aGlzLmNoYXRCb3hSZWYubmF0aXZlRWxlbWVudDtcbn1cblxuICAgIFxuXG5jb25zdHJ1Y3Rvcihwcml2YXRlIGNoYXRTZXJ2aWNlOiBDaGF0U2VydmljZSkge1xuICAgICBcbiAgICAgIC8qIE5vdGlmaWNhdGlvbiAqL1xuICAgICAgLy9jb25zdCBjaGF0ID0gY2hhdFNlcnZpY2UuZ2V0Q2hhdCgpO1xuXG4gICAgICAvL1xuICAgICAgdGhpcy5tZSA9ICB7XG4gICAgICAgIG5hbWU6ICdNZScsXG4gICAgICAgIHBpY3R1cmVVcmw6IFwicmVzOi8vdXRpbGlzYXRldXJcIiwvLydodHRwczovL3Vuc3BsYXNoLml0LzEwMC8xMDA/aW1hZ2U9ODM3JyxcbiAgICAgICAgY292ZXJVcmw6IFwicmVzOi8vZm9uZC5wbmdcIixcbiAgICAgIH07XG5cbiAgICAgIHRoaXMub3RoZXIgPSB7XG4gICAgICAgIG5hbWU6IFwiRG9jdG9yIEVsZWlzYmFldGggQW5uc1wiLC8vZmFrZXIubmFtZS5maW5kTmFtZSgpLFxuICAgICAgICBwaWN0dXJlVXJsOiBcInJlczovL2xhbWFpXCIsIC8vJ2h0dHBzOi8vdW5zcGxhc2guaXQvMTAwLzEwMD9pbWFnZT04MjMnLFxuICAgICAgICBjb3ZlclVybDogXCJyZXM6Ly9jYWJpbmV0XCIsLy8naHR0cHM6Ly91bnNwbGFzaC5pdC81MDAvNTAwP2ltYWdlPTg1NycsXG4gICAgICB9O1xuICAgICAgXG4gICAgICAvL2xlcyBSRFYgZW4gZHVyXG4gICAgIC8vIGluaXQoIHRoaXMubWUgLCBcImlsIGV0YWl0IHVuZSBmb2lzXCIsIFwiMjAxOC0xMC01NlwiICk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzZW5kZXIgPXRoaXMub3RoZXI7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBcIlJlbmRlei12b3VzIGxlIDEyIE9jdCAyMDE4XCI7IFxuICAgICAgICBjb25zdCBkYXRlID0gXCIyMDE4LTEwLTEwXCIgO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgIHNlbmRlcjogc2VuZGVyLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG4gICAgICAgICAgZGF0ZTogZGF0ZVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzZW5kZXIyID0gdGhpcy5vdGhlciA7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQyID0gXCJSZW5kZXotdm91cyBsZSAyMSBPY3QgMjAxOFxcbiBEb2N0ZXVyIEF6bmFyZFxcbiBTY2FubmVyIDNEIFwiOyBcbiAgICAgICAgY29uc3QgZGF0ZTIgPSBcIjIwMTgtMTAtMTBcIiA7XG4gICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgc2VuZGVyOiBzZW5kZXIyLFxuICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQyLFxuICAgICAgICAgIGRhdGU6IGRhdGUyXG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgIC8vcGVybWV0IGRlIGNvbnN0cnVpcmUgbGUgbWVzc2FnZSBkZSBsYSBub3RpZiBkZSBsJ2FuZHJvaWRcbiAgICAgIHRoaXMuaW5wdXQgPSB7XG4gICAgICAgIFwiaWRcIjogXCIxMjM0NVwiLFxuICAgICAgICBcInRpdGxlXCI6IFwiUkRWXCIsXG4gICAgICAgIFwiYm9keVwiOiBcIkMnZXN0IHVuIFJEViB1cmdlbnRcIlxuICAgIH07XG4gICAgICAgIC8vdGhpcy5jaGFyZ2VtZW50ID0gR2xvYmFscy5jaGFyZ2VtZW50O1xuICAgICAgIFxuICAgIH1cbiAgXG4gICAgXG4gXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgICAvLyAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAvLyAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgZGUgR2xvYmFscy5jYWJpbmV0IDogXCIgKyBHbG9iYWxzLmNhYmluZXQpO1xuICAgXG4gICAgICAgLy9wZXJtZXQgZGUgbWV0dHJlIHVuIGludGVydmFsIGRhbnMgbGEgbm90aWYgXG4gICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnNjaGVkdWxlKCk7ICAgXG4gICAgfSwgMTAwMDApO1xuICAgXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pZCk7XG4vL3RoaXMuc2NoZWR1bGUoKTsgICBcbiAgICB9LCA0MDAwMCk7ICAgXG5cbiAgICB0aGlzLk5vdGlmbWVzc2FnZTEgPSBcIlJlbmRlei12b3VzICAxMCBoIDQ1IFxcbiBEb2N0ZXVyIEF0aHVyZSBFdGllbm5lXFxuIFJlbXBsYWNlbWVudCBkZSBiYWd1ZXMuXCI7XG4gICAgTG9jYWxOb3RpZmljYXRpb25zLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2sobm90aWZpY2F0aW9uRGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoKTsgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgfSk7XG4gICAgXG4gLypMb2NhbE5vdGlmaWNhdGlvbnMuYWRkT25NZXNzYWdlUmVjZWl2ZWRDYWxsYmFjayhub3RpZmljYXRpb25EYXRhID0+IHtcbiAgIERpYWxvZ3MuYWxlcnQoe1xuICAgICAgdGl0bGU6IFwiTm90aWZpY2F0aW9uIHJlY2VpdmVkXCIsXG4gICAgICBtZXNzYWdlOiBcIklEOiAgSmUgc3VpcyBpY2lcIiArLy8rIG5vdGlmaWNhdGlvbkRhdGEuaWQgK1xuICAgICAgXCJcXG5UaXRsZTogXCIgKyAgXCJSRFZcIiArLy8gbm90aWZpY2F0aW9uRGF0YS50aXRsZSArXG4gICAgICBcIlxcbkJvZHk6IEV0YyAgZXRjIGV0YyB0ZWNcIiAsLy8rIG5vdGlmaWNhdGlvbkRhdGEuYm9keSxcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJFeGNlbGxlbnQhXCJcbiAgfSk7XG59XG4pOyovXG59ICBcbiAgIHB1YmxpYyBzY2hlZHVsZSgpIHtcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKGdyYW50ZWQgPT4ge1xuICAgICAgICBpZihncmFudGVkKSB7XG4gICAgICAgICAgICBMb2NhbE5vdGlmaWNhdGlvbnMuc2NoZWR1bGUoW3tcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5pbnB1dC5pZCxcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5pbnB1dC50aXRsZSxcbiAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmlucHV0LmJvZHksXG4gICAgICAgICAgICAgICAgYXQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDEwICogMTAwMCkpXG4gICAgICAgICAgICB9XSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH0pO1xufVxuICAgIC8vIC0+IGZhbmN5IGFsZXJ0IG1vZGlmIC8gYWRkIC0tIHN0YXJ0XG4gICAgcHVibGljIHNlbmRNZXNzYWdlKCk6IHZvaWQge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuaW5pdGlhbGl6ZU1lc3NhZ2VXaXRoKHRoaXMuTm90aWZtZXNzYWdlMSk7XG4gICAgIC8vIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICAgLy8gdGhpcy5Ob3RpZm1lc3NhZ2UxID0gdGhpcy5pbml0aWFsaXplTWVzc2FnZVdpdGgoXCJlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZnc3NzZmZmcXNxXCIpO1xuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zY3JvbGxDaGF0VG9Cb3R0b20oKTtcbiAgICB9XG4gIFxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZU1lc3NhZ2VXaXRoKGNvbnRlbnQ6IHN0cmluZyk6IE1lc3NhZ2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgc2VuZGVyOiB0aGlzLm1lLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgfTtcbiAgICB9XG4gIFxuICAgIHB1YmxpYyBwdWJkZWZpbGUocHViIDogSW1hZ2UpIHtcbiAgICAgIFxuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc2Nyb2xsQ2hhdFRvQm90dG9tKCk6IHZvaWQge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhdEJveC5zY3JvbGxUb0luZGV4KCAxICk7XG4gICAgICB9LCAwKTtcbiAgICB9XG4gIFxuICBcbiAgICBwdWJsaWMgYnViYmxlQ2xhc3MobWVzc2FnZTogTWVzc2FnZSk6IHN0cmluZyB7XG4gICAgICBjb25zdCBzZW5kZXIgPSB0aGlzLmlzTXkobWVzc2FnZSkgPyAnbWUnIDogJ290aGVyJztcbiAgXG4gICAgICByZXR1cm4gYGJ1YmJsZS1mcm9tLSR7c2VuZGVyfWA7XG4gICAgfVxuICBcbiAgICBwcml2YXRlIGlzTXkobWVzc2FnZTogTWVzc2FnZSk6IGJvb2xlYW4ge1xuICAgICAgcmV0dXJuIG1lc3NhZ2Uuc2VuZGVyID09IHRoaXMubWU7XG4gICAgfVxuICAgXG4gICAgLy8gLT4gZmFuY3kgYWxlcnQgbW9kaWYgLyBhZGQgLS0gZW5kXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoIHNlbmRlcjE6IFVzZXIgLCBjb250ZW50MTogc3RyaW5nLCBkYXRlMTogc3RyaW5nICkgOiB2b2lkIHtcblxuICBjb25zdCBzZW5kZXIgPSBzZW5kZXIxIDtcbiAgY29uc3QgY29udGVudCA9IGNvbnRlbnQxOyBcbiAgY29uc3QgZGF0ZSA9IGRhdGUxIDtcbiAgcmV0dXJuICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgIHNlbnNzZGVyOiBzZW5kZXIsXG4gICAgY29udGVudDogY29udGVudCxcbiAgICBkYXRlOiBkYXRlXG4gIH0pO1xuICAgXG4gfVxuIl19