import { Component, ViewContainerRef, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalViewComponent } from "../modal-view/modal-view.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Globals } from "../services/globals";

import { ConnectiviteService } from "../services/connectivite.service";
import { PatientService } from "../services/patient.service";
import { Settings } from "../services/settings";
@Component({
    selector: "Search",
    moduleId: module.id,
    providers: [ModalDialogService],
    templateUrl: "./search.component.html",
    styleUrls: ["./search-common.css"]
})
export class SearchComponent implements OnInit {
    nomPatient;
    cabinet: any;

    // Partie dynamique
   photoCabinet;
   nomCabinet;
   chargement: boolean;
   patient;
   photosPatient;
   photosUrl;
   photoProfil;

    public isVisible: boolean = false;
    public isVisible2: boolean = false;
    public isVisible1 : boolean = false;
    //public LienImage: string; 
    public LienImage: Array<string> = []; 
    public LienImageRef: string ; 

    constructor(private modalService: ModalDialogService, private vcRef: ViewContainerRef,private http: HttpClient,
        private connectiviteService:ConnectiviteService,
                private patientService:PatientService) {
        // Use the component constructor to inject providers.
        /* Contenu dynamique */
    this.chargement = Globals.chargement;
    this.cabinet = Globals.cabinet[0];
    this.photoCabinet = this.cabinet.photo_cabinet;
    this.nomCabinet = this.cabinet.nom_cabinet;
    this.patient = Globals.patient.result[0][0];
    this.photoProfil = `${Settings.urlImages}${this.patient.photos.identity}`;
    this.photoProfil = `encodeURI(${Settings.urlImages}${this.patient.photos.identity})`
    }
        getStartDate() {
                this.createModelView().then(result => {
                    if (this.validate(result)) {
                    }
                }).catch(error => this.handleError(error));
            }
    ngOnInit(): void {
        this.chargement = false;
        // Init your component properties here.
        this.LienImage[0] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent1.jpg"; 
        this.LienImage[1] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent2.jpg"; 
        this.LienImage[2] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent4.png";
        this.LienImage[3] = "http://www.fabriquenumerique.fr/OrthalisDemo/img/dent4.png";
    }

    onTap() {
        if (this.isVisible) {
            this.isVisible = false;
        } else  {
            this.isVisible = true;
        }
    }
      onTap2() {   
        if (this.isVisible2) {
            this.isVisible2 = false;
        } else  {
            this.isVisible2 = true;
        }
    }
    imagezoom(): void {
       
    }
    test1() {
        if (this.isVisible1) {
            this.isVisible1 = false;
        } else  {
            this.isVisible1 = true;
        }
    }
    test2() {
        if (this.isVisible2) {
            this.isVisible2 = false;
        } else  {
            this.isVisible2 = true;
        }
    }
    private createModelView(): Promise<any> {
        const today = new Date();
        const LImage = this.LienImageRef ;
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: LImage ,//today.toDateString(),
            fullscreen: false,
            
        };

        return this.modalService.showModal(ModalViewComponent, options);
    }
    // << returning-result
    private validate(result: any) {
        return !!result;
    }

    private handleError(error: any) {
        alert("Please try again!");
        console.dir(error);
    }
    zoom(Img, nom) {
        this.LienImageRef = nom ;
        this.getStartDate();
        console.log(Img, nom);
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
