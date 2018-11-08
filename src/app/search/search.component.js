"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_view_component_1 = require("../modal-view/modal-view.component");
var http_1 = require("@angular/common/http");
var globals_1 = require("../services/globals");
var connectivite_service_1 = require("../services/connectivite.service");
var patient_service_1 = require("../services/patient.service");
var settings_1 = require("../services/settings");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(modalService, vcRef, http, connectiviteService, patientService) {
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.http = http;
        this.connectiviteService = connectiviteService;
        this.patientService = patientService;
        this.isVisible = false;
        this.isVisible2 = false;
        this.isVisible1 = false;
        //public LienImage: string; 
        this.LienImage = [];
        // Use the component constructor to inject providers.
        /* Contenu dynamique */
        this.chargement = globals_1.Globals.chargement;
        this.cabinet = globals_1.Globals.cabinet[0];
        this.photoCabinet = this.cabinet.photo_cabinet;
        this.nomCabinet = this.cabinet.nom_cabinet;
        this.patient = globals_1.Globals.patient.result[0][0];
        this.photoProfil = "" + settings_1.Settings.urlImages + this.patient.photos.identity;
        this.photoProfil = encodeURI("" + settings_1.Settings.urlImages + this.patient.photos.identity);
    }
    SearchComponent.prototype.getStartDate = function () {
        var _this = this;
        this.createModelView().then(function (result) {
            if (_this.validate(result)) {
            }
        }).catch(function (error) { return _this.handleError(error); });
    };
    SearchComponent.prototype.ngOnInit = function () {
        this.chargement = false;
        // Init your component properties here.
        this.LienImage[0] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent1.jpg";
        this.LienImage[1] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent2.jpg";
        this.LienImage[2] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent4.png";
        this.LienImage[3] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent4.png";
    };
    SearchComponent.prototype.onTap = function () {
        if (this.isVisible) {
            this.isVisible = false;
        }
        else {
            this.isVisible = true;
        }
    };
    SearchComponent.prototype.onTap2 = function () {
        if (this.isVisible2) {
            this.isVisible2 = false;
        }
        else {
            this.isVisible2 = true;
        }
    };
    SearchComponent.prototype.imagezoom = function () {
    };
    SearchComponent.prototype.test1 = function () {
        if (this.isVisible1) {
            this.isVisible1 = false;
        }
        else {
            this.isVisible1 = true;
        }
    };
    SearchComponent.prototype.test2 = function () {
        if (this.isVisible2) {
            this.isVisible2 = false;
        }
        else {
            this.isVisible2 = true;
        }
    };
    SearchComponent.prototype.createModelView = function () {
        var today = new Date();
        var LImage = this.LienImageRef;
        var options = {
            viewContainerRef: this.vcRef,
            context: LImage,
            fullscreen: false,
        };
        return this.modalService.showModal(modal_view_component_1.ModalViewComponent, options);
    };
    // << returning-result
    SearchComponent.prototype.validate = function (result) {
        return !!result;
    };
    SearchComponent.prototype.handleError = function (error) {
        alert("Please try again!");
        console.dir(error);
    };
    SearchComponent.prototype.zoom = function (Img, nom) {
        this.LienImageRef = nom;
        this.getStartDate();
        console.log(Img, nom);
    };
    SearchComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: "Search",
            moduleId: module.id,
            providers: [modal_dialog_1.ModalDialogService],
            templateUrl: "./search.component.html",
            styleUrls: ["./search-common.css"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, http_1.HttpClient,
            connectivite_service_1.ConnectiviteService,
            patient_service_1.PatientService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFFcEUsa0RBQW9EO0FBQ3BELGtFQUEyRjtBQUMzRiwyRUFBd0U7QUFDeEUsNkNBQStEO0FBQy9ELCtDQUE4QztBQUU5Qyx5RUFBdUU7QUFDdkUsK0RBQTZEO0FBQzdELGlEQUFnRDtBQVFoRDtJQW9CSSx5QkFBb0IsWUFBZ0MsRUFBVSxLQUF1QixFQUFTLElBQWdCLEVBQ2xHLG1CQUF1QyxFQUMvQixjQUE2QjtRQUY3QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEcsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVQxQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUNwQyw0QkFBNEI7UUFDckIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFNakMscURBQXFEO1FBQ3JELHVCQUF1QjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVD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QUUsT0FBTyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUNELHNCQUFzQjtJQUNkLGtDQUFRLEdBQWhCLFVBQWlCLE1BQVc7UUFDeEIsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEIsQ0FBQztJQUVPLHFDQUFXLEdBQW5CLFVBQW9CLEtBQVU7UUFDMUIsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0QsOEJBQUksR0FBSixVQUFLLEdBQUcsRUFBRSxHQUFHO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUU7UUFDekIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBNUdRLGVBQWU7UUFQM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxpQ0FBa0IsQ0FBQztZQUMvQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLHFCQUFxQixDQUFDO1NBQ3JDLENBQUM7eUNBcUJvQyxpQ0FBa0IsRUFBaUIsdUJBQWdCLEVBQWUsaUJBQVU7WUFDOUUsMENBQW1CO1lBQ2hCLGdDQUFjO09BdEJ4QyxlQUFlLENBNkczQjtJQUFELHNCQUFDO0NBQUEsQUE3R0QsSUE2R0M7QUE3R1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL21vZGFsLXZpZXcvbW9kYWwtdmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBHbG9iYWxzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2dsb2JhbHNcIjtcblxuaW1wb3J0IHsgQ29ubmVjdGl2aXRlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jb25uZWN0aXZpdGUuc2VydmljZVwiO1xuaW1wb3J0IHsgUGF0aWVudFNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvcGF0aWVudC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiU2VhcmNoXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBwcm92aWRlcnM6IFtNb2RhbERpYWxvZ1NlcnZpY2VdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2VhcmNoLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NlYXJjaC1jb21tb24uY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbm9tUGF0aWVudDtcbiAgICBjYWJpbmV0OiBhbnk7XG5cbiAgICAvLyBQYXJ0aWUgZHluYW1pcXVlXG4gICBwaG90b0NhYmluZXQ7XG4gICBub21DYWJpbmV0O1xuICAgY2hhcmdlbWVudDogYm9vbGVhbjtcbiAgIHBhdGllbnQ7XG4gICBwaG90b3NQYXRpZW50O1xuICAgcGhvdG9zVXJsO1xuICAgcGhvdG9Qcm9maWw7XG5cbiAgICBwdWJsaWMgaXNWaXNpYmxlOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHVibGljIGlzVmlzaWJsZTI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNWaXNpYmxlMSA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvL3B1YmxpYyBMaWVuSW1hZ2U6IHN0cmluZzsgXG4gICAgcHVibGljIExpZW5JbWFnZTogQXJyYXk8c3RyaW5nPiA9IFtdOyBcbiAgICBwdWJsaWMgTGllbkltYWdlUmVmOiBzdHJpbmcgOyBcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYscHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgICAgICBwcml2YXRlIGNvbm5lY3Rpdml0ZVNlcnZpY2U6Q29ubmVjdGl2aXRlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHBhdGllbnRTZXJ2aWNlOlBhdGllbnRTZXJ2aWNlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgICAgIC8qIENvbnRlbnUgZHluYW1pcXVlICovXG4gICAgdGhpcy5jaGFyZ2VtZW50ID0gR2xvYmFscy5jaGFyZ2VtZW50O1xuICAgIHRoaXMuY2FiaW5ldCA9IEdsb2JhbHMuY2FiaW5ldFswXTtcbiAgICB0aGlzLnBob3RvQ2FiaW5ldCA9IHRoaXMuY2FiaW5ldC5waG90b19jYWJpbmV0O1xuICAgIHRoaXMubm9tQ2FiaW5ldCA9IHRoaXMuY2FiaW5ldC5ub21fY2FiaW5ldDtcbiAgICB0aGlzLnBhdGllbnQgPSBHbG9iYWxzLnBhdGllbnQucmVzdWx0WzBdWzBdO1xuICAgIHRoaXMucGhvdG9Qcm9maWwgPSBgJHtTZXR0aW5ncy51cmxJbWFnZXN9JHt0aGlzLnBhdGllbnQucGhvdG9zLmlkZW50aXR5fWA7XG4gICAgdGhpcy5waG90b1Byb2ZpbCA9IGVuY29kZVVSSShgJHtTZXR0aW5ncy51cmxJbWFnZXN9JHt0aGlzLnBhdGllbnQucGhvdG9zLmlkZW50aXR5fWApO1xuICAgIH1cbiAgICAgICAgZ2V0U3RhcnREYXRlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTW9kZWxWaWV3KCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgICAgICAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VbMF0gPSBcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL2ltZy9kZW50MS5qcGdcIjsgXG4gICAgICAgIHRoaXMuTGllbkltYWdlWzFdID0gXCJodHRwOi8vd3d3LmZhYnJpcXVlbnVtZXJpcXVlLmZyL09ydGhhbGlzRGVtby9pbWcvZGVudDIuanBnXCI7IFxuICAgICAgICB0aGlzLkxpZW5JbWFnZVsyXSA9IFwiaHR0cDovL3d3dy5mYWJyaXF1ZW51bWVyaXF1ZS5mci9PcnRoYWxpc0RlbW8vaW1nL2RlbnQ0LnBuZ1wiO1xuICAgICAgICB0aGlzLkxpZW5JbWFnZVszXSA9IFwiaHR0cDovL3d3dy5mYWJyaXF1ZW51bWVyaXF1ZS5mci9PcnRoYWxpc0RlbW8vaW1nL2RlbnQ0LnBuZ1wiO1xuICAgIH1cblxuICAgIG9uVGFwKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgICAgb25UYXAyKCkgeyAgIFxuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUyKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGltYWdlem9vbSgpOiB2b2lkIHtcbiAgICAgICBcbiAgICB9XG4gICAgdGVzdDEoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZTEpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGVzdDIoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZTIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMiA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlMiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjcmVhdGVNb2RlbFZpZXcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCBMSW1hZ2UgPSB0aGlzLkxpZW5JbWFnZVJlZiA7XG4gICAgICAgIGNvbnN0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHZpZXdDb250YWluZXJSZWY6IHRoaXMudmNSZWYsXG4gICAgICAgICAgICBjb250ZXh0OiBMSW1hZ2UgLC8vdG9kYXkudG9EYXRlU3RyaW5nKCksXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKTtcbiAgICB9XG4gICAgLy8gPDwgcmV0dXJuaW5nLXJlc3VsdFxuICAgIHByaXZhdGUgdmFsaWRhdGUocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgcmV0dXJuICEhcmVzdWx0O1xuICAgIH1cblxuICAgIHByaXZhdGUgaGFuZGxlRXJyb3IoZXJyb3I6IGFueSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSB0cnkgYWdhaW4hXCIpO1xuICAgICAgICBjb25zb2xlLmRpcihlcnJvcik7XG4gICAgfVxuICAgIHpvb20oSW1nLCBub20pIHtcbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VSZWYgPSBub20gO1xuICAgICAgICB0aGlzLmdldFN0YXJ0RGF0ZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhJbWcsIG5vbSk7XG4gICAgfVxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==