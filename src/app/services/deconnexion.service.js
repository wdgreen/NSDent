"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var DeconnexionService = /** @class */ (function () {
    function DeconnexionService() {
    }
    DeconnexionService.prototype.deconnecte = function () {
        this.documents = file_system_1.knownFolders.documents();
        this.dossier = this.documents.getFolder("Orthalis");
        this.fichier = this.dossier.getFile("patient.json");
        // Always read a local file
        this.dossier.remove()
            .then(function (res) {
            console.log("Contenu local supprimé");
        })
            .catch(function (err) {
            console.log(err.stack);
        });
    };
    DeconnexionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DeconnexionService);
    return DeconnexionService;
}());
exports.DeconnexionService = DeconnexionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb25uZXhpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlY29ubmV4aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0Msd0VBQXNGO0FBR3RGO0lBTUk7SUFBZ0IsQ0FBQztJQUVqQix1Q0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUVwRCwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUM7YUFFRCxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBdEJRLGtCQUFrQjtRQUQ5QixpQkFBVSxFQUFFOztPQUNBLGtCQUFrQixDQXVCOUI7SUFBRCx5QkFBQztDQUFBLEFBdkJELElBdUJDO0FBdkJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBGb2xkZXIsIEZpbGUsIGtub3duRm9sZGVycyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtL2ZpbGUtc3lzdGVtXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWNvbm5leGlvblNlcnZpY2Uge1xuXG4gICAgZG9jdW1lbnRzOiBGb2xkZXI7XG4gICAgZG9zc2llcjogRm9sZGVyO1xuICAgIGZpY2hpZXI6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgZGVjb25uZWN0ZSgpIHtcbiAgICAgICAgdGhpcy5kb2N1bWVudHMgPSBrbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgICAgIHRoaXMuZG9zc2llciA9IHRoaXMuZG9jdW1lbnRzLmdldEZvbGRlcihcIk9ydGhhbGlzXCIpO1xuICAgICAgICB0aGlzLmZpY2hpZXIgPSB0aGlzLmRvc3NpZXIuZ2V0RmlsZShcInBhdGllbnQuanNvblwiKTtcblxuICAgICAgICAvLyBBbHdheXMgcmVhZCBhIGxvY2FsIGZpbGVcbiAgICAgICAgdGhpcy5kb3NzaWVyLnJlbW92ZSgpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb250ZW51IGxvY2FsIHN1cHByaW3DqVwiKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyBJZiB1c2VyIG5vdCBjb25uZWN0ZWQgYW5kIHJ1biBhcHAgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=