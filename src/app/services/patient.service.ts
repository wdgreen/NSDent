import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Patient } from './models/patient.modele';
import { DataService } from "./data.service";
import { ConnectiviteService } from "./connectivite.service";

@Injectable()
export class PatientService {

    patient: Patient

    constructor(private http: HttpClient, 
                private connectivite: ConnectiviteService,
                private dataService: DataService) {
        this.getPatient('http://www.fabriquenumerique.fr/OrthalisDemo/NativeScript/patient.json'); // Appel d'un fichier JSON externe
    }
    // Test de connectivité et appel des données du serveur
    getPatient(url: string) {
        if (this.connectivite.connexion) {
            this.http.get<Patient>(url).subscribe(
                data => {
                    this.patient = data;
                    this.dataService.ecritFichier('Orthalis', 'patient', data );
            });
            let tmp = this.dataService.litFichier('Orthalis', 'patient');
            alert(tmp);
        } else {
            let tmp:any = this.dataService.litFichier('Orthalis', 'patient');
            console.log("litFichier :"+ tmp);
        }
    }
}
