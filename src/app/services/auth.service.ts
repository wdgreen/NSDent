import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// servers Urls 
import { Settings } from "~/app/services/settings";
// Used for notification system
import { Globals } from '~/app/services/globals';

@Injectable()
export class AuthService {

    httpBody: {
        token: string,
        os: string
    }
    httpOptions;

    constructor(private http: HttpClient) { }

    // First Login
    loginCabinet(formulaire) {
        return this.http.post<any>(Settings.urlCabinets, formulaire);
    }

    // Second Login
    loginPatient(formulaire) {

        // Define Http Header
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'username': `${formulaire.codePatient}`,
                'password': `${formulaire.motDePasse}`
            })
        };
        console.log("Caractéristiques de l'appareil : " + JSON.stringify(Globals.appareil));
        // Request API
        return this.http.post<any>(Settings.urlPatients, Globals.appareil, this.httpOptions);
    }

    // logoutUser() {
    //     // localStorage.removeItem('token')
    //     // this._router.navigate(['/login'])
    // }
    // getToken() {
    //     // return localStorage.getItem('token')
    // }

    // loggedIn() {
    //     // return !!localStorage.getItem('token')
    // }
}