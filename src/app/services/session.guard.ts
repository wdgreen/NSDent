import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from '~/app/services/data.service';

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(private dataService: DataService,
                private routerExtensions:RouterExtensions) { }

    canActivate(): boolean {
        // If local file, store them in Globals.cabinet, then navigate to Auth page
        if (this.dataService.testeInfos("Orthalis", "cabinet") ) {
            this.dataService.globaliseInfos("Orthalis", "cabinet");
            this.routerExtensions.navigate(["auth"], {
                transition: {
                    name: "fade"
                }
            });
            console.log("SessionGuard : infos cabinet deja en local, redirection !");
            return false;
        // Else let user type code cabinet
        } else {
            this.dataService.deglobaliseInfos();
            console.log("SessionGuard : Nouvel utilisateur");
            return true;
        }
    }
}
