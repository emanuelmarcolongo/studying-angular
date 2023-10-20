import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'studying-angular';

  onRecieveName(name: string) {
    console.log("O app recebeu o nome: ", name);
  }
}
