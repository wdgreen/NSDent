import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from '~/app/services/models/auth.modele';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient,
                private routerExtensions: RouterExtensions) { }

    loginCabinet(formulaire) {
        return this.http.post<Auth>("http://localhost:3000/cabinet/cabinet", formulaire);
    }
}