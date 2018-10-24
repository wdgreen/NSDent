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
        this.recup = false;
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
            _this.patient = JSON.parse(res);
            _this.recup = true;
            console.log("Contenu local récupéré");
        })
            .catch(function (err) {
            console.log(err);
            _this.recup = false;
        });
        // If user connected -> get informations from server and write them on local file
        if (this.connectiviteService.connexion) {
            // 
            this.http.get("http://www.fabriquenumerique.fr/OrthalisDemo/NativeScript/patient.json").subscribe(function (data) {
                _this.patient = data;
                _this.fichier.writeText(JSON.stringify(data))
                    .then(function (result) {
                    _this.fichier.readText()
                        .then(function (res) {
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
            });
        }
    };
    PatientService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, connectivite_service_1.ConnectiviteService])
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGF0aWVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDZDQUErRDtBQUcvRCwrREFBNkQ7QUFDN0Qsd0VBQXNGO0FBR3RGO0lBVUksd0JBQW9CLElBQWdCLEVBQVUsbUJBQXdDO1FBQWxFLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRnRGLFVBQUssR0FBWSxLQUFLLENBQUM7UUFHbkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxtQ0FBVSxHQUFWO1FBQUEsaUJBd0NDO1FBdkNHLElBQUksQ0FBQyxTQUFTLEdBQUcsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFcEQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO2FBQ2xCLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDTixLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQzthQUVELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsaUZBQWlGO1FBQ2pGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLEdBQUc7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBVSx3RUFBd0UsQ0FBQyxDQUFDLFNBQVMsQ0FDdEcsVUFBQSxJQUFJO2dCQUNBLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUN2QyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUNSLEtBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFO3lCQUNsQixJQUFJLENBQUMsVUFBQSxHQUFHO3dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUMsQ0FBQztvQkFDMUMsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7d0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDO2dCQUNYLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO29CQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUMsQ0FBQyxDQUFDO1lBQ1gsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDO0lBQ0wsQ0FBQztJQXREUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBV2lCLGlCQUFVLEVBQStCLDBDQUFtQjtPQVY3RSxjQUFjLENBdUQxQjtJQUFELHFCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbmltcG9ydCB7IFBhdGllbnQgfSBmcm9tICcuL21vZGVscy9wYXRpZW50Lm1vZGVsZSc7XG5pbXBvcnQgeyBDb25uZWN0aXZpdGVTZXJ2aWNlIH0gZnJvbSBcIi4vY29ubmVjdGl2aXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZvbGRlciwgRmlsZSwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBhdGllbnRTZXJ2aWNlIHtcblxuICAgIHBhdGllbnQ6IFBhdGllbnQ7XG5cbiAgICBkb2N1bWVudHM6IEZvbGRlcjtcbiAgICBkb3NzaWVyOiBGb2xkZXI7XG4gICAgZmljaGllcjogRmlsZTtcblxuICAgIHJlY3VwOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTogQ29ubmVjdGl2aXRlU2VydmljZSkgeyBcbiAgICAgICAgdGhpcy5nZXRQYXRpZW50KCk7XG4gICAgfVxuXG4gICAgZ2V0UGF0aWVudCgpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihcIk9ydGhhbGlzXCIpO1xuICAgICAgICB0aGlzLmZpY2hpZXIgPSB0aGlzLmRvc3NpZXIuZ2V0RmlsZShcInBhdGllbnQuanNvblwiKTtcblxuICAgICAgICAvLyBBbHdheXMgcmVhZCBhIGxvY2FsIGZpbGVcbiAgICAgICAgdGhpcy5maWNoaWVyLnJlYWRUZXh0KClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWN1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb250ZW51IGxvY2FsIHLDqWN1cMOpcsOpXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIElmIHVzZXIgbm90IGNvbm5lY3RlZCBhbmQgcnVuIGFwcCBmb3IgdGhlIGZpcnN0IHRpbWVcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY3VwID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBJZiB1c2VyIGNvbm5lY3RlZCAtPiBnZXQgaW5mb3JtYXRpb25zIGZyb20gc2VydmVyIGFuZCB3cml0ZSB0aGVtIG9uIGxvY2FsIGZpbGVcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdGl2aXRlU2VydmljZS5jb25uZXhpb24pIHtcbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgdGhpcy5odHRwLmdldDxQYXRpZW50PihcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL05hdGl2ZVNjcmlwdC9wYXRpZW50Lmpzb25cIikuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhdGllbnQgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpY2hpZXIud3JpdGVUZXh0KEpTT04uc3RyaW5naWZ5KGRhdGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpY2hpZXIucmVhZFRleHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFY3JpdHVyZSByw6l1c3NpZSBkdSBmaWNoaWVyIFwiICsgdGhpcy5maWNoaWVyLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb250ZW51IMOpY3JpdCA6IFwiICsgcmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=