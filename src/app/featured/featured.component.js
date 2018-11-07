"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var globals_1 = require("../services/globals");
var connectivite_service_1 = require("../services/connectivite.service");
var patient_service_1 = require("../services/patient.service");
var settings_1 = require("../services/settings");
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(connectiviteService, patientService) {
        this.connectiviteService = connectiviteService;
        this.patientService = patientService;
        this.chargement = globals_1.Globals.chargement;
        this.patient = globals_1.Globals.patient.result[0][0];
        this.photosPatient = this.patient.photos.identity;
        this.photosUrl = settings_1.Settings.urlPatients;
        this.photo = "" + settings_1.Settings.urlImages + this.photosPatient;
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(globals_1.Globals.patient));
        console.log("_______________________________________________ Test : " + JSON.stringify(this.patient.patient.codePatient));
        console.log(this.photosPatient);
        console.log("Requete image : " + this.photo);
    };
    FeaturedComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    FeaturedComponent = __decorate([
        core_1.Component({
            selector: "Featured",
            moduleId: module.id,
            templateUrl: "./featured.component.html",
            styleUrls: ["./featured-common.css"]
        }),
        __metadata("design:paramtypes", [connectivite_service_1.ConnectiviteService,
            patient_service_1.PatientService])
    ], FeaturedComponent);
    return FeaturedComponent;
}());
exports.FeaturedComponent = FeaturedComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUVwRCwrQ0FBOEM7QUFFOUMseUVBQXVFO0FBQ3ZFLCtEQUE2RDtBQUM3RCxpREFBZ0Q7QUFRaEQ7SUFRSSwyQkFBb0IsbUJBQXVDLEVBQ3ZDLGNBQTZCO1FBRDdCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBRyxtQkFBUSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBZSxDQUFDO0lBQzlELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrRUFBK0UsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQztRQUNoSSxPQUFPLENBQUMsR0FBRyxDQUFDLHlEQUF5RCxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTVCUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBUzBDLDBDQUFtQjtZQUN4QixnQ0FBYztPQVR4QyxpQkFBaUIsQ0E2QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY29ubmVjdGl2aXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhdGllbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRmVhdHVyZWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmVhdHVyZWQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vZmVhdHVyZWQtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjaGFyZ2VtZW50OiBib29sZWFuO1xuICAgIHBhdGllbnQ7XG4gICAgcGhvdG9zUGF0aWVudDtcbiAgICBwaG90b3NVcmw7XG4gICAgcGhvdG87XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbm5lY3Rpdml0ZVNlcnZpY2U6Q29ubmVjdGl2aXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhdGllbnRTZXJ2aWNlOlBhdGllbnRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gR2xvYmFscy5wYXRpZW50LnJlc3VsdFswXVswXTtcbiAgICAgICAgdGhpcy5waG90b3NQYXRpZW50ID0gdGhpcy5wYXRpZW50LnBob3Rvcy5pZGVudGl0eTtcbiAgICAgICAgdGhpcy5waG90b3NVcmwgPSBTZXR0aW5ncy51cmxQYXRpZW50cztcbiAgICAgICAgdGhpcy5waG90byA9IGAke1NldHRpbmdzLnVybEltYWdlc30ke3RoaXMucGhvdG9zUGF0aWVudH1gO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29udGVudSBkZSBHbG9iYWxzLnBhdGllbnQgOiBcIiArIEpTT04uc3RyaW5naWZ5KEdsb2JhbHMucGF0aWVudCkgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyBUZXN0IDogXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnBhdGllbnQucGF0aWVudC5jb2RlUGF0aWVudCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnBob3Rvc1BhdGllbnQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVldGUgaW1hZ2UgOiBcIiArIHRoaXMucGhvdG8pO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==