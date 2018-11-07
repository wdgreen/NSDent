import { Cabinet } from "~/app/services/models/cabinet.modele";
import { Patient } from "~/app/services/models/patient.modele";
import { Appareil } from "~/app/services/models/appareil.modele";

export namespace Globals {
    export var cabinet;
    export var patient;
    export var chargement: boolean = false;

    export var appareil: Appareil = {
        "pushToken": "",
        "os": ""
    }
}

// Pour récupérer les infos du cabinet ajoutez ceci au constructor(){ *ici* } au component.ts de votre page :

// this.cabinet = Globals.cabinet[0];

// Dans votre Html les informations sont accessibles en faisant [text]="cabinet.cequejeveuxrécupérer"

// Le format du json reçu de l'API est dans test/patientRecu.json
// Pour récupérer les infos du patient ajoutez ceci au constructor(){ *ici* } au component.ts de votre page. (oui c'est bien double tableau [0]...) :

// this.patient = Globals.patient.result[0][0];

// Dans votre Html les informations sont accessibles en faisant [text]="patient.nomdutableau.cequejeveuxrécupérer"
// Exemple du codePatient : patient.patient.codePatient car JSON = {"result":[[{"patient":{"codePatient":26352}]]
// Voir page 'featured' pour exemple complet