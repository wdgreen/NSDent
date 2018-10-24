"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var connectivity_1 = require("tns-core-modules/connectivity");
var ConnectiviteService = /** @class */ (function () {
    //??requete: Array<string>; // Enregistrer les url des requêtes qui ont été passées si elles n'ont pas pu être délivrées
    //??autorisation: boolean = true;
    function ConnectiviteService() {
        this.connexion = false;
        this.testConnectivite();
    }
    // Test de connectivité pour adaper une stratégie de traitement des données
    ConnectiviteService.prototype.testConnectivite = function () {
        // result is ConnectionType enumeration (none, wifi or mobile)
        var myConnectionType = connectivity_1.getConnectionType();
        switch (myConnectionType) {
            case connectivity_1.connectionType.none:
            case connectivity_1.connectionType.ethernet:
                // No internet connexion
                console.log("No connection");
                //this.lancerSurveillanceReseau();
                break;
            case connectivity_1.connectionType.wifi:
            case connectivity_1.connectionType.mobile:
                // Internet connexion
                console.log("Connected");
                connectivity_1.stopMonitoring();
                this.connexion = true;
            default:
                break;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdGl2aXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb25uZWN0aXZpdGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw4REFBbUg7QUFLbkg7SUFHSSx3SEFBd0g7SUFDeEgsaUNBQWlDO0lBRWpDO1FBSkEsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUt2QixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBQ0QsMkVBQTJFO0lBQzNFLDhDQUFnQixHQUFoQjtRQUNJLDhEQUE4RDtRQUM5RCxJQUFNLGdCQUFnQixHQUFHLGdDQUFpQixFQUFFLENBQUM7UUFFN0MsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQ3ZCLEtBQUssNkJBQWMsQ0FBQyxJQUFJLENBQUM7WUFDekIsS0FBSyw2QkFBYyxDQUFDLFFBQVE7Z0JBQ3hCLHdCQUF3QjtnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDN0Isa0NBQWtDO2dCQUNsQyxLQUFLLENBQUM7WUFDVixLQUFLLDZCQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3pCLEtBQUssNkJBQWMsQ0FBQyxNQUFNO2dCQUN0QixxQkFBcUI7Z0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ3pCLDZCQUFjLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFDMUI7Z0JBQ0ksS0FBSyxDQUFDO1FBQ2QsQ0FBQztJQUVMLENBQUM7SUEvQlEsbUJBQW1CO1FBSC9CLGlCQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDOztPQUNXLG1CQUFtQixDQXVEL0I7SUFBRCwwQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgY29ubmVjdGlvblR5cGUsIGdldENvbm5lY3Rpb25UeXBlLCBzdGFydE1vbml0b3JpbmcsIHN0b3BNb25pdG9yaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvY29ubmVjdGl2aXR5XCI7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgQ29ubmVjdGl2aXRlU2VydmljZSB7XG5cbiAgICBjb25uZXhpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvLz8/cmVxdWV0ZTogQXJyYXk8c3RyaW5nPjsgLy8gRW5yZWdpc3RyZXIgbGVzIHVybCBkZXMgcmVxdcOqdGVzIHF1aSBvbnQgw6l0w6kgcGFzc8OpZXMgc2kgZWxsZXMgbidvbnQgcGFzIHB1IMOqdHJlIGTDqWxpdnLDqWVzXG4gICAgLy8/P2F1dG9yaXNhdGlvbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50ZXN0Q29ubmVjdGl2aXRlKCk7XG4gICAgfVxuICAgIC8vIFRlc3QgZGUgY29ubmVjdGl2aXTDqSBwb3VyIGFkYXBlciB1bmUgc3RyYXTDqWdpZSBkZSB0cmFpdGVtZW50IGRlcyBkb25uw6llc1xuICAgIHRlc3RDb25uZWN0aXZpdGUoKSB7XG4gICAgICAgIC8vIHJlc3VsdCBpcyBDb25uZWN0aW9uVHlwZSBlbnVtZXJhdGlvbiAobm9uZSwgd2lmaSBvciBtb2JpbGUpXG4gICAgICAgIGNvbnN0IG15Q29ubmVjdGlvblR5cGUgPSBnZXRDb25uZWN0aW9uVHlwZSgpO1xuXG4gICAgICAgIHN3aXRjaCAobXlDb25uZWN0aW9uVHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5ub25lOlxuICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5ldGhlcm5ldDpcbiAgICAgICAgICAgICAgICAvLyBObyBpbnRlcm5ldCBjb25uZXhpb25cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIGNvbm5lY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgLy90aGlzLmxhbmNlclN1cnZlaWxsYW5jZVJlc2VhdSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS53aWZpOlxuICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgICAgICAgICAgICAgLy8gSW50ZXJuZXQgY29ubmV4aW9uXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWRcIik7XG4gICAgICAgICAgICAgICAgc3RvcE1vbml0b3JpbmcoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5leGlvbiA9IHRydWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyAvLyBMYW5jZXIgbGEgc3VydmVpbGxhbmNlIGR1IHLDqXNlYXVcbiAgICAvLyBsYW5jZXJTdXJ2ZWlsbGFuY2VSZXNlYXUoKSB7XG4gICAgLy8gICAgIHN0YXJ0TW9uaXRvcmluZygobXlDb25uZWN0aW9uVHlwZSkgPT4ge1xuICAgIC8vICAgICAgICAgc3dpdGNoIChteUNvbm5lY3Rpb25UeXBlKSB7XG4gICAgLy8gICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5ub25lOlxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBsdXMgZGUgY29ubmV4aW9uXCIpO1xuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICBjYXNlIGNvbm5lY3Rpb25UeXBlLndpZmk6XG4gICAgLy8gICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5tb2JpbGU6XG4gICAgLy8gICAgICAgICAgICAgY2FzZSBjb25uZWN0aW9uVHlwZS5ldGhlcm5ldDpcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jb25uZXhpb24gPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgICAgICAvLyBDb25uZXhpb24gcmV0cm91dsOpZVxuICAgIC8vICAgICAgICAgICAgICAgICBzdG9wTW9uaXRvcmluZygpO1xuICAgIC8vICAgICAgICAgICAgIC8vIGNhc2UgY29ubmVjdGlvblR5cGUuYmx1ZXRvb3RoOlxuICAgIC8vICAgICAgICAgICAgIC8vICAgICAvLyBmZWF0dXJlIGNvbWluZyBpbiBOYXRpdmVTY3JpcHQgNS4wLjBcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJDb25uZWN0aW9uIHR5cGUgY2hhbmdlZCB0byBibHVldG9vdGguXCIpO1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICBkZWZhdWx0OlxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxufSJdfQ==