import { Component, Sanitizer } from '@angular/core';
import { MotogpModel } from './motogp.model'
import 'rxjs';
import { DomSanitizer } from "@angular/platform-browser";
import { MotoGPService } from './motogp.service';


@Component({
  selector: 'MotogpComponent',
  styleUrls: ['../styles.css'],
  templateUrl: './motogp.html',
  providers: [MotoGPService]
})

export class MotogpComponent {
  constructor(private service: MotoGPService, private sanitizer: DomSanitizer) {

  }

  selectedImage: File = null;

  model = new MotogpModel();

  onselection(event) {
    this.selectedImage = event.target.files[0];
    console.log(this.selectedImage);
  }

  motogp() {
    let name = this.model.ridernum;
    console.log("rider number is" + name)
    // this.getimage(name);
    this.service.getrider(name).subscribe((data) => {
      if (data != undefined && data != '') {
        this.model = new MotogpModel();
        this.model.modelList = new Array<String>();
        this.model.modelList.push(data);
        for (let i = 0; i < this.model.modelList[0].length; i++) {
          this.model.age = data[i]['age'];
          this.model.bike = data[i]['bike'];
          this.model.country = data[i]['country'];
          this.model.name = data[i]['name'];
          this.model.number = data[i]['number'];
          this.model.salary = data[i]['salary'];
          this.model.team = data[i]['team'];
          this.model.weight = data[i]['weight'];
          if (data[i]['class'] == 1) {
            this.model.class = "MotoGP"
          } else if (data[i]['class'] == 2) {
            this.model.class = "Moto2"
          } else if (data[i]['class'] == 3) {
            this.model.class = "Moto3"
          }
          // if (data[i]['image'] != null){
          //   new Blob([data[i]['image']], { type: 'image/png;base64' });
          //       var fileURL = URL.createObjectURL(data);
          //   this.model.image = "data:image/png;base64," + fileURL;
          // }
        }
      } else {
        alert("No rider found :(")
      }
    });
  }
  getimage() {
    this.service.getimage(this.model.ridernum).subscribe(data => {
      if (data != null) {
        this.model.image = "data:image/png;base64," + data;
        // new Blob([data[0]], { type: 'image/png;base64' });
        // var fileURL = URL.createObjectURL(data);
        // this.model.image = "data:image/png;base64," + fileURL;
        // let objectURL = 'data:image/png;base64,' + data;
        // this.model.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
      }
    })
  }

  save() {
    let fd = new FormData();
    fd.append("image", this.selectedImage, this.selectedImage.name)
    console.log(fd);
    // this.model.image = this.selectedImage;
    // let payload = this.model;
    // console.log(payload);p
    this.service.saverider(fd).subscribe((data) => {     
      console.log(data)
    })
  }

}