"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var modal_view_component_1 = require("../modal-view/modal-view.component");
var http_1 = require("@angular/common/http");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(modalService, vcRef, http) {
        // Use the component constructor to inject providers.
        this.modalService = modalService;
        this.vcRef = vcRef;
        this.http = http;
        this.isVisible = false;
        this.isVisible2 = false;
        this.isVisible1 = false;
        //public LienImage: string; 
        this.LienImage = [];
    }
    SearchComponent.prototype.getStartDate = function () {
        var _this = this;
        this.createModelView().then(function (result) {
            if (_this.validate(result)) {
            }
        }).catch(function (error) { return _this.handleError(error); });
    };
    SearchComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        this.LienImage[0] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent4.png"; //  "res://lamai";
        this.LienImage[1] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent1.jpg"; //  "res://lamai";
        this.LienImage[2] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent2.jpg";
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
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService, core_1.ViewContainerRef, http_1.HttpClient])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0U7QUFFcEUsa0RBQW9EO0FBQ3BELGtFQUEyRjtBQUMzRiwyRUFBd0U7QUFDeEUsNkNBQStEO0FBUy9EO0lBUUkseUJBQW9CLFlBQWdDLEVBQVUsS0FBdUIsRUFBUyxJQUFnQjtRQUMxRyxxREFBcUQ7UUFEckMsaUJBQVksR0FBWixZQUFZLENBQW9CO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBUHZHLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0IsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUM1QixlQUFVLEdBQWEsS0FBSyxDQUFDO1FBQ3BDLDRCQUE0QjtRQUNyQixjQUFTLEdBQWtCLEVBQUUsQ0FBQztJQU1yQyxDQUFDO0lBQ0csc0NBQVksR0FBWjtRQUFBLGlCQUtLO1FBSkcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDOUIsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ1Qsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLDREQUE0RCxDQUFDLENBQUMsa0JBQWtCO1FBQ3BHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsNERBQTRELENBQUMsQ0FBQyxrQkFBa0I7UUFDcEcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxD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Q3JDLENBQUM7eUNBU29DLGlDQUFrQixFQUFpQix1QkFBZ0IsRUFBZSxpQkFBVTtPQVJyRyxlQUFlLENBdUYzQjtJQUFELHNCQUFDO0NBQUEsQUF2RkQsSUF1RkM7QUF2RlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4uL21vZGFsLXZpZXcvbW9kYWwtdmlldy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNlYXJjaFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NlYXJjaC5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9zZWFyY2gtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBpc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwdWJsaWMgaXNWaXNpYmxlMjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyBpc1Zpc2libGUxIDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8vcHVibGljIExpZW5JbWFnZTogc3RyaW5nOyBcbiAgICBwdWJsaWMgTGllbkltYWdlOiBBcnJheTxzdHJpbmc+ID0gW107IFxuICAgIHB1YmxpYyBMaWVuSW1hZ2VSZWY6IHN0cmluZyA7IFxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICAgICBcbiAgICB9XG4gICAgICAgIGdldFN0YXJ0RGF0ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU1vZGVsVmlldygpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICAgICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VbMF0gPSBcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL2ltZy9kZW50NC5wbmdcIjsgLy8gIFwicmVzOi8vbGFtYWlcIjtcbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VbMV0gPSBcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL2ltZy9kZW50MS5qcGdcIjsgLy8gIFwicmVzOi8vbGFtYWlcIjtcbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VbMl0gPSBcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL2ltZy9kZW50Mi5qcGdcIjtcbiAgICAgICAgdGhpcy5MaWVuSW1hZ2VbM10gPSBcImh0dHA6Ly93d3cuZmFicmlxdWVudW1lcmlxdWUuZnIvT3J0aGFsaXNEZW1vL2ltZy9kZW50NC5wbmdcIjtcbiAgICB9XG5cbiAgICBvblRhcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAgIG9uVGFwMigpIHsgICBcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlMikge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUyID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUyID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbWFnZXpvb20oKTogdm9pZCB7XG4gICAgICAgXG4gICAgfVxuICAgIHRlc3QxKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUxKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTEgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTEgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRlc3QyKCkge1xuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUyKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZTIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY3JlYXRlTW9kZWxWaWV3KCk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgTEltYWdlID0gdGhpcy5MaWVuSW1hZ2VSZWYgO1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICAgICAgY29udGV4dDogTEltYWdlICwvL3RvZGF5LnRvRGF0ZVN0cmluZygpLFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKE1vZGFsVmlld0NvbXBvbmVudCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIDw8IHJldHVybmluZy1yZXN1bHRcbiAgICBwcml2YXRlIHZhbGlkYXRlKHJlc3VsdDogYW55KSB7XG4gICAgICAgIHJldHVybiAhIXJlc3VsdDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgYWxlcnQoXCJQbGVhc2UgdHJ5IGFnYWluIVwiKTtcbiAgICAgICAgY29uc29sZS5kaXIoZXJyb3IpO1xuICAgIH1cbiAgICB6b29tKEltZywgbm9tKSB7XG4gICAgICAgIHRoaXMuTGllbkltYWdlUmVmID0gbm9tIDtcbiAgICAgICAgdGhpcy5nZXRTdGFydERhdGUoKTtcbiAgICAgICAgY29uc29sZS5sb2coSW1nLCBub20pO1xuICAgIH1cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59XG4iXX0=