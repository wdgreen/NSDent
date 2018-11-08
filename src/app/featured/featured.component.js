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
        this.photoProfil = "" + settings_1.Settings.urlImages + this.patient.photos.identity;
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        this.chargement = false;
        console.log("*********************************************** Contenu de Globals.patient : " + JSON.stringify(globals_1.Globals.patient));
        console.log("Requete image sans formatage : " + this.photoProfil);
        console.log("Requete image avec formatage : " + encodeURI(this.photoProfil));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUVwRCwrQ0FBOEM7QUFFOUMseUVBQXVFO0FBQ3ZFLCtEQUE2RDtBQUM3RCxpREFBZ0Q7QUFRaEQ7SUFRSSwyQkFBb0IsbUJBQXVDLEVBQ3ZDLGNBQTZCO1FBRDdCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUcsbUJBQVEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBVSxDQUFDO0lBQzlFLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQywrRUFBK0UsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQztRQUNoSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsNkNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQTFCUSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3ZDLENBQUM7eUNBUzBDLDBDQUFtQjtZQUN4QixnQ0FBYztPQVR4QyxpQkFBaUIsQ0EyQjdCO0lBQUQsd0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cbmltcG9ydCB7IENvbm5lY3Rpdml0ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvY29ubmVjdGl2aXRlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFBhdGllbnRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3BhdGllbnQuc2VydmljZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3MgfSBmcm9tIFwiLi4vc2VydmljZXMvc2V0dGluZ3NcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiRmVhdHVyZWRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vZmVhdHVyZWQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vZmVhdHVyZWQtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBGZWF0dXJlZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBjaGFyZ2VtZW50OiBib29sZWFuO1xuICAgIHBhdGllbnQ7XG4gICAgcGhvdG9zUGF0aWVudDtcbiAgICBwaG90b3NVcmw7XG4gICAgcGhvdG9Qcm9maWw7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbm5lY3Rpdml0ZVNlcnZpY2U6Q29ubmVjdGl2aXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhdGllbnRTZXJ2aWNlOlBhdGllbnRTZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IEdsb2JhbHMuY2hhcmdlbWVudDtcbiAgICAgICAgdGhpcy5wYXRpZW50ID0gR2xvYmFscy5wYXRpZW50LnJlc3VsdFswXVswXTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGhvdG9Qcm9maWwgPSBgJHtTZXR0aW5ncy51cmxJbWFnZXN9JHt0aGlzLnBhdGllbnQucGhvdG9zLmlkZW50aXR5fWA7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7IFxuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCIqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb250ZW51IGRlIEdsb2JhbHMucGF0aWVudCA6IFwiICsgSlNPTi5zdHJpbmdpZnkoR2xvYmFscy5wYXRpZW50KSApO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVldGUgaW1hZ2Ugc2FucyBmb3JtYXRhZ2UgOiBcIiArIHRoaXMucGhvdG9Qcm9maWwpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlJlcXVldGUgaW1hZ2UgYXZlYyBmb3JtYXRhZ2UgOiBcIiArIGVuY29kZVVSSSh0aGlzLnBob3RvUHJvZmlsKSk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19