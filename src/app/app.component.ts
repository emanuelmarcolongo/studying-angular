import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studying-angular';
  name = '';
  recievedName = false;

  onRecieveName(name: string) {
    console.log("O app recebeu o nome: ", name);
    this.name = name;
    this.recievedName = true;
    console.log(this.recievedName);
  }
}
