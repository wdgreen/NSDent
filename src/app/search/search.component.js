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
        this.photoProfil = "encodeURI(" + settings_1.Settings.urlImages + this.patient.photos.identity + ")";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFFcEUsa0RBQW9EO0FBQ3BELGtFQUEyRjtBQUMzRiwyRUFBd0U7QUFDeEUsNkNBQStEO0FBQy9ELCtDQUE4QztBQUU5Qyx5RUFBdUU7QUFDdkUsK0RBQTZEO0FBQzdELGlEQUFnRDtBQVFoRDtJQW9CSSx5QkFBb0IsWUFBZ0MsRUFBVSxLQUF1QixFQUFTLElBQWdCLEVBQ2xHLG1CQUF1QyxFQUMvQixjQUE2QjtRQUY3QixpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUFTLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEcsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQVQxQyxjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFhLEtBQUssQ0FBQztRQUNwQyw0QkFBNEI7UUFDckIsY0FBUyxHQUFrQixFQUFFLENBQUM7UUFNakMscURBQXFEO1FBQ3JELHVCQUF1QjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMvQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVD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QUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0Qsc0JBQXNCO0lBQ2Qsa0NBQVEsR0FBaEIsVUFBaUIsTUFBVztRQUN4QixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0lBRU8scUNBQVcsR0FBbkIsVUFBb0IsS0FBVTtRQUMxQixLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCw4QkFBSSxHQUFKLFVBQUssR0FBRyxFQUFFLEdBQUc7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBRTtRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNELDJDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUE1R1EsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGlDQUFrQixDQUFDO1lBQy9CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMscUJBQXFCLENBQUM7U0FDckMsQ0FBQzt5Q0FxQm9DLGlDQUFrQixFQUFpQix1QkFBZ0IsRUFBZSxpQkFBVTtZQUM5RSwwQ0FBbUI7WUFDaEIsZ0NBQWM7T0F0QnhDLGVBQWUsQ0E2RzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTdHRCxJQTZHQztBQTdHWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NvbnRhaW5lclJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBNb2RhbFZpZXdDb21wb25lbnQgfSBmcm9tIFwiLi4vbW9kYWwtdmlldy9tb2RhbC12aWV3LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEdsb2JhbHMgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2xvYmFsc1wiO1xuXG5pbXBvcnQgeyBDb25uZWN0aXZpdGVTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Nvbm5lY3Rpdml0ZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBQYXRpZW50U2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9wYXRpZW50LnNlcnZpY2VcIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTZWFyY2hcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHByb3ZpZGVyczogW01vZGFsRGlhbG9nU2VydmljZV0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zZWFyY2guY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vc2VhcmNoLWNvbW1vbi5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBub21QYXRpZW50O1xuICAgIGNhYmluZXQ6IGFueTtcblxuICAgIC8vIFBhcnRpZSBkeW5hbWlxdWVcbiAgIHBob3RvQ2FiaW5ldDtcbiAgIG5vbUNhYmluZXQ7XG4gICBjaGFyZ2VtZW50OiBib29sZWFuO1xuICAgcGF0aWVudDtcbiAgIHBob3Rvc1BhdGllbnQ7XG4gICBwaG90b3NVcmw7XG4gICBwaG90b1Byb2ZpbDtcblxuICAgIHB1YmxpYyBpc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNWaXNpYmxlMjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1Zpc2libGUxIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vcHVibGljIExpZW5JbWFnZTogc3RyaW5nOyBcbiAgICBwdWJsaWMgTGllbkltYWdlOiBBcnJheTxzdHJpbmc+ID0gW107IFxuICAgIHB1YmxpYyBMaWVuSW1hZ2VSZWY6IHN0cmluZyA7IFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgICAgIHByaXZhdGUgY29ubmVjdGl2aXRlU2VydmljZTpDb25uZWN0aXZpdGVTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcGF0aWVudFNlcnZpY2U6UGF0aWVudFNlcnZpY2UpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICAgICAgLyogQ29udGVudSBkeW5hbWlxdWUgKi9cbiAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgdGhpcy5jYWJpbmV0ID0gR2xvYmFscy5jYWJpbmV0WzBdO1xuICAgIHRoaXMucGhvdG9DYWJpbmV0ID0gdGhpcy5jYWJpbmV0LnBob3RvX2NhYmluZXQ7XG4gICAgdGhpcy5ub21DYWJpbmV0ID0gdGhpcy5jYWJpbmV0Lm5vbV9jYWJpbmV0O1xuICAgIHRoaXMucGF0aWVudCA9IEdsb2JhbHMucGF0aWVudC5yZXN1bHRbMF1bMF07XG4gICAgdGhpcy5waG90b1Byb2ZpbCA9IGAke1NldHRpbmdzLnVybEltYWdlc30ke3RoaXMucGF0aWVudC5waG90b3MuaWRlbnRpdHl9YDtcbiAgICB0aGlzLnBob3RvUHJvZmlsID0gYGVuY29kZVVSSSgke1NldHRpbmdzLnVybEltYWdlc30ke3RoaXMucGF0aWVudC5waG90b3MuaWRlbnRpdHl9KWBcbiAgICB9XG4gICAgICAgIGdldFN0YXJ0RGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGVsVmlldygpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgICAgIHRoaXMuTGllbkltYWdlWzBdID0gXCJodHRwOi8vd3d3LmZhYnJpcXVlbnVtZXJpcXVlLmZyL09ydGhhbGlzRGVtby9pbWcvZGVudDEuanBnXCI7IFxuICAgICAgICB0aGlzLkxpZW5JbWFnZVsxXSA9IFwiaHR0cDovL3d3dy5mYWJyaXF1ZW51bWVyaXF1ZS5mci9PcnRoYWxpc0RlbW8vaW1nL2RlbnQyLmpwZ1wiOyBcbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VbMl0gPSBcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL2ltZy9kZW50NC5wbmdcIjtcbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VbM10gPSBcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL2ltZy9kZW50NC5wbmdcIjtcbiAgICB9XG5cbiAgICBvblRhcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgIG9uVGFwMigpIHsgICBcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlMikge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUyID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbWFnZXpvb20oKTogdm9pZCB7XG4gICAgICAgXG4gICAgfVxuICAgIHRlc3QxKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUxKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTEgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRlc3QyKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUyKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlTW9kZWxWaWV3KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgTEltYWdlID0gdGhpcy5MaWVuSW1hZ2VSZWYgO1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgY29udGV4dDogTEltYWdlICwvL3RvZGF5LnRvRGF0ZVN0cmluZygpLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKE1vZGFsVmlld0NvbXBvbmVudCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIDw8IHJldHVybmluZy1yZXN1bHRcbiAgICBwcml2YXRlIHZhbGlkYXRlKHJlc3VsdDogYW55KSB7XG4gICAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH1cbiAgICB6b29tKEltZywgbm9tKSB7XG4gICAgICAgIHRoaXMuTGllbkltYWdlUmVmID0gbm9tIDtcbiAgICAgICAgdGhpcy5nZXRTdGFydERhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coSW1nLCBub20pO1xuICAgIH1cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iXX0=