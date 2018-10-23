export interface Cabinet {
    description: string;
    logoCab: string;
    image: Array<Image>;
    adresse: string;
    tel: number;
    mail: string;
    horaires: string;
    praticien: Array<Praticiens>;
}

export interface Image {
    lien: string;
}

export interface Praticiens {
    praticienNom: string;
    praticienDesc: string;
    praticienPhoto: string;
}