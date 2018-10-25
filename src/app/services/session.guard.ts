import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from '~/app/services/data.service';

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(private dataService: DataService,
                private routerExtensions:RouterExtensions) { }

    canActivate(): boolean {
        if (this.dataService.testeInfos("Orthalis", "cabinet.json") ) {
            this.routerExtensions.navigate(["auth"], {
                transition: {
                    name: "fade"
                }
            });
            console.log("SessionGuard : infos cabinet deja en local");
            return false;
        } else {
            console.log("SessionGuard : Nouvel utilisateur");
            return true;
        }
    }
}
