import { Injectable } from '@angular/core';

import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from "tns-core-modules/connectivity";

@Injectable({
    providedIn: 'root'
})
export class ConnectiviteService {

    connexion: boolean = false;

    constructor() { }
    
    testeConnectivite() {
        const myConnectionType = getConnectionType();

        switch (myConnectionType) {
            case connectionType.none:
            case connectionType.ethernet:
                // No internet connexion
                console.log("No connection");
                this.connexion = false;
                return false;
                //this.surveilleReseau();
                //break;
            case connectionType.wifi:
            case connectionType.mobile:
                // Internet connexion
                console.log("Connected");
                this.connexion = true;
                stopMonitoring();
                return true;
            default:
                return false;
        }
    }

    surveilleReseau() {
        startMonitoring((newConnectionType) => {
            switch (newConnectionType) {
                case connectionType.none:
                case connectionType.ethernet:
                    console.log("Connection type changed to none.");
                    this.connexion = false;
                    break;
                case connectionType.wifi:
                case connectionType.mobile:
                    this.connexion = true;
                    console.log("Connection type changed to true.");
                    break;
                default:
                    break;
            }
        });
    }
}