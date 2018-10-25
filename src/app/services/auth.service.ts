import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AuthService {

    serveur = "http://192.168.2.70:3000";

    constructor(private http: HttpClient) { }

    loginCabinet(formulaire) {
        return this.http.post<any>(this.serveur + "/cabinet/cabinet", formulaire);
    }

    loginPatient(formulaire) {
        return this.http.post<any>(this.serveur + "/user/login", formulaire);
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