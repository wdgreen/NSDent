"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var connectivite_service_1 = require("./connectivite.service");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var PatientService = /** @class */ (function () {
    function PatientService(http, connectiviteService) {
        this.http = http;
        this.connectiviteService = connectiviteService;
        this.recupLocal = false;
        this.getPatient();
    }
    PatientService.prototype.getPatient = function () {
        var _this = this;
        this.documents = file_system_1.knownFolders.documents();
        this.dossier = this.documents.getFolder("Orthalis");
        this.fichier = this.dossier.getFile("patient.json");
        // Always read a local file
        this.fichier.readText()
            .then(function (res) {
            console.log("Contenu local récupéré");
            _this.recupLocal = true;
            _this.patient = JSON.parse(res);
        })
            .catch(function (err) {
            console.log("Service patient : " + err);
            _this.recupLocal = false;
        });
        // If user connected -> get informations from server and write them on local file
        if (this.connectiviteService.testeConnectivite()) {
            this.http.get("http://www.fabriquenumerique.fr/OrthalisDemo/NativeScript/patient.json").subscribe(function (data) {
                _this.patient = data;
                _this.fichier.writeText(JSON.stringify(data))
                    .then(function (result) {
                    _this.fichier.readText()
                        .then(function (res) {
                        console.log("Contenu local mis à jour");
                        console.log("Ecriture réussie du fichier " + _this.fichier.path);
                        console.log("contenu écrit : " + res);
                    })
                        .catch(function (err) {
                        console.log(err.stack);
                    });
                })
                    .catch(function (err) {
                    console.log(err);
                });
            }, function (err) {
                console.log("Service patient : " + err);
            });
        }
        else if (!this.connectiviteService.testeConnectivite() && this.recupLocal) {
            console.log("Contenu local récupéré, surveillance connectivité ...");
            this.connectiviteService.surveilleReseau();
        }
        else {
            alert("Veuillez vous connecter à internet pour récupérer vos informations, surveillance connectivité ...");
            this.connectiviteService.surveilleReseau();
        }
    };
    PatientService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, connectivite_service_1.ConnectiviteService])
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUcvRCwrREFBNkQ7QUFDN0Qsd0VBQXNGO0FBR3RGO0lBVUksd0JBQW9CLElBQWdCLEVBQVUsbUJBQXdDO1FBQWxFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRnRGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHeEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQUEsaUJBbURDO1FBbERHLElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQ2xCLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUVELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUZBQWlGO1FBQ2pGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSx3RUFBd0UsQ0FBQyxDQUFDLFNBQVMsQ0FDdEcsVUFBQSxJQUFJO2dCQUNBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN2QyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO3lCQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO3dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRzt3QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztZQUMzRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFqRVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQVdpQixpQkFBVSxFQUErQiwwQ0FBbUI7T0FWN0UsY0FBYyxDQWtFMUI7SUFBRCxxQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBQYXRpZW50IH0gZnJvbSAnLi9tb2RlbHMvcGF0aWVudC5tb2RlbGUnO1xuaW1wb3J0IHsgQ29ubmVjdGl2aXRlU2VydmljZSB9IGZyb20gXCIuL2Nvbm5lY3Rpdml0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGb2xkZXIsIEZpbGUsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRpZW50U2VydmljZSB7XG5cbiAgICBwYXRpZW50OiBQYXRpZW50O1xuXG4gICAgZG9jdW1lbnRzOiBGb2xkZXI7XG4gICAgZG9zc2llcjogRm9sZGVyO1xuICAgIGZpY2hpZXI6IEZpbGU7XG5cbiAgICByZWN1cExvY2FsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTogQ29ubmVjdGl2aXRlU2VydmljZSkgeyBcbiAgICAgICAgdGhpcy5nZXRQYXRpZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aWVudCgpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihcIk9ydGhhbGlzXCIpO1xuICAgICAgICB0aGlzLmZpY2hpZXIgPSB0aGlzLmRvc3NpZXIuZ2V0RmlsZShcInBhdGllbnQuanNvblwiKTtcblxuICAgICAgICAvLyBBbHdheXMgcmVhZCBhIGxvY2FsIGZpbGVcbiAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgcsOpY3Vww6lyw6lcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN1cExvY2FsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gSWYgdXNlciBub3QgY29ubmVjdGVkIGFuZCBydW4gYXBwIGZvciB0aGUgZmlyc3QgdGltZVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNlcnZpY2UgcGF0aWVudCA6IFwiICsgZXJyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3VwTG9jYWwgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIElmIHVzZXIgY29ubmVjdGVkIC0+IGdldCBpbmZvcm1hdGlvbnMgZnJvbSBzZXJ2ZXIgYW5kIHdyaXRlIHRoZW0gb24gbG9jYWwgZmlsZVxuICAgICAgICBpZiAodGhpcy5jb25uZWN0aXZpdGVTZXJ2aWNlLnRlc3RlQ29ubmVjdGl2aXRlKCkgKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAuZ2V0PFBhdGllbnQ+KFwiaHR0cDovL3d3dy5mYWJyaXF1ZW51bWVyaXF1ZS5mci9PcnRoYWxpc0RlbW8vTmF0aXZlU2NyaXB0L3BhdGllbnQuanNvblwiKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudCA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmljaGllci53cml0ZVRleHQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmljaGllci5yZWFkVGV4dCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgbWlzIMOgIGpvdXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVjcml0dXJlIHLDqXVzc2llIGR1IGZpY2hpZXIgXCIgKyB0aGlzLmZpY2hpZXIucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbnRlbnUgw6ljcml0IDogXCIgKyByZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBwYXRpZW50IDogXCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXRoaXMuY29ubmVjdGl2aXRlU2VydmljZS50ZXN0ZUNvbm5lY3Rpdml0ZSgpICYmIHRoaXMucmVjdXBMb2NhbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb250ZW51IGxvY2FsIHLDqWN1cMOpcsOpLCBzdXJ2ZWlsbGFuY2UgY29ubmVjdGl2aXTDqSAuLi5cIik7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpdml0ZVNlcnZpY2Uuc3VydmVpbGxlUmVzZWF1KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlZldWlsbGV6IHZvdXMgY29ubmVjdGVyIMOgIGludGVybmV0IHBvdXIgcsOpY3Vww6lyZXIgdm9zIGluZm9ybWF0aW9ucywgc3VydmVpbGxhbmNlIGNvbm5lY3Rpdml0w6kgLi4uXCIpO1xuICAgICAgICAgICAgdGhpcy5jb25uZWN0aXZpdGVTZXJ2aWNlLnN1cnZlaWxsZVJlc2VhdSgpO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ==