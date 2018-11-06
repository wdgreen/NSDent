import { Injectable } from '@angular/core';
//import { faker } from '../../node_modules/Faker';
//const faker = require('faker');

@Injectable()
export class ChatService {
  getChat(): Chat {
    const me = {
      name: 'Me',
      pictureUrl: "res://utilisateur",//'https://unsplash.it/100/100?image=837',
      coverUrl: ''
    };
    const other = {
      name: "Doctor Eleisbaeth Anns",//faker.name.findName(),
      pictureUrl: "res://lamai", //'https://unsplash.it/100/100?image=823',
      coverUrl: "res://cabinet",//'https://unsplash.it/500/500?image=857',
    };


    const messages = [];
    for (let i = 0; i < 10; i++) {
      const sender = Math.random() >= 0.5 ? me : other; //faker.random.boolean() ? me : other;
      //const sender =other ; //faker.random.boolean() ? me : other;
      const content = "je suis là et oui"; //faker.lorem.sentence();
      const date = "2018-10-10" ;//";//faker.date.recent();
        messages.push({
        sender: sender,
        content: content,
        date: date
      
      });
    }

    const chat = {
      participants: {
        me: me,
        other: other
      },
      messages: messages.sort((a, b) => {
        return a.date - b.date;
      })
    };

    return chat;
  }
}

export interface User {
  name: string;
  pictureUrl: string;
  coverUrl: string;
}

export interface Message {
  sender: User;
  content: string;
  date: Date;
}

export interface Participants {
  me: User;
  other: User;
}

export interface Chat {
  participants: Participants;
  messages: Array<Message>;
}
