import { Injectable } from '@angular/core';

import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from "tns-core-modules/connectivity";

@Injectable({
    providedIn: 'root'
})
export class ConnectiviteService {

    connexion: boolean = false;
    //??requete: Array<string>; // Enregistrer les url des requêtes qui ont été passées si elles n'ont pas pu être délivrées
    //??autorisation: boolean = true;

    constructor() {
        this.testConnectivite();
    }
    // Test de connectivité pour adaper une stratégie de traitement des données
    testConnectivite() {
        // result is ConnectionType enumeration (none, wifi or mobile)
        const myConnectionType = getConnectionType();

        switch (myConnectionType) {
            case connectionType.none:
            case connectionType.ethernet:
                // No internet connexion
                console.log("No connection");
                this.lancerSurveillanceReseau();
                break;
            case connectionType.wifi:
            case connectionType.mobile:
                // Internet connexion
                console.log("Connected");
                stopMonitoring();
                this.connexion = true;
            default:
                break;
        }

    }

    // Lancer la surveillance du réseau
    lancerSurveillanceReseau() {
        startMonitoring((myConnectionType) => {
            switch (myConnectionType) {
                case connectionType.none:
                    console.log("Plus de connexion");
                    break;
                case connectionType.wifi:
                case connectionType.mobile:
                case connectionType.ethernet:
                    this.connexion = true;
                    // Connexion retrouvée
                    stopMonitoring();
                // case connectionType.bluetooth:
                //     // feature coming in NativeScript 5.0.0
                //     console.log("Connection type changed to bluetooth.");
                //     break;
                default:
                    break;
            }
        });
    }
}