"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var connectivite_service_1 = require("./connectivite.service");
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
            console.log("Contenu local récupéré de " + lFichier + ".json");
            // Uggly ...
            if (lFichier == "cabinet") {
                globals_1.Globals.cabinet = JSON.parse(res);
            }
            if (lFichier == "patient") {
                globals_1.Globals.patient = JSON.parse(res);
            }
        })
            .catch(function (err) {
            console.log("Pas de contenu local pour " + lFichier + ".json");
            return;
        });
    };
    // Used for remove infos in Globals (SessionGuard)
    DataService.prototype.deglobaliseInfos = function () {
        delete globals_1.Globals.cabinet;
        delete globals_1.Globals.patient;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCx3RUFBc0Y7QUFFdEYsK0RBQTZEO0FBQzdELGtEQUFpRDtBQUdqRDtJQU1JLHFCQUFvQixJQUFnQixFQUNoQixtQkFBd0M7UUFEeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLGdDQUFVLEdBQVYsVUFBVyxRQUFRLEVBQUUsUUFBUTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWlEO0lBQ2pELG9DQUFjLEdBQWQsVUFBZSxRQUFRLEVBQUUsUUFBUTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQ2xCLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUMvRCxZQUFZO1lBQ1osRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsaUJBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDaEUsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsaUJBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsUUFBUSxHQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxzQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8saUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCxnQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQXZDLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2lCQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsUUFBUSxHQUFHLGFBQWEsQ0FBQyxDQUFDO2dCQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFBQSxDQUFDO0lBRUYsaURBQWlEO0lBQ2pELG1DQUFhLEdBQWIsVUFBYyxRQUFRO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBdkVRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FPaUIsaUJBQVU7WUFDSywwQ0FBbUI7T0FQbkQsV0FBVyxDQTBFdkI7SUFBRCxrQkFBQztDQUFBLEFBMUVELElBMEVDO0FBMUVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuaW1wb3J0IHsgRm9sZGVyLCBGaWxlLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiO1xuXG5pbXBvcnQgeyBDb25uZWN0aXZpdGVTZXJ2aWNlIH0gZnJvbSBcIi4vY29ubmVjdGl2aXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwifi9hcHAvc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YVNlcnZpY2Uge1xuXG4gICAgZG9jdW1lbnRzOiBGb2xkZXI7XG4gICAgZG9zc2llcjogRm9sZGVyO1xuICAgIGZpY2hpZXI6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIFxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTogQ29ubmVjdGl2aXRlU2VydmljZSkgeyBcbiAgICAgICAgdGhpcy5kb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3Igc2tpcCBMb2dpbiBwYWdlIChTZXNzaW9uR3VhcmQpXG4gICAgdGVzdGVJbmZvcyh0RG9zc2llciwgdEZpY2hpZXIpIHtcbiAgICAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKHREb3NzaWVyKTtcbiAgICAgICAgaWYodGhpcy5kb3NzaWVyLmNvbnRhaW5zKHRGaWNoaWVyICsgXCIuanNvblwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVc2VkIGZvciBzdG9yZSBpbmZvcyBpbiBHbG9iYWxzIChTZXNzaW9uR3VhcmQpXG4gICAgZ2xvYmFsaXNlSW5mb3MobERvc3NpZXIsIGxGaWNoaWVyKSB7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihsRG9zc2llcik7XG4gICAgICAgIHRoaXMuZmljaGllciA9IHRoaXMuZG9zc2llci5nZXRGaWxlKGxGaWNoaWVyICsgXCIuanNvblwiKTtcblxuICAgICAgICB0aGlzLmZpY2hpZXIucmVhZFRleHQoKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgcsOpY3Vww6lyw6kgZGUgXCIgKyBsRmljaGllciArIFwiLmpzb25cIik7XG4gICAgICAgICAgICAgICAgLy8gVWdnbHkgLi4uXG4gICAgICAgICAgICAgICAgaWYobEZpY2hpZXIgPT0gXCJjYWJpbmV0XCIpIHsgR2xvYmFscy5jYWJpbmV0ID0gSlNPTi5wYXJzZShyZXMpOyB9XG4gICAgICAgICAgICAgICAgaWYobEZpY2hpZXIgPT0gXCJwYXRpZW50XCIpIHsgR2xvYmFscy5wYXRpZW50ID0gSlNPTi5wYXJzZShyZXMpOyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXMgZGUgY29udGVudSBsb2NhbCBwb3VyIFwiICsgbEZpY2hpZXIgICsgXCIuanNvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBVc2VkIGZvciByZW1vdmUgaW5mb3MgaW4gR2xvYmFscyAoU2Vzc2lvbkd1YXJkKVxuICAgIGRlZ2xvYmFsaXNlSW5mb3MoKSB7XG4gICAgICAgIGRlbGV0ZSBHbG9iYWxzLmNhYmluZXQ7XG4gICAgICAgIGRlbGV0ZSBHbG9iYWxzLnBhdGllbnQ7XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3Igd3JpdGUgZGF0YXMgaW4gbG9jYWwgZmlsZSAoTG9naW5Db21wb25lbnQpXG4gICAgZWNyaXRJbmZvcyhlRG9zc2llciwgZUZpY2hpZXIsIGVDb250ZW51KSB7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihlRG9zc2llcik7XG4gICAgICAgIHRoaXMuZmljaGllciA9IHRoaXMuZG9zc2llci5nZXRGaWxlKGVGaWNoaWVyICsgXCIuanNvblwiKTtcblxuICAgICAgICB0aGlzLmZpY2hpZXIud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KGVDb250ZW51KSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBsb2NhbCBkZSBcIiArIGVGaWNoaWVyICsgXCIgbWlzIMOgIGpvdXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlRmljaGllciArIFwiID0gXCIgKyByZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gVXNlZCBmb3IgZGVsZXRlIGxvY2FsIGZpbGUgKFNldHRpbmdzQ29tcG9uZW50KVxuICAgIHN1cHByaW1lSW5mb3Moc0Rvc3NpZXIpIHtcbiAgICAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKHNEb3NzaWVyKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZG9zc2llci5yZW1vdmUoKTtcbiAgICB9XG5cbi8vIEVuZCBEYXRhU2VydmljZVxufSJdfQ==