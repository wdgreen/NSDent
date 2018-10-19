import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Patient } from './models/patient.modele';
import { DataService } from "./data.service";
import { ConnectiviteService } from "./connectivite.service";

@Injectable()
export class PatientService {

    patient: Patient;

    constructor(private http: HttpClient, 
                private connectiviteService: ConnectiviteService,
                private dataService: DataService) {
        this.getPatient('http://www.fabriquenumerique.fr/OrthalisDemo/NativeScript/patient.json'); // Appel d'un fichier JSON externe
    }
    // Test de connectivité et appel des données du serveur
    getPatient(url: string) {
        if (this.connectiviteService.connexion) {
            this.http.get<Patient>(url).subscribe(
                data => {
                    this.patient = data;
                    console.log("Contenu reçu du httpGet :" + data);
                    console.log("Contenu envoyé à l'écriture :" + JSON.stringify(data));
                    this.dataService.ecritFichier('Orthalis', 'patient', JSON.stringify(data) );
                    console.log("ecritFichier : " + this.dataService.ecritFichier( 'Orthalis', 'patient', JSON.stringify(data) ) );
            });
        } else {
                console.log( this.dataService.litFichier('Orthalis', 'patient') );
                // this.patient = JSON.parse( this.dataService.litFichier('Orthalis', 'patient') );
                // console.log( "litFichier" + this.dataService.litFichier('Orthalis', 'patient') );
        }
    }
}
