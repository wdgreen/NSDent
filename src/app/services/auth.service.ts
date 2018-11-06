import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// servers Urls 
import { Settings } from "~/app/services/settings";
// Used for notification system
import { Globals } from '~/app/services/globals';
// API call requirements
import * as  base64 from "base-64";
import * as utf8 from "utf8";

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

        let str = `${formulaire.codePatient}:${formulaire.motDePasse}`;
        let bytes = utf8.encode(str);
        let encodedStr = base64.encode(bytes);

        // Define Http Header
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'text/html',
                'Authorization': `Basic ${encodedStr}`
            })
        };
        // Request API             Url                     /OS                    /Token                           Http Header
        return this.http.get<any>(`${Settings.urlPatients}/${Globals.appareil.os}/${Globals.appareil.pushToken}/`, this.httpOptions);
    }
}