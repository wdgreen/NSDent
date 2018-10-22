import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Patient } from './models/patient.modele';
import { ConnectiviteService } from "./connectivite.service";
import { Folder, File, knownFolders } from "tns-core-modules/file-system/file-system";

@Injectable()
export class PatientService {

    patient: Patient;

    documents: Folder;
    dossier: Folder;
    fichier: File;

    constructor(private http: HttpClient, private connectiviteService: ConnectiviteService) {
        this.getPatient();
    }

    getPatient() {
        this.documents = knownFolders.documents();
        this.dossier = this.documents.getFolder("Orthalis");
        this.fichier = this.dossier.getFile("patient.json");

        // User on Internet
        if (this.connectiviteService.connexion) {
            // Get informations from server and write them on local file
            this.http.get<Patient>("http://www.fabriquenumerique.fr/OrthalisDemo/NativeScript/patient.json").subscribe(
                data => {
                    this.patient = data;
                    this.fichier.writeText(JSON.stringify(data))
                        .then(result => {
                            this.fichier.readText()
                                .then(res => {
                                    console.log("Ecriture réussie du fichier " + this.fichier.path);
                                    console.log("contenu écrit : " + res);
                                })
                                .catch(err => {
                                    console.log(err.stack);
                                });
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            );
        // User not connected
        } else {
            // Read a local file
            this.fichier.readText()
                .then((res) => {
                    this.patient = JSON.parse(res);
                });
        }
    };
}