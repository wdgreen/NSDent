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
            console.log("GlobaliseInfos de " + lFichier + ".json");
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
                console.log("EcritInfos de " + eFichier);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUMvRCx3RUFBc0Y7QUFFdEYsK0RBQTZEO0FBQzdELGtEQUFpRDtBQUdqRDtJQU1JLHFCQUFvQixJQUFnQixFQUNoQixtQkFBd0M7UUFEeEMsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBRUQsMENBQTBDO0lBQzFDLGdDQUFVLEdBQVYsVUFBVyxRQUFRLEVBQUUsUUFBUTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUM7SUFDTCxDQUFDO0lBRUQsaURBQWlEO0lBQ2pELG9DQUFjLEdBQWQsVUFBZSxRQUFRLEVBQUUsUUFBUTtRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQ2xCLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztZQUN2RCxZQUFZO1lBQ1osRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsaUJBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUM7WUFDaEUsRUFBRSxDQUFBLENBQUMsUUFBUSxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQUMsaUJBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsUUFBUSxHQUFJLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLE1BQU0sQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtEQUFrRDtJQUNsRCxzQ0FBZ0IsR0FBaEI7UUFDSSxPQUFPLGlCQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8saUJBQU8sQ0FBQyxPQUFPLENBQUM7SUFDM0IsQ0FBQztJQUVELHNEQUFzRDtJQUN0RCxnQ0FBVSxHQUFWLFVBQVcsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO1FBQXZDLGlCQWtCQztRQWpCRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDM0MsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2lCQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN4QyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUFBLENBQUM7SUFFRixpREFBaUQ7SUFDakQsbUNBQWEsR0FBYixVQUFjLFFBQVE7UUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzFCLENBQUM7SUF2RVEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQU9pQixpQkFBVTtZQUNLLDBDQUFtQjtPQVBuRCxXQUFXLENBMEV2QjtJQUFELGtCQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBGb2xkZXIsIEZpbGUsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCI7XG5cbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi9jb25uZWN0aXZpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhU2VydmljZSB7XG5cbiAgICBkb2N1bWVudHM6IEZvbGRlcjtcbiAgICBkb3NzaWVyOiBGb2xkZXI7XG4gICAgZmljaGllcjogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb25uZWN0aXZpdGVTZXJ2aWNlOiBDb25uZWN0aXZpdGVTZXJ2aWNlKSB7IFxuICAgICAgICB0aGlzLmRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBVc2VkIGZvciBza2lwIExvZ2luIHBhZ2UgKFNlc3Npb25HdWFyZClcbiAgICB0ZXN0ZUluZm9zKHREb3NzaWVyLCB0RmljaGllcikge1xuICAgICAgICB0aGlzLmRvc3NpZXIgPSB0aGlzLmRvY3VtZW50cy5nZXRGb2xkZXIodERvc3NpZXIpO1xuICAgICAgICBpZih0aGlzLmRvc3NpZXIuY29udGFpbnModEZpY2hpZXIgKyBcIi5qc29uXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVzZWQgZm9yIHN0b3JlIGluZm9zIGluIEdsb2JhbHMgKFNlc3Npb25HdWFyZClcbiAgICBnbG9iYWxpc2VJbmZvcyhsRG9zc2llciwgbEZpY2hpZXIpIHtcbiAgICAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKGxEb3NzaWVyKTtcbiAgICAgICAgdGhpcy5maWNoaWVyID0gdGhpcy5kb3NzaWVyLmdldEZpbGUobEZpY2hpZXIgKyBcIi5qc29uXCIpO1xuXG4gICAgICAgIHRoaXMuZmljaGllci5yZWFkVGV4dCgpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR2xvYmFsaXNlSW5mb3MgZGUgXCIgKyBsRmljaGllciArIFwiLmpzb25cIik7XG4gICAgICAgICAgICAgICAgLy8gVWdnbHkgLi4uXG4gICAgICAgICAgICAgICAgaWYobEZpY2hpZXIgPT0gXCJjYWJpbmV0XCIpIHsgR2xvYmFscy5jYWJpbmV0ID0gSlNPTi5wYXJzZShyZXMpOyB9XG4gICAgICAgICAgICAgICAgaWYobEZpY2hpZXIgPT0gXCJwYXRpZW50XCIpIHsgR2xvYmFscy5wYXRpZW50ID0gSlNPTi5wYXJzZShyZXMpOyB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXMgZGUgY29udGVudSBsb2NhbCBwb3VyIFwiICsgbEZpY2hpZXIgICsgXCIuanNvblwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBVc2VkIGZvciByZW1vdmUgaW5mb3MgaW4gR2xvYmFscyAoU2Vzc2lvbkd1YXJkKVxuICAgIGRlZ2xvYmFsaXNlSW5mb3MoKSB7XG4gICAgICAgIGRlbGV0ZSBHbG9iYWxzLmNhYmluZXQ7XG4gICAgICAgIGRlbGV0ZSBHbG9iYWxzLnBhdGllbnQ7XG4gICAgfVxuXG4gICAgLy8gVXNlZCBmb3Igd3JpdGUgZGF0YXMgaW4gbG9jYWwgZmlsZSAoTG9naW5Db21wb25lbnQpXG4gICAgZWNyaXRJbmZvcyhlRG9zc2llciwgZUZpY2hpZXIsIGVDb250ZW51KSB7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihlRG9zc2llcik7XG4gICAgICAgIHRoaXMuZmljaGllciA9IHRoaXMuZG9zc2llci5nZXRGaWxlKGVGaWNoaWVyICsgXCIuanNvblwiKTtcblxuICAgICAgICB0aGlzLmZpY2hpZXIud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KGVDb250ZW51KSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWNyaXRJbmZvcyBkZSBcIiArIGVGaWNoaWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVGaWNoaWVyICsgXCIgPSBcIiArIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBVc2VkIGZvciBkZWxldGUgbG9jYWwgZmlsZSAoU2V0dGluZ3NDb21wb25lbnQpXG4gICAgc3VwcHJpbWVJbmZvcyhzRG9zc2llcikge1xuICAgICAgICB0aGlzLmRvc3NpZXIgPSB0aGlzLmRvY3VtZW50cy5nZXRGb2xkZXIoc0Rvc3NpZXIpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5kb3NzaWVyLnJlbW92ZSgpO1xuICAgIH1cblxuLy8gRW5kIERhdGFTZXJ2aWNlXG59Il19