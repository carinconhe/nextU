import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public fotos: any;
  public base64Image: string;

  constructor(public navCtrl: NavController, private camera: Camera) {

  }

  ngOnInit() {
    this.fotos = [];
  }

  capturarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.fotos.push(this.base64Image);
      this.fotos.reverse();
    }, (err) => {
      console.log('Error',err);
    });
  }

  eliminarFoto(index){
    if (index > -1) {
        this.fotos.splice(index, 1);
    }
  }

}
