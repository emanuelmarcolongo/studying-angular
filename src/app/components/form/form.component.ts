import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Output() nameData = new EventEmitter<string>();
  name = 'Emanuel';

  sendName(name: string) {
    this.nameData.emit(name)
  }
}
