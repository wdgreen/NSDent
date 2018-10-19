import { Injectable } from "@angular/core";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";

@Injectable()
export class DataService {

    public documents: Folder;
    public dossier: Folder;
    public fichier: File;
    public contenu;

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

    // Read a local file
    litFichier(nomDossier, nomFichier) {
        // Files infos
        this.dossier = this.documents.getFolder(nomDossier || "Folder");
        this.fichier = this.dossier.getFile((nomFichier || "File") + ".json");

        this.fichier.readText()
            .then((res) => {
                this.contenu = res;
                console.log("La lecture lit :" + this.contenu);
            }).catch((err) => {
                console.log(err.stack);
                return err;
            });
    }

}





    //     // Lecture du fichier pour comparer les contenus
    //     this.fichier.readText()
    //         .then((res) => {
    //             console.log("contenu déjà présent"+res);
    //             // Comparaison du fichier à réécrire avec le contenu à écrire
    //             if (res != contenu.toString()) {
    //                 this.fichier.writeText(contenu.toString() || "some random content")
    //                     .then(result => {
    //                         // Relecture du fichier pour confirmer l'écriture
    //                         this.fichier.readText()
    //                             .then(res => {
    //                                 console.log("Ecriture réussie du fichier " + this.fichier.path);
    //                                 console.log("Contenu écrit : " + res);
    //                             });
    //                     }).catch(err => {
    //                         console.log(err);
    //                     });
    //             }
    //         }).catch((err) => {
    //             console.log(err.stack);
    //         });
    // }
    // // Lire un fichier
    // litFichier(nomDossier, nomFichier){
    //     this.dossier = this.documents.getFolder(nomDossier || "Orthalis");
    //     this.fichier = this.dossier.getFile((nomFichier || "patient") + ".json");
    //     // Lecture du fichier pour comparer les contenus
    //     this.fichier.readText()
    //         .then((res) => {
    //             console.log("DataService readText lit cela :"+res);
    //             return res;
                
    //         }).catch((err) => {
    //             console.log(err.stack);
    //             return "Erreur de chargement";
    //         });
    // }

