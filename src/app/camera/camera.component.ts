import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

// >> camera-module-init-code
import { ImageAsset } from "tns-core-modules/image-asset";
import { takePicture, requestPermissions, isAvailable } from "nativescript-camera";
// << camera-module-init-code

@Component({
  selector: 'ns-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera-common.css'],
  moduleId: module.id,
})
export class CameraComponent implements OnInit {

  public imageTaken: ImageAsset;
  public saveToGallery: boolean = true;
  public keepAspectRatio: boolean = true;
  public width: number = 300;
  public height: number = 300;
  public isPhtoPrise: boolean = false;
  public isPhtoPrise2: boolean = false;


  onTakePhoto() {
    let options = {
        width: this.width,
        height: this.height,
        keepAspectRatio: this.keepAspectRatio,
        saveToGallery: this.saveToGallery
    };

    takePicture(options)
        .then(imageAsset => {
            this.isPhtoPrise = true;
            this.isPhtoPrise2 = true;
            this.imageTaken = imageAsset;
            console.log("Size: " + imageAsset.options.width + "x" + imageAsset.options.height);
            

        }).catch(err => {
            console.log("erreur photo", err.message);
        });
}

onRequestPermissions() {
    requestPermissions();
}

onCheckForCamera() {
    let isCameraAvailable = isAvailable();
    console.log("Is camera hardware available: " + isCameraAvailable);
}

onRequesEnvoie() {
  //--  code pour l'envoie par HTTP --
}

onDrawerButtonTap(): void {
  const sideDrawer = <RadSideDrawer>app.getRootView();
  sideDrawer.showDrawer();
}

  constructor() { }

  ngOnInit() {
  }

}
