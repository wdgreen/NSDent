"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var globals_1 = require("~/app/services/globals");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.chargement = globals_1.Globals.chargement;
        this.cabinet = globals_1.Globals.cabinet[0];
        this.photoCabinet = "http://" + encodeURI(this.cabinet.photo_cabinet);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.cabinet : " + JSON.stringify(globals_1.Globals.cabinet));
        console.log("_______________________________________________ Test : " + this.cabinet.photo_cabinet);
        console.log("_______________________________________________ Test : " + this.photoCabinet);
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(globals_1.Globals.patient));
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home-common.css"]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFFcEQsa0RBQWlEO0FBU2pEO0lBTUk7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFVLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBRyxDQUFDO0lBQzFFLENBQUM7SUFFRCxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrRUFBK0UsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQztRQUNoSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDcEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5REFBeUQsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQywrRUFBK0UsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQztJQUNwSSxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQXZCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDOztPQUNXLGFBQWEsQ0F3QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIn4vYXBwL3NlcnZpY2VzL2dsb2JhbHNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hhcmdlbWVudDogYm9vbGVhbjtcbiAgICBjYWJpbmV0O1xuICAgIHBob3RvQ2FiaW5ldDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgICAgIHRoaXMuY2FiaW5ldCA9IEdsb2JhbHMuY2FiaW5ldFswXTtcbiAgICAgICAgdGhpcy5waG90b0NhYmluZXQgPSBgaHR0cDovLyR7ZW5jb2RlVVJJKHRoaXMuY2FiaW5ldC5waG90b19jYWJpbmV0KX1gO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb250ZW51IGRlIEdsb2JhbHMuY2FiaW5ldCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoR2xvYmFscy5jYWJpbmV0KSApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fIFRlc3QgOiBcIiArIHRoaXMuY2FiaW5ldC5waG90b19jYWJpbmV0KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBUZXN0IDogXCIgKyB0aGlzLnBob3RvQ2FiaW5ldCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29udGVudSBkZSBHbG9iYWxzLnBhdGllbnQgOiBcIiArIEpTT04uc3RyaW5naWZ5KEdsb2JhbHMucGF0aWVudCkgKTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iXX0=