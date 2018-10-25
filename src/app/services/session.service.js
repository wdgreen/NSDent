"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("tns-core-modules/file-system/file-system");
var router_1 = require("nativescript-angular/router");
var SessionService = /** @class */ (function () {
    function SessionService(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.documents = file_system_1.knownFolders.documents();
        this.dossier = this.documents.getFolder("Orthalis");
        this.fPatient = this.dossier.getFile("patient.json");
        this.fCabinet = this.dossier.getFile("cabinet.json");
    }
    SessionService.prototype.testeSession = function () {
        if (this.dossier.contains("patient.json")) {
            return true;
        }
        else {
            return false;
        }
    };
    SessionService.prototype.deconnecteSession = function () {
        this.dossier.remove()
            .then(function (res) {
            console.log("Contenu local supprimé");
        })
            .catch(function (err) {
            console.log(err.stack);
        });
        this.routerExtensions.navigate(["login"], {
            transition: {
                name: "fade"
            }
        });
    };
    SessionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHdFQUFzRjtBQUN0RixzREFBK0Q7QUFHL0Q7SUFPSSx3QkFBb0IsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQ2hCLElBQUksQ0FBQyxVQUFDLEdBQUc7WUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3RDLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQW5DUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBUTRCLHlCQUFnQjtPQVA1QyxjQUFjLENBb0MxQjtJQUFELHFCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUFwQ1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgRm9sZGVyLCBGaWxlLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbS9maWxlLXN5c3RlbVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlc3Npb25TZXJ2aWNlIHtcblxuICAgIGRvY3VtZW50czogRm9sZGVyO1xuICAgIGRvc3NpZXI6IEZvbGRlcjtcbiAgICBmUGF0aWVudDogRmlsZTtcbiAgICBmQ2FiaW5ldDogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczpSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnRzID0ga25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgICAgICB0aGlzLmRvc3NpZXIgPSB0aGlzLmRvY3VtZW50cy5nZXRGb2xkZXIoXCJPcnRoYWxpc1wiKTtcbiAgICAgICAgdGhpcy5mUGF0aWVudCA9IHRoaXMuZG9zc2llci5nZXRGaWxlKFwicGF0aWVudC5qc29uXCIpO1xuICAgICAgICB0aGlzLmZDYWJpbmV0ID0gdGhpcy5kb3NzaWVyLmdldEZpbGUoXCJjYWJpbmV0Lmpzb25cIik7XG4gICAgfVxuXG4gICAgdGVzdGVTZXNzaW9uKCkge1xuICAgICAgICBpZih0aGlzLmRvc3NpZXIuY29udGFpbnMoXCJwYXRpZW50Lmpzb25cIikpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVjb25uZWN0ZVNlc3Npb24oKSB7XG4gICAgICAgIHRoaXMuZG9zc2llci5yZW1vdmUoKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29udGVudSBsb2NhbCBzdXBwcmltw6lcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJsb2dpblwiXSwge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=