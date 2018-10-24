import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SessionService } from './session.service';
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class SessionGuard implements CanActivate {
    constructor(private sessionService: SessionService,
                private routerExtensions:RouterExtensions) { }

    canActivate(): boolean {
        if (this.sessionService.testeSession()) {
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
