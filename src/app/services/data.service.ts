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
    ecritFichier(nomDossier: string, nomFichier: string, contenu) {
        this.dossier = this.documents.getFolder(nomDossier || "testFolder");
        this.fichier = this.dossier.getFile((nomFichier || "testFile") + ".json");
        // Lecture du fichier pour comparer les contenus
        this.fichier.readText()
            .then((res) => {
                console.log("contenu déjà présent"+res);
                // Comparaison du fichier à réécrire avec le contenu à écrire
                if (res != contenu.toString()) {
                    this.fichier.writeText(contenu.toString() || "some random content")
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
    litFichier(nomDossier, nomFichier){
        this.dossier = this.documents.getFolder(nomDossier || "Orthalis");
        this.fichier = this.dossier.getFile((nomFichier || "patient") + ".json");
        // Lecture du fichier pour comparer les contenus
        this.fichier.readText()
            .then((res) => {
                console.log("DataService readText lit cela :"+res);
                return res;
                
            }).catch((err) => {
                console.log(err.stack);
                return "Erreur de chargement";
            });
    }
}
