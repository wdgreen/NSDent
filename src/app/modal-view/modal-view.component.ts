import { Component, OnInit } from '@angular/core';
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'ns-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css'],
  moduleId: module.id,
})
export class ModalViewComponent implements OnInit {
  public LienImg: string;
  
   constructor(private params: ModalDialogParams, private http: HttpClient) {
       this.LienImg = params.context;
       console.log(this.LienImg , params.context );
   }
  
  ngOnInit() {
  }
  public submit() {
       this.params.closeCallback(this.LienImg);
   }  
}
