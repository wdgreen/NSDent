import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Patient } from './models/patient.modele';
import { DataService } from "./data.service";
import { ConnectiviteService } from "./connectivite.service";
import { Folder, File, knownFolders } from "tns-core-modules/file-system/file-system";

@Injectable()
export class PatientService {

    patient: Patient;

    documents: Folder;
    dossier: Folder;
    fichier: File;
    
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
                    console.log("Contenu envoyé à l'écriture : " + JSON.stringify(data));
                    this.dataService.ecritFichier('Orthalis', 'patient', JSON.stringify(data) );
            });
        } else {
            // Read a local file
            this.documents = knownFolders.documents();
            this.dossier = this.documents.getFolder("Orthalis");
            this.fichier = this.dossier.getFile("patient.json");
            this.fichier.readText()
                .then( (res) => {
                    this.patient = JSON.parse(res);
            });
        }
    };
}
// setTimeout(this.dataService.litFichier('Orthalis', 'patient'), 200);
                //console.log( "Lecture finale du fichier : " + this.dataService.litFichier('Orthalis', 'patient') );
                // this.patient = JSON.parse( this.dataService.litFichier('Orthalis', 'patient') );
                // console.log( "litFichier" + this.dataService.litFichier('Orthalis', 'patient') );