import { Component, OnInit,ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Image } from "tns-core-modules/ui/image";
import * as enums from "tns-core-modules/ui/enums";

import { ModalDialogService } from "nativescript-angular/modal-dialog";

import { ObservableArray } from "tns-core-modules/data/observable-array";
import { DataItem } from "../dataItem";
import { DataItemService } from "../dataItem.service";

import { AbsoluteLayout } from "tns-core-modules/ui/layouts/absolute-layout/absolute-layout";
import { EventData } from "data/observable";
import { Page } from "ui/page";
import { GridLayout  } from "ui/layouts/grid-layout";
    
import { View } from "ui/core/view";
import { Animation } from "ui/animation";

import { Globals } from "../services/globals";



@Component({
    selector: "Browse",
    moduleId: module.id,
    providers: [DataItemService],
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse-common.css"]
})
export class BrowseComponent implements OnInit {
     // Partie dynamique
    photoCabinet;
    nomCabinet;
    chargement: boolean;
    cabinet: any;
    

    public view: View;    
    public isAfficher: boolean = true;
    private _dataItems: ObservableArray<DataItem>;
    private _selectedItems: string;    
    public animationSet: Animation;
    public CAMediaTimingFunction:any;
    public startDate: Date;
    public endDate: Date;
    public selectedDate: Date;
    public days: number;


        public isVisible1 : boolean = false;
        public isVisible2 : boolean = false;
        public isVisible3 : boolean = false;
        public isVisible4 : boolean = false;
        public isUn : boolean = true;
        public isDeux : boolean = false;
        public isTrois : boolean = false;
        public ImgSlider: string;


        animateSlider(image: Image) {
            image.animate({
                opacity: 0,
               // backgroundColor: new Color("Blue"),
                translate: { x: 0, y: 0 },
                scale: { x: 1, y: 1 },
                rotate: 0,
                duration: 5000,
                delay: 50,
                iterations: 1,
                curve: enums.AnimationCurve.easeInOut
            }).then(() => {
                console.log("Animation finished.");
                this.isUn  = false;
                this.isDeux  = true;
            }).catch((e) => {
                console.log(e.message);
                
            });
        }


        animate(image: Image) {
            image.animate({
                opacity: 0,
               // backgroundColor: new Color("Blue"),
                translate: { x: 0, y: 0 },
                scale: { x: 1, y: 1 },
                rotate: 0,
                duration: 5000,
                delay: 50,
                iterations: 1,
                curve: enums.AnimationCurve.easeInOut
            }).then(() => {
                console.log("Animation finished.");
                this.isUn  = false;
         this.isDeux  = true;
            }).catch((e) => {
                console.log(e.message);
                
            });
        }
        animate2(image: Image) {
                image.animate({
                    opacity: 0,
                    duration: 5000,
                    iterations: 1,
                    curve: enums.AnimationCurve.easeInOut
                }).then(() => {
                    console.log("Animation finished.");
                    this.isDeux = false;
                    this.isTrois = true;
                }).catch((e) => {
                    console.log(e.message);
                });
        }
//        animate3(image: Image) {
    animate3(AbLy: AbsoluteLayout) {
        AbLy.animate({
                opacity: 0,
                duration: 5000,
                iterations: 1,
                curve: enums.AnimationCurve.easeInOut
            }).then(() => {
                console.log("Animation finished 1.");
                this.ImgSlider = "res://cabinet3"
                AbLy.animate({
                    opacity: 1,
                    duration: 3000,
                    iterations: 1,
                    curve: enums.AnimationCurve.easeInOut
                    }).then(() => {
                            console.log("Animation finished2.");
                            AbLy.animate({
                                opacity: 0,
                                duration: 3000,
                                iterations: 1,
                                curve: enums.AnimationCurve.easeInOut
                                }).then(() => {
                                    this.ImgSlider = "res://cabinet1"
                                        console.log("Animation finished 3s.");
                                        AbLy.animate({
                                            opacity: 1,
                                            duration: 5000,
                                            iterations: 1,
                                            curve: enums.AnimationCurve.easeInOut
                                        }).then(() => {
                                            console.log("Animation finished 3s.");
                                            AbLy.animate({
                                                opacity: 0,
                                                duration: 3000,
                                                iterations: 1,
                                                curve: enums.AnimationCurve.easeInOut
                                            })
                                            this.ImgSlider = "res://cabinet"
                                            AbLy.animate({
                                                opacity: 1,
                                                duration: 3000,
                                                iterations: 1,
                                                curve: enums.AnimationCurve.easeInOut
                                            })
                                            
                                           
                                        })
                })
            })
            }).catch((e) => {
                console.log(e.message);
            });
        }
       
    constructor(private _dataItemService: DataItemService,private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        // Use the component constructor to inject providers.
        /* Contenu dynamique */
    this.chargement = Globals.chargement;
    this.cabinet = Globals.cabinet[0];
    this.photoCabinet = this.cabinet.photo_cabinet;
    this.nomCabinet = this.cabinet.nom_cabinet;

    }

    ngOnInit(): void {
        // Init your component properties here.
        this._dataItems = new ObservableArray(this._dataItemService.getVariableWidthItems());
        this._selectedItems = "No Selected items.";
        this.ImgSlider = "res://cabinet";
    }

    test1() : void {
       
    }
    test2() : void {
        alert("ok1");
    }    
    test3() : void {
        alert("ok1");
    }
    test4() {
        if (this.isVisible4) {
            this.isVisible4 = false;
        } else  {
            this.isVisible4 = true;
        }
    }

    infoDoc(StLy: GridLayout ): void {
        this.onAnimate(StLy); //rends invisible toto
        //this.animate0;

    }
    infoDoc2(StLy: GridLayout ): void {
        this.onAnimate2(StLy); //rends visible toto
        //this.animate0;
    }

    FadeSlider(AbLy: AbsoluteLayout) {
        this.animate3(AbLy); 
        //this.animate0;
    }
    get selectedItems(): string {
        return this._selectedItems;
    }
    get dataItems(): ObservableArray<DataItem> {
        return this._dataItems;
    }
   
    Loaded(args: EventData) {
        const page = <Page>args.object;
        this.view = page.getViewById<View>("view");
        console.log('ok');
    }
    
    onAnimate(view : View) {
        view.animate({ opacity: 1 })
            .then(() => view.animate({ opacity: 0 }))
            //.then(() => view.animate({ translate: { x: 0, y: -230 } }))
            //.then(() => StLy.animate({ translate: { x: 0, y: 0 } }))
            //.then(() => view.animate({ scale: { x: 3, y: 3 } }))
            //.then(() => StLy.animate({ scale: { x: 1, y: 1 } }))
            //.then(() => StLy.animate({ rotate: 180 } ))
            //.then(() => StLy.animate({ rotate: 0 } ))
            .then(() => {
            console.log("Animation finished 1");
          })
            .catch((e) => {
            console.log(e.message);
          });
          

    }

    onAnimate2(view : View) {
        view.animate({ opacity: 1 })
            .then(() => view.animate({ opacity: 1 }))
            .then(() => {
            console.log("Animation finished 2");
          })
            .catch((e) => {
            console.log(e.message);
          });
          

    }

   onAnimate3(AbLy : AbsoluteLayout)  {
        this.animationSet = new Animation([{
            target: AbLy,
            opacity: 0,
            duration: 5000,
            iterations: Number.POSITIVE_INFINITY,
            //curve: view.ios ? CAMediaTimingFunction.functionWithName("kCAMediaTimingFunctionLinear") : new android.view.animation.LinearInterpolator
        }]);
        this.animationSet.play().catch((e) => {
            console.log("Animation stoppped!");
        });
        // Call animationSet.cancel() to stop it;
    }
    zoom(view : Image) :void {
        view.animate({ opacity: 0 })
            .then(() => view.animate({ scale: { x: 2, y: 2 }}))
            .then(() => view.animate({ translate: { x: 100, y: -100 }}))
            .then(() => view.animate({ opacity: 1 }))
            .then(() => {
            console.log("Animation finished 2");
          })
            .catch((e) => {
            console.log(e.message);
          });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    
    

}
