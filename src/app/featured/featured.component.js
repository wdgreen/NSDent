"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var globals_1 = require("../services/globals");
var connectivite_service_1 = require("../services/connectivite.service");
var patient_service_1 = require("../services/patient.service");
var FeaturedComponent = /** @class */ (function () {
    function FeaturedComponent(connectiviteService, patientService) {
        this.connectiviteService = connectiviteService;
        this.patientService = patientService;
        this.chargement = globals_1.Globals.chargement;
        // Use the component constructor to inject providers.
    }
    FeaturedComponent.prototype.ngOnInit = function () {
        this.chargement = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVhdHVyZWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmVhdHVyZWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUVwRCwrQ0FBOEM7QUFFOUMseUVBQXVFO0FBQ3ZFLCtEQUE2RDtBQVE3RDtJQUlJLDJCQUFvQixtQkFBdUMsRUFDdkMsY0FBNkI7UUFEN0Isd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUN2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQUM3QyxJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBakJRLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FLMEMsMENBQW1CO1lBQ3hCLGdDQUFjO09BTHhDLGlCQUFpQixDQWtCN0I7SUFBRCx3QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dsb2JhbHNcIjtcblxuaW1wb3J0IHsgQ29ubmVjdGl2aXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25uZWN0aXZpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGF0aWVudC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkZlYXR1cmVkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZlYXR1cmVkLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2ZlYXR1cmVkLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgRmVhdHVyZWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY2hhcmdlbWVudDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTpDb25uZWN0aXZpdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGF0aWVudFNlcnZpY2U6UGF0aWVudFNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gR2xvYmFscy5jaGFyZ2VtZW50O1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQgeyBcbiAgICAgICAgdGhpcy5jaGFyZ2VtZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19