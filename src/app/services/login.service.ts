import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from '~/app/services/models/auth.modele';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient,
                private routerExtensions: RouterExtensions) { }

    loginCabinet(formulaire) {
        console.log("envoi du formulaire : " + JSON.stringify(formulaire));
        return this.http.post<any>("http://192.168.2.70:3000/cabinet/cabinet", formulaire);
    }
}