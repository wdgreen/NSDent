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
                    connectivity_1.stopMonitoring();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGl2aXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25uZWN0aXZpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw4REFBbUg7QUFLbkg7SUFJSTtRQUZBLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFFWCxDQUFDO0lBRWpCLCtDQUFpQixHQUFqQjtRQUNJLElBQU0sZ0JBQWdCLEdBQUcsZ0NBQWlCLEVBQUUsQ0FBQztRQUU3QyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQztZQUN6QixLQUFLLDZCQUFjLENBQUMsUUFBUTtnQkFDeEIsd0JBQXdCO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLHlCQUF5QjtZQUN6QixRQUFRO1lBQ1osS0FBSyw2QkFBYyxDQUFDLElBQUksQ0FBQztZQUN6QixLQUFLLDZCQUFjLENBQUMsTUFBTTtnQkFDdEIscUJBQXFCO2dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDdEIsNkJBQWMsRUFBRSxDQUFDO2dCQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCO2dCQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDckIsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQUEsaUJBa0JDO1FBakJHLDhCQUFlLENBQUMsVUFBQyxpQkFBaUI7WUFDOUIsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUN4QixLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDO2dCQUN6QixLQUFLLDZCQUFjLENBQUMsUUFBUTtvQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNoRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztvQkFDdkIsS0FBSyxDQUFDO2dCQUNWLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUM7Z0JBQ3pCLEtBQUssNkJBQWMsQ0FBQyxNQUFNO29CQUN0QixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO29CQUNoRCw2QkFBYyxFQUFFLENBQUM7b0JBQ2pCLEtBQUssQ0FBQztnQkFDVjtvQkFDSSxLQUFLLENBQUM7WUFDZCxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBaERRLG1CQUFtQjtRQUgvQixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQzs7T0FDVyxtQkFBbUIsQ0FpRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSwgc3RhcnRNb25pdG9yaW5nLCBzdG9wTW9uaXRvcmluZyB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIENvbm5lY3Rpdml0ZVNlcnZpY2Uge1xuXG4gICAgY29ubmV4aW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIFxuICAgIHRlc3RlQ29ubmVjdGl2aXRlKCkge1xuICAgICAgICBjb25zdCBteUNvbm5lY3Rpb25UeXBlID0gZ2V0Q29ubmVjdGlvblR5cGUoKTtcblxuICAgICAgICBzd2l0Y2ggKG15Q29ubmVjdGlvblR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgIGNhc2UgY29ubmVjdGlvblR5cGUuZXRoZXJuZXQ6XG4gICAgICAgICAgICAgICAgLy8gTm8gaW50ZXJuZXQgY29ubmV4aW9uXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBjb25uZWN0aW9uXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29ubmV4aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5zdXJ2ZWlsbGVSZXNlYXUoKTtcbiAgICAgICAgICAgICAgICAvL2JyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICAgICAgLy8gSW50ZXJuZXQgY29ubmV4aW9uXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZXhpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0b3BNb25pdG9yaW5nKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN1cnZlaWxsZVJlc2VhdSgpIHtcbiAgICAgICAgc3RhcnRNb25pdG9yaW5nKChuZXdDb25uZWN0aW9uVHlwZSkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChuZXdDb25uZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgY29ubmVjdGlvblR5cGUubm9uZTpcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpb25UeXBlLmV0aGVybmV0OlxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3Rpb24gdHlwZSBjaGFuZ2VkIHRvIG5vbmUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5leGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpb25UeXBlLndpZmk6XG4gICAgICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmV4aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byB0cnVlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcE1vbml0b3JpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=