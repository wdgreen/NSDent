export interface Patient {
    patient: Array<Patient>;
    notifications: Array<RendezVous>;
    historiqueRendezVous: Array<HistoriqueRendezVous>;
    paiements: Array<Paiements>;
    echeances: Array<Echeances>;
    photos: Array<Photos>;
}
    export interface Patient {
        codePatient: string;
        nom: string;
        prenom: string;
        telephones: Array<Telephones>;
        dateNaissances: number;
        email: string;
        relations: Array<Relations>;
    }
        export interface Telephones {
            telephone: number;
        }
        export interface Relations {
            codePatient: string;
        }
    export interface RendezVous {
        codePatient: string;
        nomPraticien: string;
        prenomPraticien: string;
        titre: string;
        date: number;
        typeActe: string;
        message: string;
        niveauUrgence: number;
    }
    export interface HistoriqueRendezVous {
        codePatient: string;
        nomPraticien: string;
        prenomPraticien: string;
        titre: string;
        date: number;
        typeActe: string;
        message: string;
    }
    export interface Paiements {
        codePatient: string;
        date: number;
        montant: number;
    }
    export interface Echeances {
        codePatient: string;
        date: number;
        solde: number;
    }
    export interface Photos {
        lien: string;
        description: string;
    }