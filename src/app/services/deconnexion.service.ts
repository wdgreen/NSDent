import { Injectable } from "@angular/core";

import { Folder, File, knownFolders } from "tns-core-modules/file-system/file-system";

@Injectable()
export class DeconnexionService {

    documents: Folder;
    dossier: Folder;
    fichier: File;

    constructor() { }

    deconnecte() {
        this.documents = knownFolders.documents();
        this.dossier = this.documents.getFolder("Orthalis");
        this.fichier = this.dossier.getFile("patient.json");

        // Always read a local file
        this.dossier.remove()
            .then((res) => {
                console.log("Contenu local supprimé");
            })
            // If user not connected and run app for the first time
            .catch((err) => {
                console.log(err.stack);
        });
    }
}