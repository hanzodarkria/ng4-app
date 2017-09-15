import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  isTextboxEmpty = true;

  clearTextbox(){
    this.username = '';
  }

  checkTextbox(){
    if(this.username){
      this.isTextboxEmpty = false;
      return;
    }
    this.isTextboxEmpty = true;
  }

}
