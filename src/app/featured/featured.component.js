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
        // this.photosUrl = Settings.urlPatients;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUVwRCwrQ0FBOEM7QUFFOUMseUVBQXVFO0FBQ3ZFLCtEQUE2RDtBQUM3RCxpREFBZ0Q7QUFRaEQ7SUFRSSwyQkFBb0IsbUJBQXVDLEVBQ3ZDLGNBQTZCO1FBRDdCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBb0I7UUFDdkMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFDN0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLGlCQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU1Qyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFHLG1CQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVUsQ0FBQztJQUM5RSxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0VBQStFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUM7UUFDaEksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUEzQlEsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUN2QyxDQUFDO3lDQVMwQywwQ0FBbUI7WUFDeEIsZ0NBQWM7T0FUeEMsaUJBQWlCLENBNEI3QjtJQUFELHdCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5pbXBvcnQgeyBDb25uZWN0aXZpdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Nvbm5lY3Rpdml0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYXRpZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkZlYXR1cmVkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZlYXR1cmVkLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2ZlYXR1cmVkLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hhcmdlbWVudDogYm9vbGVhbjtcbiAgICBwYXRpZW50O1xuICAgIHBob3Rvc1BhdGllbnQ7XG4gICAgcGhvdG9zVXJsO1xuICAgIHBob3RvUHJvZmlsO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25uZWN0aXZpdGVTZXJ2aWNlOkNvbm5lY3Rpdml0ZVNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBwYXRpZW50U2VydmljZTpQYXRpZW50U2VydmljZSkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgICAgIHRoaXMucGF0aWVudCA9IEdsb2JhbHMucGF0aWVudC5yZXN1bHRbMF1bMF07XG4gICAgICAgIFxuICAgICAgICAvLyB0aGlzLnBob3Rvc1VybCA9IFNldHRpbmdzLnVybFBhdGllbnRzO1xuICAgICAgICB0aGlzLnBob3RvUHJvZmlsID0gYCR7U2V0dGluZ3MudXJsSW1hZ2VzfSR7dGhpcy5wYXRpZW50LnBob3Rvcy5pZGVudGl0eX1gO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29udGVudSBkZSBHbG9iYWxzLnBhdGllbnQgOiBcIiArIEpTT04uc3RyaW5naWZ5KEdsb2JhbHMucGF0aWVudCkgKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXRlIGltYWdlIHNhbnMgZm9ybWF0YWdlIDogXCIgKyB0aGlzLnBob3RvUHJvZmlsKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXF1ZXRlIGltYWdlIGF2ZWMgZm9ybWF0YWdlIDogXCIgKyBlbmNvZGVVUkkodGhpcy5waG90b1Byb2ZpbCkpO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==