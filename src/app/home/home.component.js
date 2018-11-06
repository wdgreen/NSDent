"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var globals_1 = require("~/app/services/globals");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.cabinet = globals_1.Globals.cabinet;
        this.chargement = globals_1.Globals.chargement;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.chargement = false;
        console.log(globals_1.Globals.cabinet);
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    };
    HomeComponent.prototype.notification = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFFcEQsa0RBQWlEO0FBU2pEO0lBS0k7UUFGQSxZQUFPLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLENBQUM7UUFHdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLFVBQVUsQ0FBQztJQUN6QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixpR0FBaUc7UUFDakcsdUNBQXVDO0lBRTNDLENBQUM7SUFFRCxvQ0FBWSxHQUFaO0lBRUEsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUF4QlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQzs7T0FDVyxhQUFhLENBeUJ6QjtJQUFELG9CQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgR2xvYmFscyB9IGZyb20gXCJ+L2FwcC9zZXJ2aWNlcy9nbG9iYWxzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hvbWUtY29tbW9uLmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNoYXJnZW1lbnQ6IGJvb2xlYW47XG4gICAgY2FiaW5ldCA9IEdsb2JhbHMuY2FiaW5ldDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNoYXJnZW1lbnQgPSBHbG9iYWxzLmNoYXJnZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2hhcmdlbWVudCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhHbG9iYWxzLmNhYmluZXQpO1xuICAgICAgICAvL0NhbGxlZCBhZnRlciB0aGUgY29uc3RydWN0b3IsIGluaXRpYWxpemluZyBpbnB1dCBwcm9wZXJ0aWVzLCBhbmQgdGhlIGZpcnN0IGNhbGwgdG8gbmdPbkNoYW5nZXMuXG4gICAgICAgIC8vQWRkICdpbXBsZW1lbnRzIE9uSW5pdCcgdG8gdGhlIGNsYXNzLlxuICAgICAgICBcbiAgICB9XG5cbiAgICBub3RpZmljYXRpb24oKTp2b2lkIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufVxuIl19