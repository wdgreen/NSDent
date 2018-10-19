import { Injectable } from "@angular/core";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";

@Injectable()
export class DataService {

    public documents: Folder;
    public dossier: Folder;
    public fichier: File;

    public contenu: string;

    public nomDossier;
    public nomFichier;

    constructor() { 
        this.documents = knownFolders.documents();
    }

    // Write a local file
    ecritFichier(nomDossier, nomFichier, contenu) {
        // Files infos
        this.dossier = this.documents.getFolder(nomDossier || "Folder");
        this.fichier = this.dossier.getFile((nomFichier || "File") + ".json");

        this.fichier.writeText(contenu)
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

    // // Read a local file
    // litFichier(nomDossier, nomFichier) {
    //     // Files infos
    //     this.dossier = this.documents.getFolder(nomDossier || "Folder");
    //     this.fichier = this.dossier.getFile((nomFichier || "File") + ".json");

    //     this.fichier.readText()
    //         .then( (res) => {
    //             this.contenu = res;
    //             return res;
    //     });
    // }
}