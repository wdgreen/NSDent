import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ConnectiviteService } from "./connectivite.service";
import { Folder, File, knownFolders } from "tns-core-modules/file-system/file-system";
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
                console.log("Contenu local récupéré de " + lFichier);
                Globals.cabinet = JSON.parse(res);
            })
            .catch(err => {
                console.log("Pas de contenu local pour " + lFichier);
                return;
            });
    }

    // Used for remove infos in Globals (SessionGuard)
    deglobaliseInfos() {
        delete Globals.cabinet;
    }

    // Used for write datas in local file (LoginComponent)
    ecritInfos(eDossier, eFichier, eContenu) {
        this.dossier = this.documents.getFolder(eDossier);
        this.fichier = this.dossier.getFile(eFichier + ".json");

        this.fichier.writeText(JSON.stringify(eContenu))
            .then(result => {
                this.fichier.readText()
                    .then(res => {
                        console.log("Contenu local de " + eFichier + " mis à jour");
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



        // // If user connected -> get informations from server and write them on local file
        // if (this.connectiviteService.testeConnectivite() ) {
        //     this.http.get<Patient>("http://www.fabriquenumerique.fr/OrthalisDemo/NativeScript/patient.json").subscribe(
        //         data => {
        //             this.patient = data;
        //             this.fichier.writeText(JSON.stringify(data))
        //                 .then(result => {
        //                     this.fichier.readText()
        //                         .then(res => {
        //                             console.log("Contenu local mis à jour");
        //                             console.log("Ecriture réussie du fichier " + this.fichier.path);
        //                             console.log("contenu écrit : " + res);
        //                         })
        //                         .catch(err => {
        //                             console.log(err.stack);
        //                         });
        //                 })
        //                 .catch(err => {
        //                     console.log(err);
        //                 });
        //         },
        //         err => {
        //             console.log("Service patient : " + err);
        //         }
        //     );
        // }
        // else if (!this.connectiviteService.testeConnectivite() && this.recupLocal) {
        //     console.log("Contenu local récupéré, surveillance connectivité ...");
        //     this.connectiviteService.surveilleReseau();
        // }
        // else {
        //     alert("Veuillez vous connecter à internet pour récupérer vos informations, surveillance connectivité ...");
        //     this.connectiviteService.surveilleReseau();
        // }

