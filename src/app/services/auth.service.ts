import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// servers Urls 
import { Settings } from "~/app/services/settings";
// Used for notification system
import { Globals } from '~/app/services/globals';

//$ npm install base-64 --save
//$ npm install utf8 --save

// import * as  base64 from "base-64";
// import * as utf8 from "utf8";

@Injectable()
export class AuthService {

    httpAppareil;
    httpOptions;

    constructor(private http: HttpClient) { }

    // First Login
    loginCabinet(formulaire) {
        return this.http.post<any>(Settings.urlCabinets, formulaire);
    }

    // Second Login
    loginPatient(formulaire) {

        var str = `${formulaire.codePatient}:${formulaire.motDePasse}`;
        var bytes = utf8.encode(str);
        var encodedStr = base64.encode(bytes);
        console.log(encodedStr);

        // Define Http Header
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'text/html',
                'Authorization': `Key ${encodedStr}`
            })
        };
        console.log(this.http.get<any>(`${Settings.urlPatients}/${Globals.appareil.os}/${Globals.appareil.pushToken}`));
        // Request API             Url                     /OS                    /Token                Header: Username & Password
        return this.http.get<any>(`${Settings.urlPatients}/${Globals.appareil.os}/1234/`, this.httpOptions);
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