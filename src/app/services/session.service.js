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
        var _this = this;
        this.dossier.remove()
            .then(function (res) {
            console.log("Contenu local supprimé");
            _this.routerExtensions.navigate(["login"], {
                transition: {
                    name: "fade"
                }
            });
        })
            .catch(function (err) {
            console.log(err.stack);
        });
    };
    SessionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], SessionService);
    return SessionService;
}());
exports.SessionService = SessionService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2Vzc2lvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHdFQUFzRjtBQUN0RixzREFBK0Q7QUFHL0Q7SUFPSSx3QkFBb0IsZ0JBQWlDO1FBQWpDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBaUI7UUFDakQsSUFBSSxDQUFDLFNBQVMsR0FBRywwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCxxQ0FBWSxHQUFaO1FBQ0ksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDO0lBQ0wsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUFBLGlCQWFDO1FBWkcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7YUFDaEIsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ3RDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjthQUNKLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuQ1EsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQVE0Qix5QkFBZ0I7T0FQNUMsY0FBYyxDQW9DMUI7SUFBRCxxQkFBQztDQUFBLEFBcENELElBb0NDO0FBcENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEZvbGRlciwgRmlsZSwga25vd25Gb2xkZXJzIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW0vZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uU2VydmljZSB7XG5cbiAgICBkb2N1bWVudHM6IEZvbGRlcjtcbiAgICBkb3NzaWVyOiBGb2xkZXI7XG4gICAgZlBhdGllbnQ6IEZpbGU7XG4gICAgZkNhYmluZXQ6IEZpbGU7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6Um91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLmRvY3VtZW50cyA9IGtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcbiAgICAgICAgdGhpcy5kb3NzaWVyID0gdGhpcy5kb2N1bWVudHMuZ2V0Rm9sZGVyKFwiT3J0aGFsaXNcIik7XG4gICAgICAgIHRoaXMuZlBhdGllbnQgPSB0aGlzLmRvc3NpZXIuZ2V0RmlsZShcInBhdGllbnQuanNvblwiKTtcbiAgICAgICAgdGhpcy5mQ2FiaW5ldCA9IHRoaXMuZG9zc2llci5nZXRGaWxlKFwiY2FiaW5ldC5qc29uXCIpO1xuICAgIH1cblxuICAgIHRlc3RlU2Vzc2lvbigpIHtcbiAgICAgICAgaWYodGhpcy5kb3NzaWVyLmNvbnRhaW5zKFwicGF0aWVudC5qc29uXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlY29ubmVjdGVTZXNzaW9uKCkge1xuICAgICAgICB0aGlzLmRvc3NpZXIucmVtb3ZlKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbnRlbnUgbG9jYWwgc3VwcHJpbcOpXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJsb2dpblwiXSwge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICB9KTtcbiAgICB9XG59Il19