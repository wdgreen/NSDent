import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
// servers Urls 
import { Settings } from "~/app/services/settings";
// Used for notification system
import { isAndroid, isIOS } from "tns-core-modules/platform";
const firebase = require("nativescript-plugin-firebase");

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
        // Define Http Body
        this.initFirebase();
        // Define Http Header
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'username': `${formulaire.codePatient}`,
                'password': `${formulaire.motDePasse}`
            })
        }
        // Request API
        return this.http.post<any>(Settings.urlPatients, this.httpBody, this.httpOptions);
    }
    initFirebase() {
        // Start Firebase init
        firebase.init().then(
            // If Firebase
            instance => {
                console.log("firebase.init done");
                // Return Firebase push token
                firebase.getCurrentPushToken().then((token: string) => {
                    // Define Firebase token
                    console.log("Current push token: " + token);
                    this.httpBody.token = token;
                    // Define OS
                    if (isAndroid) {
                        this.httpBody.os = "android";
                    } else if (isIOS) {
                        this.httpBody.os = "ios";
                    } else {
                        this.httpBody.os = "autre"
                    }
                });
            },
            // Else
            error => {
                console.log(`firebase.init error: ${error}`);
            }
        )
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