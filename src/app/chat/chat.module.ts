import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChatComponent } from './chat.component';
import { TimeAgoPipe } from '../time-ago.pipe';

@NgModule({
  imports: [
    ChatRoutingModule,
    NativeScriptCommonModule   
  ],
  declarations: [ChatComponent,TimeAgoPipe],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChatModule { }
