import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  @Input() competition: string;
  @Input() instagram: string;
  @Input() questions: string;
  @Input() purchase: string;
  @Input() entry: string;

  constructor(private modelctrl: ModalController) {}

  ngOnInit() {}
  _dismiss() {
    this.modelctrl.dismiss();
  }
}
