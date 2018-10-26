"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var data_service_1 = require("~/app/services/data.service");
var SessionGuard = /** @class */ (function () {
    function SessionGuard(dataService, routerExtensions) {
        this.dataService = dataService;
        this.routerExtensions = routerExtensions;
    }
    SessionGuard.prototype.canActivate = function () {
        // If local file, store them in Globals.cabinet, then navigate to Auth page
        if (this.dataService.testeInfos("Orthalis", "cabinet")) {
            this.dataService.globaliseInfos("Orthalis", "cabinet");
            this.routerExtensions.navigate(["auth"], {
                transition: {
                    name: "fade"
                }
            });
            console.log("SessionGuard : infos cabinet deja en local, redirection !");
            return false;
            // Else let user type code cabinet
        }
        else {
            this.dataService.deglobaliseInfos();
            console.log("SessionGuard : Nouvel utilisateur");
            return true;
        }
    };
    SessionGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [data_service_1.DataService,
            router_1.RouterExtensions])
    ], SessionGuard);
    return SessionGuard;
}());
exports.SessionGuard = SessionGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0Msc0RBQStEO0FBQy9ELDREQUEwRDtBQUcxRDtJQUNJLHNCQUFvQixXQUF3QixFQUN4QixnQkFBaUM7UUFEakMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtJQUFJLENBQUM7SUFFMUQsa0NBQVcsR0FBWDtRQUNJLDJFQUEyRTtRQUMzRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JDLFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsTUFBTTtpQkFDZjthQUNKLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsMkRBQTJELENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLGtDQUFrQztRQUNsQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztJQUNMLENBQUM7SUFyQlEsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUV3QiwwQkFBVztZQUNQLHlCQUFnQjtPQUY1QyxZQUFZLENBc0J4QjtJQUFELG1CQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gJ34vYXBwL3NlcnZpY2VzL2RhdGEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZXNzaW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRhU2VydmljZTogRGF0YVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOlJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gICAgY2FuQWN0aXZhdGUoKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIElmIGxvY2FsIGZpbGUsIHN0b3JlIHRoZW0gaW4gR2xvYmFscy5jYWJpbmV0LCB0aGVuIG5hdmlnYXRlIHRvIEF1dGggcGFnZVxuICAgICAgICBpZiAodGhpcy5kYXRhU2VydmljZS50ZXN0ZUluZm9zKFwiT3J0aGFsaXNcIiwgXCJjYWJpbmV0XCIpICkge1xuICAgICAgICAgICAgdGhpcy5kYXRhU2VydmljZS5nbG9iYWxpc2VJbmZvcyhcIk9ydGhhbGlzXCIsIFwiY2FiaW5ldFwiKTtcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJhdXRoXCJdLCB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXNzaW9uR3VhcmQgOiBpbmZvcyBjYWJpbmV0IGRlamEgZW4gbG9jYWwsIHJlZGlyZWN0aW9uICFcIik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIEVsc2UgbGV0IHVzZXIgdHlwZSBjb2RlIGNhYmluZXRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNlcnZpY2UuZGVnbG9iYWxpc2VJbmZvcygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTZXNzaW9uR3VhcmQgOiBOb3V2ZWwgdXRpbGlzYXRldXJcIik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==