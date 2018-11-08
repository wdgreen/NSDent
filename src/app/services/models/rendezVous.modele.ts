export interface PatientRdv {
  name: string;
  pictureUrl: string;
}

export interface CabinetRdv {
  nameCabinet: string;
  namePraticien: string;
}

export interface Message {
  sender: CabinetRdv;
  receiver: PatientRdv;
  content: string;
  date: Date;
}

export interface Participants {
  me: PatientRdv;
  other: PatientRdv;
}

export interface RendezVous {
  participants: Participants;
  messages: Array<Message>;
}