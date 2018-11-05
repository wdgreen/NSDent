import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// // servers Urls 
// import { Settings } from "~/app/services/settings";
// // Used for notification system
import { Globals } from '~/app/services/globals';

@Injectable()
export class AuthService {

    httpAppareil;
    httpOptions;

    constructor(private http: HttpClient) { }

    // // First Login
    // loginCabinet(formulaire) {
    //     return this.http.post<any>(Settings.urlCabinets, formulaire);
    // }

    // // Second Login
    // loginPatient(formulaire) {
    //     // Define Http Header
    //     this.httpOptions = {
    //         headers: new HttpHeaders({
    //             'Content-Type': 'application/json',
    //             'username': `${formulaire.codePatient}`,
    //             'password': `${formulaire.motDePasse}`
    //         })
    //     };
    //     // Request API             Url                     /OS                    /Token                Header: Username & Password
    //     return this.http.get<any>(`${Settings.urlPatients}/${Globals.appareil.os}/${Globals.appareil.pushToken}/`, this.httpOptions);
    // }

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