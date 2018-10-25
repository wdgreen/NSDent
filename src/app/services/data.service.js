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
    DataService.prototype.testeInfos = function (tDossier, tFichier) {
        this.dossier = this.documents.getFolder(tDossier);
        if (this.dossier.contains(tFichier)) {
            return true;
        }
        else {
            return false;
        }
    };
    DataService.prototype.litInfos = function (lDossier, lFichier) {
        this.dossier = this.documents.getFolder(lDossier);
        this.fichier = this.dossier.getFile(lFichier);
        this.fichier.readText()
            .then(function (res) {
            console.log("Contenu local récupéré de " + lFichier);
            globals_1.Globals.cabinet = JSON.parse(res);
        })
            .catch(function (err) {
            console.log("Pas de contenu local pour " + lFichier);
            return;
        });
        console.log("variable globale = " + globals_1.Globals.cabinet);
    };
    DataService.prototype.ecritInfos = function (eDossier, eFichier, eContenu) {
        var _this = this;
        this.dossier = this.documents.getFolder(eDossier);
        this.fichier = this.dossier.getFile(eFichier);
        this.fichier.writeText(JSON.stringify(eContenu))
            .then(function (result) {
            _this.fichier.readText()
                .then(function (res) {
                console.log("Contenu local de " + eFichier + " mis à jour");
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
// recupereInfos(fDossier, fFichier) {
//     this.documents = knownFolders.documents();
//     this.dossier = this.documents.getFolder(fDossier);
//     this.fichier = this.dossier.getFile(fFichier);
//     // Always read a local file
//     this.fichier.readText()
//         .then((res) => {
//             console.log("Contenu local récupéré de " + fFichier);
//             this.recupLocal = true;
//             Globals.cabinet = JSON.parse(res);
//         })
//         // If user not connected and run app for the first time
//         .catch((err) => {
//             console.log("Pas de contenu local à récupérer : " + err);
//             this.recupLocal = false;
//             return err;
//     });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUUvRCwrREFBNkQ7QUFDN0Qsd0VBQXNGO0FBQ3RGLGtEQUFpRDtBQUdqRDtJQU1JLHFCQUFvQixJQUFnQixFQUNoQixtQkFBd0M7UUFEeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLFFBQVEsRUFBRSxRQUFRO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFRLEdBQVIsVUFBUyxRQUFRLEVBQUUsUUFBUTtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDbEIsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsUUFBUSxD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SEFBa0g7QUFDbEgsa0RBQWtEO0FBQ2xELElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9jb25uZWN0aXZpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgRm9sZGVyLCBGaWxlLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG5cbiAgICBkb2N1bWVudHM6IEZvbGRlcjtcbiAgICBkb3NzaWVyOiBGb2xkZXI7XG4gICAgZmljaGllcjogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25uZWN0aXZpdGVTZXJ2aWNlOiBDb25uZWN0aXZpdGVTZXJ2aWNlKSB7IFxuICAgICAgICB0aGlzLmRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICB9XG5cbiAgICB0ZXN0ZUluZm9zKHREb3NzaWVyLCB0RmljaGllcikge1xuICAgICAgICB0aGlzLmRvc3NpZXIgPSB0aGlzLmRvY3VtZW50cy5nZXRGb2xkZXIodERvc3NpZXIpO1xuICAgICAgICBpZih0aGlzLmRvc3NpZXIuY29udGFpbnModEZpY2hpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpdEluZm9zKGxEb3NzaWVyLCBsRmljaGllcikge1xuICAgICAgICB0aGlzLmRvc3NpZXIgPSB0aGlzLmRvY3VtZW50cy5nZXRGb2xkZXIobERvc3NpZXIpO1xuICAgICAgICB0aGlzLmZpY2hpZXIgPSB0aGlzLmRvc3NpZXIuZ2V0RmlsZShsRmljaGllcik7XG5cbiAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb250ZW51IGxvY2FsIHLDqWN1cMOpcsOpIGRlIFwiICsgbEZpY2hpZXIpO1xuICAgICAgICAgICAgICAgIEdsb2JhbHMuY2FiaW5ldCA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhcyBkZSBjb250ZW51IGxvY2FsIHBvdXIgXCIgKyBsRmljaGllcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YXJpYWJsZSBnbG9iYWxlID0gXCIgKyBHbG9iYWxzLmNhYmluZXQpO1xuICAgIH1cblxuICAgIGVjcml0SW5mb3MoZURvc3NpZXIsIGVGaWNoaWVyLCBlQ29udGVudSkge1xuICAgICAgICB0aGlzLmRvc3NpZXIgPSB0aGlzLmRvY3VtZW50cy5nZXRGb2xkZXIoZURvc3NpZXIpO1xuICAgICAgICB0aGlzLmZpY2hpZXIgPSB0aGlzLmRvc3NpZXIuZ2V0RmlsZShlRmljaGllcik7XG5cbiAgICAgICAgdGhpcy5maWNoaWVyLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShlQ29udGVudSkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZmljaGllci5yZWFkVGV4dCgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgZGUgXCIgKyBlRmljaGllciArIFwiIG1pcyDDoCBqb3VyXCIpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgc3VwcHJpbWVJbmZvcyhzRG9zc2llcikge1xuICAgICAgICB0aGlzLmRvc3NpZXIgPSB0aGlzLmRvY3VtZW50cy5nZXRGb2xkZXIoc0Rvc3NpZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kb3NzaWVyLnJlbW92ZSgpO1xuICAgIH1cblxufVxuXG5cblxuXG5cbiAgICAvLyByZWN1cGVyZUluZm9zKGZEb3NzaWVyLCBmRmljaGllcikge1xuICAgIC8vICAgICB0aGlzLmRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAvLyAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKGZEb3NzaWVyKTtcbiAgICAvLyAgICAgdGhpcy5maWNoaWVyID0gdGhpcy5kb3NzaWVyLmdldEZpbGUoZkZpY2hpZXIpO1xuXG4gICAgLy8gICAgIC8vIEFsd2F5cyByZWFkIGEgbG9jYWwgZmlsZVxuICAgIC8vICAgICB0aGlzLmZpY2hpZXIucmVhZFRleHQoKVxuICAgIC8vICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBsb2NhbCByw6ljdXDDqXLDqSBkZSBcIiArIGZGaWNoaWVyKTtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnJlY3VwTG9jYWwgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIEdsb2JhbHMuY2FiaW5ldCA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAvLyAgICAgICAgIH0pXG4gICAgLy8gICAgICAgICAvLyBJZiB1c2VyIG5vdCBjb25uZWN0ZWQgYW5kIHJ1biBhcHAgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgLy8gICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzIGRlIGNvbnRlbnUgbG9jYWwgw6AgcsOpY3Vww6lyZXIgOiBcIiArIGVycik7XG4gICAgLy8gICAgICAgICAgICAgdGhpcy5yZWN1cExvY2FsID0gZmFsc2U7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIGVycjtcbiAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vIC8vIElmIHVzZXIgY29ubmVjdGVkIC0+IGdldCBpbmZvcm1hdGlvbnMgZnJvbSBzZXJ2ZXIgYW5kIHdyaXRlIHRoZW0gb24gbG9jYWwgZmlsZVxuICAgICAgICAvLyBpZiAodGhpcy5jb25uZWN0aXZpdGVTZXJ2aWNlLnRlc3RlQ29ubmVjdGl2aXRlKCkgKSB7XG4gICAgICAgIC8vICAgICB0aGlzLmh0dHAuZ2V0PFBhdGllbnQ+KFwiaHR0cDovL3d3dy5mYWJyaXF1ZW51bWVyaXF1ZS5mci9PcnRoYWxpc0RlbW8vTmF0aXZlU2NyaXB0L3BhdGllbnQuanNvblwiKS5zdWJzY3JpYmUoXG4gICAgICAgIC8vICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucGF0aWVudCA9IGRhdGE7XG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZmljaGllci53cml0ZVRleHQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmljaGllci5yZWFkVGV4dCgpXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgbWlzIMOgIGpvdXJcIik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVjcml0dXJlIHLDqXVzc2llIGR1IGZpY2hpZXIgXCIgKyB0aGlzLmZpY2hpZXIucGF0aCk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRlbnUgw6ljcml0IDogXCIgKyByZXMpO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gICAgICAgICB9LFxuICAgICAgICAvLyAgICAgICAgIGVyciA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBwYXRpZW50IDogXCIgKyBlcnIpO1xuICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgLy8gICAgICk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSBpZiAoIXRoaXMuY29ubmVjdGl2aXRlU2VydmljZS50ZXN0ZUNvbm5lY3Rpdml0ZSgpICYmIHRoaXMucmVjdXBMb2NhbCkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJDb250ZW51IGxvY2FsIHLDqWN1cMOpcsOpLCBzdXJ2ZWlsbGFuY2UgY29ubmVjdGl2aXTDqSAuLi5cIik7XG4gICAgICAgIC8vICAgICB0aGlzLmNvbm5lY3Rpdml0ZVNlcnZpY2Uuc3VydmVpbGxlUmVzZWF1KCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIC8vICAgICBhbGVydChcIlZldWlsbGV6IHZvdXMgY29ubmVjdGVyIMOgIGludGVybmV0IHBvdXIgcsOpY3Vww6lyZXIgdm9zIGluZm9ybWF0aW9ucywgc3VydmVpbGxhbmNlIGNvbm5lY3Rpdml0w6kgLi4uXCIpO1xuICAgICAgICAvLyAgICAgdGhpcy5jb25uZWN0aXZpdGVTZXJ2aWNlLnN1cnZlaWxsZVJlc2VhdSgpO1xuICAgICAgICAvLyB9XG5cbiJdfQ==