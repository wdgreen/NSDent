"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connectivity_1 = require("tns-core-modules/connectivity");
var ConnectiviteService = /** @class */ (function () {
    function ConnectiviteService() {
        this.connexion = false;
    }
    ConnectiviteService.prototype.testeConnectivite = function () {
        var myConnectionType = connectivity_1.getConnectionType();
        switch (myConnectionType) {
            case connectivity_1.connectionType.none:
            case connectivity_1.connectionType.ethernet:
                // No internet connexion
                console.log("No connection");
                this.connexion = false;
                return false;
            //this.surveilleReseau();
            //break;
            case connectivity_1.connectionType.wifi:
            case connectivity_1.connectionType.mobile:
                // Internet connexion
                console.log("Connected");
                this.connexion = true;
                connectivity_1.stopMonitoring();
                return true;
            default:
                return false;
        }
    };
    ConnectiviteService.prototype.surveilleReseau = function () {
        var _this = this;
        connectivity_1.startMonitoring(function (newConnectionType) {
            switch (newConnectionType) {
                case connectivity_1.connectionType.none:
                case connectivity_1.connectionType.ethernet:
                    console.log("Connection type changed to none.");
                    _this.connexion = false;
                    break;
                case connectivity_1.connectionType.wifi:
                case connectivity_1.connectionType.mobile:
                    _this.connexion = true;
                    console.log("Connection type changed to true.");
                    break;
                default:
                    break;
            }
        });
    };
    ConnectiviteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConnectiviteService);
    return ConnectiviteService;
}());
exports.ConnectiviteService = ConnectiviteService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGl2aXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25uZWN0aXZpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw4REFBbUg7QUFLbkg7SUFJSTtRQUZBLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFFWCxDQUFDO0lBRWpCLCtDQUFpQixHQUFqQjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsZ0NBQWlCLEVBQUUsQ0FBQztRQUU3QyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQztZQUN6QixLQUFLLDZCQUFjLENBQUMsUUFBUTtnQkFDeEIsd0JBQXdCO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLHlCQUF5QjtZQUN6QixRQUFRO1lBQ1osS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQztZQUN6QixLQUFLLDZCQUFjLENBQUMsTUFBTTtnQkFDdEIscUJBQXFCO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsNkJBQWMsRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCO2dCQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBaUJDO1FBaEJHLDhCQUFlLENBQUMsVUFBQyxpQkFBaUI7WUFDOUIsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDO2dCQUN6QixLQUFLLDZCQUFjLENBQUMsUUFBUTtvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsS0FBSyxDQUFDO2dCQUNWLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssNkJBQWMsQ0FBQyxNQUFNO29CQUN0QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNoRCxLQUFLLENBQUM7Z0JBQ1Y7b0JBQ0ksS0FBSyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQS9DUSxtQkFBbUI7UUFIL0IsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7O09BQ1csbUJBQW1CLENBZ0QvQjtJQUFELDBCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb25uZWN0aW9uVHlwZSwgZ2V0Q29ubmVjdGlvblR5cGUsIHN0YXJ0TW9uaXRvcmluZywgc3RvcE1vbml0b3JpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb25uZWN0aXZpdHlcIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBDb25uZWN0aXZpdGVTZXJ2aWNlIHtcblxuICAgIGNvbm5leGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBcbiAgICB0ZXN0ZUNvbm5lY3Rpdml0ZSgpIHtcbiAgICAgICAgY29uc3QgbXlDb25uZWN0aW9uVHlwZSA9IGdldENvbm5lY3Rpb25UeXBlKCk7XG5cbiAgICAgICAgc3dpdGNoIChteUNvbm5lY3Rpb25UeXBlKSB7XG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpb25UeXBlLm5vbmU6XG4gICAgICAgICAgICBjYXNlIGNvbm5lY3Rpb25UeXBlLmV0aGVybmV0OlxuICAgICAgICAgICAgICAgIC8vIE5vIGludGVybmV0IGNvbm5leGlvblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTm8gY29ubmVjdGlvblwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5leGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvL3RoaXMuc3VydmVpbGxlUmVzZWF1KCk7XG4gICAgICAgICAgICAgICAgLy9icmVhaztcbiAgICAgICAgICAgIGNhc2UgY29ubmVjdGlvblR5cGUud2lmaTpcbiAgICAgICAgICAgIGNhc2UgY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgICAgIC8vIEludGVybmV0IGNvbm5leGlvblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmV4aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzdG9wTW9uaXRvcmluZygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdXJ2ZWlsbGVSZXNlYXUoKSB7XG4gICAgICAgIHN0YXJ0TW9uaXRvcmluZygobmV3Q29ubmVjdGlvblR5cGUpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAobmV3Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpb25UeXBlLm5vbmU6XG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5ldGhlcm5ldDpcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBub25lLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZXhpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGlvblR5cGUubW9iaWxlOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5leGlvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGlvbiB0eXBlIGNoYW5nZWQgdG8gdHJ1ZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59Il19