"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var connectivite_service_1 = require("./connectivite.service");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var globals_1 = require("~/app/services/globals");
var DataService = /** @class */ (function () {
    function DataService(http, connectiviteService) {
        this.http = http;
        this.connectiviteService = connectiviteService;
        this.documents = file_system_1.knownFolders.documents();
    }
    // Used for skip Login page (SessionGuard)
    DataService.prototype.testeInfos = function (tDossier, tFichier) {
        this.dossier = this.documents.getFolder(tDossier);
        if (this.dossier.contains(tFichier + ".json")) {
            return true;
        }
        else {
            return false;
        }
    };
    // Used for store infos in Globals (SessionGuard)
    DataService.prototype.globaliseInfos = function (lDossier, lFichier) {
        this.dossier = this.documents.getFolder(lDossier);
        this.fichier = this.dossier.getFile(lFichier + ".json");
        this.fichier.readText()
            .then(function (res) {
            console.log("Contenu local récupéré de " + lFichier);
            globals_1.Globals.cabinet = JSON.parse(res);
        })
            .catch(function (err) {
            console.log("Pas de contenu local pour " + lFichier);
            return;
        });
    };
    // Used for remove infos in Globals (SessionGuard)
    DataService.prototype.deglobaliseInfos = function () {
        delete globals_1.Globals.cabinet;
    };
    // Used for write datas in local file (LoginComponent)
    DataService.prototype.ecritInfos = function (eDossier, eFichier, eContenu) {
        var _this = this;
        this.dossier = this.documents.getFolder(eDossier);
        this.fichier = this.dossier.getFile(eFichier + ".json");
        this.fichier.writeText(JSON.stringify(eContenu))
            .then(function (result) {
            _this.fichier.readText()
                .then(function (res) {
                console.log("Contenu local de " + eFichier + " mis à jour");
                console.log(eFichier + " = " + res);
            })
                .catch(function (err) {
                console.log(err.stack);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ;
    // Used for delete local file (SettingsComponent)
    DataService.prototype.supprimeInfos = function (sDossier) {
        this.dossier = this.documents.getFolder(sDossier);
        this.dossier.remove();
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            connectivite_service_1.ConnectiviteService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
// // If user connected -> get informations from server and write them on local file
// if (this.connectiviteService.testeConnectivite() ) {
//     this.http.get<Patient>("http://www.fabriquenumerique.fr/OrthalisDemo/NativeScript/patient.json").subscribe(
//         data => {
//             this.patient = data;
//             this.fichier.writeText(JSON.stringify(data))
//                 .then(result => {
//                     this.fichier.readText()
//                         .then(res => {
//                             console.log("Contenu local mis à jour");
//                             console.log("Ecriture réussie du fichier " + this.fichier.path);
//                             console.log("contenu écrit : " + res);
//                         })
//                         .catch(err => {
//                             console.log(err.stack);
//                         });
//                 })
//                 .catch(err => {
//                     console.log(err);
//                 });
//         },
//         err => {
//             console.log("Service patient : " + err);
//         }
//     );
// }
// else if (!this.connectiviteService.testeConnectivite() && this.recupLocal) {
//     console.log("Contenu local récupéré, surveillance connectivité ...");
//     this.connectiviteService.surveilleReseau();
// }
// else {
//     alert("Veuillez vous connecter à internet pour récupérer vos informations, surveillance connectivité ...");
//     this.connectiviteService.surveilleReseau();
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCwrREFBNkQ7QUFDN0Qsd0VBQXNGO0FBQ3RGLGtEQUFpRDtBQUdqRDtJQU1JLHFCQUFvQixJQUFnQixFQUNoQixtQkFBd0M7UUFEeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLGdDQUFVLEdBQVYsVUFBVyxRQUFRLEVBQUUsUUFBUTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWlEO0lBQ2pELG9DQUFjLEdBQWQsVUFBZSxRQUFRLEVBQUUsUUFBUTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQ2xCLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELGlCQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsUUFBUSxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0RBQWtEO0lBQ2xELHNDQUFnQixHQUFoQjtRQUNJLE9BQU8saUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCxnQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQXZDLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2lCQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQyxDQUFDO2dCQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQSxDQUFDO0lBRUYsaURBQWlEO0lBQ2pELG1DQUFhLEdBQWIsVUFBYyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBcEVRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FPaUIsaUJBQVU7WUFDSywwQ0FBbUI7T0FQbkQsV0FBVyxDQXVFdkI7SUFBRCxrQkFBQztDQUFBLEFBdkVELElBdUVDO0FBdkVZLGtDQUFXO0FBMkVoQixvRkFBb0Y7QUFDcEYsdURBQXVEO0FBQ3ZELGtIQUFrSDtBQUNsSCxvQkFBb0I7QUFDcEIsbUNBQW1DO0FBQ25DLDJEQUEyRDtBQUMzRCxvQ0FBb0M7QUFDcEMsOENBQThDO0FBQzlDLHlDQUF5QztBQUN6Qyx1RUFBdUU7QUFDdkUsK0ZBQStGO0FBQy9GLHFFQUFxRTtBQUNyRSw2QkFBNkI7QUFDN0IsMENBQTBDO0FBQzFDLHNEQUFzRDtBQUN0RCw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQyx3Q0FBd0M7QUFDeEMsc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYixtQkFBbUI7QUFDbkIsdURBQXVEO0FBQ3ZELFlBQVk7QUFDWixTQUFTO0FBQ1QsSUFBSTtBQUNKLCtFQUErRTtBQUMvRSw0RUFBNEU7QUFDNUUsa0RBQWtEO0FBQ2xELElBQUk7QUFDSixTQUFTO0FBQ1Qsa0hBQWtIO0FBQ2xILGtEQUFrRDtBQUNsRCxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBDb25uZWN0aXZpdGVTZXJ2aWNlIH0gZnJvbSBcIi4vY29ubmVjdGl2aXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZvbGRlciwgRmlsZSwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gICAgZG9jdW1lbnRzOiBGb2xkZXI7XG4gICAgZG9zc2llcjogRm9sZGVyO1xuICAgIGZpY2hpZXI6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTogQ29ubmVjdGl2aXRlU2VydmljZSkgeyBcbiAgICAgICAgdGhpcy5kb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3Igc2tpcCBMb2dpbiBwYWdlIChTZXNzaW9uR3VhcmQpXG4gICAgdGVzdGVJbmZvcyh0RG9zc2llciwgdEZpY2hpZXIpIHtcbiAgICAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKHREb3NzaWVyKTtcbiAgICAgICAgaWYodGhpcy5kb3NzaWVyLmNvbnRhaW5zKHRGaWNoaWVyICsgXCIuanNvblwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVc2VkIGZvciBzdG9yZSBpbmZvcyBpbiBHbG9iYWxzIChTZXNzaW9uR3VhcmQpXG4gICAgZ2xvYmFsaXNlSW5mb3MobERvc3NpZXIsIGxGaWNoaWVyKSB7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihsRG9zc2llcik7XG4gICAgICAgIHRoaXMuZmljaGllciA9IHRoaXMuZG9zc2llci5nZXRGaWxlKGxGaWNoaWVyICsgXCIuanNvblwiKTtcblxuICAgICAgICB0aGlzLmZpY2hpZXIucmVhZFRleHQoKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgcsOpY3Vww6lyw6kgZGUgXCIgKyBsRmljaGllcik7XG4gICAgICAgICAgICAgICAgR2xvYmFscy5jYWJpbmV0ID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzIGRlIGNvbnRlbnUgbG9jYWwgcG91ciBcIiArIGxGaWNoaWVyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBVc2VkIGZvciByZW1vdmUgaW5mb3MgaW4gR2xvYmFscyAoU2Vzc2lvbkd1YXJkKVxuICAgIGRlZ2xvYmFsaXNlSW5mb3MoKSB7XG4gICAgICAgIGRlbGV0ZSBHbG9iYWxzLmNhYmluZXQ7XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3Igd3JpdGUgZGF0YXMgaW4gbG9jYWwgZmlsZSAoTG9naW5Db21wb25lbnQpXG4gICAgZWNyaXRJbmZvcyhlRG9zc2llciwgZUZpY2hpZXIsIGVDb250ZW51KSB7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihlRG9zc2llcik7XG4gICAgICAgIHRoaXMuZmljaGllciA9IHRoaXMuZG9zc2llci5nZXRGaWxlKGVGaWNoaWVyICsgXCIuanNvblwiKTtcblxuICAgICAgICB0aGlzLmZpY2hpZXIud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KGVDb250ZW51KSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBsb2NhbCBkZSBcIiArIGVGaWNoaWVyICsgXCIgbWlzIMOgIGpvdXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlRmljaGllciArIFwiID0gXCIgKyByZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gVXNlZCBmb3IgZGVsZXRlIGxvY2FsIGZpbGUgKFNldHRpbmdzQ29tcG9uZW50KVxuICAgIHN1cHByaW1lSW5mb3Moc0Rvc3NpZXIpIHtcbiAgICAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKHNEb3NzaWVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZG9zc2llci5yZW1vdmUoKTtcbiAgICB9XG5cbi8vIEVuZCBEYXRhU2VydmljZVxufVxuXG5cblxuICAgICAgICAvLyAvLyBJZiB1c2VyIGNvbm5lY3RlZCAtPiBnZXQgaW5mb3JtYXRpb25zIGZyb20gc2VydmVyIGFuZCB3cml0ZSB0aGVtIG9uIGxvY2FsIGZpbGVcbiAgICAgICAgLy8gaWYgKHRoaXMuY29ubmVjdGl2aXRlU2VydmljZS50ZXN0ZUNvbm5lY3Rpdml0ZSgpICkge1xuICAgICAgICAvLyAgICAgdGhpcy5odHRwLmdldDxQYXRpZW50PihcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL05hdGl2ZVNjcmlwdC9wYXRpZW50Lmpzb25cIikuc3Vic2NyaWJlKFxuICAgICAgICAvLyAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnBhdGllbnQgPSBkYXRhO1xuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZpY2hpZXIud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmZpY2hpZXIucmVhZFRleHQoKVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb250ZW51IGxvY2FsIG1pcyDDoCBqb3VyXCIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFY3JpdHVyZSByw6l1c3NpZSBkdSBmaWNoaWVyIFwiICsgdGhpcy5maWNoaWVyLnBhdGgpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb250ZW51IMOpY3JpdCA6IFwiICsgcmVzKTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBlcnIgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgcGF0aWVudCA6IFwiICsgZXJyKTtcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICApO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2UgaWYgKCF0aGlzLmNvbm5lY3Rpdml0ZVNlcnZpY2UudGVzdGVDb25uZWN0aXZpdGUoKSAmJiB0aGlzLnJlY3VwTG9jYWwpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBsb2NhbCByw6ljdXDDqXLDqSwgc3VydmVpbGxhbmNlIGNvbm5lY3Rpdml0w6kgLi4uXCIpO1xuICAgICAgICAvLyAgICAgdGhpcy5jb25uZWN0aXZpdGVTZXJ2aWNlLnN1cnZlaWxsZVJlc2VhdSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGVsc2Uge1xuICAgICAgICAvLyAgICAgYWxlcnQoXCJWZXVpbGxleiB2b3VzIGNvbm5lY3RlciDDoCBpbnRlcm5ldCBwb3VyIHLDqWN1cMOpcmVyIHZvcyBpbmZvcm1hdGlvbnMsIHN1cnZlaWxsYW5jZSBjb25uZWN0aXZpdMOpIC4uLlwiKTtcbiAgICAgICAgLy8gICAgIHRoaXMuY29ubmVjdGl2aXRlU2VydmljZS5zdXJ2ZWlsbGVSZXNlYXUoKTtcbiAgICAgICAgLy8gfVxuXG4iXX0=