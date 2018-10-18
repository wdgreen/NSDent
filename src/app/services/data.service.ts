import { Injectable } from "@angular/core";
import { knownFolders, Folder, File } from "tns-core-modules/file-system";

@Injectable()
export class DataService {
    documents: Folder;
    dossier: Folder;
    fichier: File;
    contenu;

    reussite: string;
    contenuEcrit: string;

    constructor() {
        this.documents = knownFolders.documents();
    }
    // Ecrire un fichier
    ecritFichier(nomdossier: string, nomFichier, contenu) {
        this.dossier = this.documents.getFolder(nomdossier || "testFolder");
        this.fichier = this.dossier.getFile((nomFichier || "testfichier") + ".json");
        // Lecture du fichier pour comparer les contenus
        this.fichier.readText()
            .then((res) => {
                // Comparaison du fichier à réécrire avec le contenu à écrire
                if (res != contenu.toString()) {
                    this.fichier.writeText(contenu.toString() || "Un truc manière de...")
                        .then(result => {
                            // Relecture du fichier pour confirmer l'écriture
                            this.fichier.readText()
                                .then(res => {
                                    this.reussite = "Ecriture réussie du fichier " + this.fichier.path;
                                    console.log(this.reussite);
                                    this.contenuEcrit = res;
                                });
                        }).catch(err => {
                            console.log(err);
                        });
                }
            }).catch((err) => {
                console.log(err.stack);
            });

    }
    // Lire un fichier
    litFichier(nomdossier, nomFichier){
        this.dossier = this.documents.getFolder(nomdossier || "testFolder");
        this.fichier = this.dossier.getFile((nomFichier || "testfichier") + ".json");
        // Lecture du fichier pour comparer les contenus
        this.fichier.readText()
            .then((res) => {
                return res;
            }).catch((err) => {
                console.log(err.stack);
                return "Erreur de chargement";
            });
    }
    // Suppression d'un fichier local
    supprimeFichier(nomdossier, nomFichier) {
        let documents = knownFolders.documents();
        this.dossier = documents.getFolder(nomdossier || "testFolder");
        this.fichier = this.dossier.getFile((nomFichier || "testfichier") + ".json");

        this.fichier.remove()
            .then(res => {
                // Success removing the file.
                this.reussite = "Fichier détruit !";
            }).catch(err => {
                console.log(err.stack);
            });
    }
    // Suppression d'un dossiersier local
    supprimedossiersier(nomdossier, nomFichier) {
        let documents = knownFolders.documents();
        this.dossier = documents.getFolder(nomdossier || "testFolder");

        this.dossier.clear()
            .then(res => {
                // Successfully cleared the folder.
                this.reussite = "dossiersier supprimé ...";
            }).catch(err => {
                console.log(err.stack);
            });
    }

}
