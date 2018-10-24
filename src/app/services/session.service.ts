import { Injectable } from "@angular/core";

import { Folder, File, knownFolders } from "tns-core-modules/file-system/file-system";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class SessionService {

    documents: Folder;
    dossier: Folder;
    fPatient: File;
    fCabinet: File;

    constructor(private routerExtensions:RouterExtensions) {
        this.documents = knownFolders.documents();
        this.dossier = this.documents.getFolder("Orthalis");
        this.fPatient = this.dossier.getFile("patient.json");
        this.fCabinet = this.dossier.getFile("cabinet.json");
    }

    testeSession() {
        if(this.dossier.contains("patient.json")) {
            return true;
        } else {
            return false;
        }
    }

    deconnecteSession() {
        this.dossier.remove()
            .then((res) => {
                console.log("Contenu local supprimé");
                this.routerExtensions.navigate(["login"], {
                    transition: {
                        name: "fade"
                    }
                });
            })
            .catch((err) => {
                console.log(err.stack);
        });
    }
}