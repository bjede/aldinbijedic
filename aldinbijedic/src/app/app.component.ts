import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = ['img17.jpg', 'img18.jpg', 'img19.jpg'];
  currentImage = 0;
  showImage = true;

  ngOnInit(): void {
      this.updateImage();
  }

  updateImage(){
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 100);
    }, 7000);
  }
}
