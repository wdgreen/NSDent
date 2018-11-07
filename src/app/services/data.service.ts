import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Folder, File, knownFolders } from "tns-core-modules/file-system/file-system";

import { ConnectiviteService } from "./connectivite.service";
import { Globals } from "~/app/services/globals";

@Injectable()
export class DataService {

    documents: Folder;
    dossier: Folder;
    fichier: File;

    constructor(private http: HttpClient, 
                private connectiviteService: ConnectiviteService) { 
        this.documents = knownFolders.documents();
    }

    // Used for skip Login page (SessionGuard)
    testeInfos(tDossier, tFichier) {
        this.dossier = this.documents.getFolder(tDossier);
        if(this.dossier.contains(tFichier + ".json")) {
            return true;
        } else {
            return false;
        }
    }

    // Used for store infos in Globals (SessionGuard)
    globaliseInfos(lDossier, lFichier) {
        this.dossier = this.documents.getFolder(lDossier);
        this.fichier = this.dossier.getFile(lFichier + ".json");

        this.fichier.readText()
            .then(res => {
                console.log("GlobaliseInfos de " + lFichier + ".json");
                // Uggly ...
                if(lFichier == "cabinet") { Globals.cabinet = JSON.parse(res); }
                if(lFichier == "patient") { Globals.patient = JSON.parse(res); }
            })
            .catch(err => {
                console.log("Pas de contenu local pour " + lFichier  + ".json");
                return;
            });
    }

    // Used for remove infos in Globals (SessionGuard)
    deglobaliseInfos() {
        delete Globals.cabinet;
        delete Globals.patient;
    }

    // Used for write datas in local file (LoginComponent)
    ecritInfos(eDossier, eFichier, eContenu) {
        this.dossier = this.documents.getFolder(eDossier);
        this.fichier = this.dossier.getFile(eFichier + ".json");

        this.fichier.writeText(JSON.stringify(eContenu))
            .then(result => {
                this.fichier.readText()
                    .then(res => {
                        console.log("EcritInfos de " + eFichier);
                        console.log(eFichier + " = " + res);
                    })
                    .catch(err => {
                        console.log(err.stack);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };

    // Used for delete local file (SettingsComponent)
    supprimeInfos(sDossier) {
        this.dossier = this.documents.getFolder(sDossier);
        
        this.dossier.remove();
    }

// End DataService
}