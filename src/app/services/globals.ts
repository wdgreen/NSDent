import { Cabinet } from "~/app/services/models/cabinet.modele";
import { Patient } from "~/app/services/models/patient.modele";
import { Appareil } from "~/app/services/models/appareil.modele";

export namespace Globals {
    export var cabinet: Cabinet;
    export var patient: Patient;
    export var chargement: boolean = false;

    export var appareil: Appareil = {
        "pushToken": "",
        "os": ""
    }
}