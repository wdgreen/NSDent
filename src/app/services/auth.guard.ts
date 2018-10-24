import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { SessionService } from './session.service';
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private sessionService: SessionService,
                private routerExtensions:RouterExtensions) { }

    canActivate(): boolean {
        if (this.sessionService.testeSession() ) {
            console.log("AuthGuard : Page autorisée par la garde");
            return true;
        } else {
            console.log("AuthGuard : Erreur authentification");
            this.routerExtensions.navigate(["login"], {
                transition: {
                    name: "fade"
                }
            });
            return false;
        }
    }
}
