export interface Patient {
    etatCivil: Array<EtatCivil>;
    notifications: Array<Notifications>;
    historiqueRendezVous: Array<HistoriqueRendezVous>;
    paiements: Array<Paiements>;
    echeances: Array<Echeances>;
    photos: Array<Photos>;
}

    export interface EtatCivil {
        loginPatient: string;
        nom: string;
        prenom: string;
        telephones: Array<Telephones>;
        dateNaissances: number;
        email: string;
        responsable: boolean;
    }
        export interface Telephones {
            telephone: number;
        }

    export interface Notifications {
        loginPatient: string;
        nomPraticien: string;
        prenomPraticien: string;
        date: number;
        typeActe: string;
        message: string;
        niveauUrgence: number;
    }

    export interface HistoriqueRendezVous {
        loginPatient: string;
        nomPraticien: string;
        prenomPraticien: string;
        date: number;
        typeActe: string;
        message: string;
    }

    export interface Paiements {
        loginPatient: string;
        date: number;
        montant: number;
    }

    export interface Echeances {
        loginPatient: string;
        date: number;
        solde: number;
    }

    export interface Photos {
        lien: string;
        description: string;
    }