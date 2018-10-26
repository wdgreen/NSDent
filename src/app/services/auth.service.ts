import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Settings } from "~/app/services/settings";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) { }

    loginCabinet(formulaire) {
        return this.http.post<any>(Settings.urlCabinets, formulaire);
    }

    loginPatient(formulaire) {
        // return this.http.post<any>(this.serveur + "/user/login", formulaire);
        return this.http.post<any>(Settings.urlPatients, formulaire);
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