import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ChatService, User, Message } from '../services/chat.service';
import { ListView } from 'ui/list-view';
import { TextView } from 'ui/text-view';


@Component({
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat-common.css'],
  moduleId: module.id,
  providers: [ChatService],
})
export class ChatComponent implements OnInit {

  public me: User;
  public other: User;
  public messages: Array<Message>;


  @ViewChild('chatBox') chatBoxRef: ElementRef;

  private get chatBox(): ListView {
    return this.chatBoxRef.nativeElement;
  }

  @ViewChild('newMessage') newMessageRef: ElementRef;

    private get newMessage(): TextView {
    return this.newMessageRef.nativeElement;
  }

  constructor(private chatService: ChatService){
    const chat = chatService.getChat();

    this.me = chat.participants.me;
    this.other = chat.participants.other;
    this.messages = chat.messages;
  }
  ngOnInit() {}
  public sendMessage(): void {
    const content = this.newMessage.text;
    if (content == '') {
      return;
    }
    const message = this.initializeMessageWith(content);
    this.messages.push(message);
    this.scrollChatToBottom();
    this.dismissKeyBoard();
  }

  private initializeMessageWith(content: string): Message {
    return {
      content: content,
      sender: this.me,
      date: new Date(),
    };
  }

  public scrollChatToBottom(): void {
    setTimeout(() => {
      this.chatBox.scrollToIndex(this.messages.length - 1);
    }, 0);
  }

  private dismissKeyBoard(): void {
    this.newMessage.text = '';
    this.chatBox.focus();
  }

  public bubbleClass(message: Message): string {
    const sender = this.isMy(message) ? 'me' : 'other';

    return `bubble-from-${sender}`;
  }

  private isMy(message: Message): boolean {
    return message.sender == this.me;
  }
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
}
}
