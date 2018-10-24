import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RouterExtensions } from "nativescript-angular/router";

import { Auth } from '~/app/services/models/auth.modele';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient,
                private routerExtensions: RouterExtensions) { }

    loginCabinet(formulaire) {
        return this.http.post<any>("http://192.168.2.70:3000/cabinet/cabinet", formulaire);
    }

    loginUser(formulaire) {
        return this.http.post<Auth>("http://localhost:3000/user/login", formulaire);
    }

    logoutUser() {
        // localStorage.removeItem('token')
        // this._router.navigate(['/login'])
    }

    getToken() {
        // return localStorage.getItem('token')
    }

    loggedIn() {
        // return !!localStorage.getItem('token')
    }
}