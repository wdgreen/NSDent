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
        // this.getPatient(); N'utilise plus ce service
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUcvRCwrREFBNkQ7QUFDN0Qsd0VBQXNGO0FBR3RGO0lBVUksd0JBQW9CLElBQWdCLEVBQVUsbUJBQXdDO1FBQWxFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRnRGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHeEIsK0NBQStDO0lBQ25ELENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQUEsaUJBbURDO1FBbERHLElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQ2xCLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUVELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUZBQWlGO1FBQ2pGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsRUFBRyxDQUFDLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSx3RUFBd0UsQ0FBQyxDQUFDLFNBQVMsQ0FDdEcsVUFBQSxJQUFJO2dCQUNBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN2QyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO3lCQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO3dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQzt3QkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4QkFBOEIsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLEdBQUcsQ0FBQyxDQUFDO29CQUMxQyxDQUFDLENBQUM7eUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRzt3QkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsQ0FBQyxDQUFDO3FCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLEVBQ0QsVUFBQSxHQUFHO2dCQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixLQUFLLENBQUMsbUdBQW1HLENBQUMsQ0FBQztZQUMzRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFqRVEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQVdpQixpQkFBVSxFQUErQiwwQ0FBbUI7T0FWN0UsY0FBYyxDQWtFMUI7SUFBRCxxQkFBQztDQUFBLEFBbEVELElBa0VDO0FBbEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5pbXBvcnQgeyBQYXRpZW50IH0gZnJvbSAnLi9tb2RlbHMvcGF0aWVudC5tb2RlbGUnO1xuaW1wb3J0IHsgQ29ubmVjdGl2aXRlU2VydmljZSB9IGZyb20gXCIuL2Nvbm5lY3Rpdml0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGb2xkZXIsIEZpbGUsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYXRpZW50U2VydmljZSB7XG5cbiAgICBwYXRpZW50OiBQYXRpZW50O1xuXG4gICAgZG9jdW1lbnRzOiBGb2xkZXI7XG4gICAgZG9zc2llcjogRm9sZGVyO1xuICAgIGZpY2hpZXI6IEZpbGU7XG5cbiAgICByZWN1cExvY2FsOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTogQ29ubmVjdGl2aXRlU2VydmljZSkgeyBcbiAgICAgICAgLy8gdGhpcy5nZXRQYXRpZW50KCk7IE4ndXRpbGlzZSBwbHVzIGNlIHNlcnZpY2VcbiAgICB9XG5cbiAgICBnZXRQYXRpZW50KCkge1xuICAgICAgICB0aGlzLmRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKFwiT3J0aGFsaXNcIik7XG4gICAgICAgIHRoaXMuZmljaGllciA9IHRoaXMuZG9zc2llci5nZXRGaWxlKFwicGF0aWVudC5qc29uXCIpO1xuXG4gICAgICAgIC8vIEFsd2F5cyByZWFkIGEgbG9jYWwgZmlsZVxuICAgICAgICB0aGlzLmZpY2hpZXIucmVhZFRleHQoKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBsb2NhbCByw6ljdXDDqXLDqVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3VwTG9jYWwgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0aWVudCA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiB1c2VyIG5vdCBjb25uZWN0ZWQgYW5kIHJ1biBhcHAgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2VydmljZSBwYXRpZW50IDogXCIgKyBlcnIpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVjdXBMb2NhbCA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gSWYgdXNlciBjb25uZWN0ZWQgLT4gZ2V0IGluZm9ybWF0aW9ucyBmcm9tIHNlcnZlciBhbmQgd3JpdGUgdGhlbSBvbiBsb2NhbCBmaWxlXG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpdml0ZVNlcnZpY2UudGVzdGVDb25uZWN0aXZpdGUoKSApIHtcbiAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQ8UGF0aWVudD4oXCJodHRwOi8vd3d3LmZhYnJpcXVlbnVtZXJpcXVlLmZyL09ydGhhbGlzRGVtby9OYXRpdmVTY3JpcHQvcGF0aWVudC5qc29uXCIpLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXRpZW50ID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWNoaWVyLndyaXRlVGV4dChKU09OLnN0cmluZ2lmeShkYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBsb2NhbCBtaXMgw6Agam91clwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWNyaXR1cmUgcsOpdXNzaWUgZHUgZmljaGllciBcIiArIHRoaXMuZmljaGllci5wYXRoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29udGVudSDDqWNyaXQgOiBcIiArIHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyLnN0YWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXJ2aWNlIHBhdGllbnQgOiBcIiArIGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghdGhpcy5jb25uZWN0aXZpdGVTZXJ2aWNlLnRlc3RlQ29ubmVjdGl2aXRlKCkgJiYgdGhpcy5yZWN1cExvY2FsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgcsOpY3Vww6lyw6ksIHN1cnZlaWxsYW5jZSBjb25uZWN0aXZpdMOpIC4uLlwiKTtcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdGl2aXRlU2VydmljZS5zdXJ2ZWlsbGVSZXNlYXUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiVmV1aWxsZXogdm91cyBjb25uZWN0ZXIgw6AgaW50ZXJuZXQgcG91ciByw6ljdXDDqXJlciB2b3MgaW5mb3JtYXRpb25zLCBzdXJ2ZWlsbGFuY2UgY29ubmVjdGl2aXTDqSAuLi5cIik7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpdml0ZVNlcnZpY2Uuc3VydmVpbGxlUmVzZWF1KCk7XG4gICAgICAgIH1cbiAgICB9XG59Il19