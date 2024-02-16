import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-need-help',
  templateUrl: './need-help.component.html',
  styleUrls: ['./need-help.component.css']
})
export class NeedHelpComponent {

  bsModalRef!: BsModalRef;

  constructor(private modalService: BsModalService) {}

  openModal() {
    this.bsModalRef = this.modalService.show(ModalComponent, {
      initialState: {
        title: 'Sorry For Inconvience',
        content: 'We are looking into it, soon we will back to you',
      },
      backdrop: 'static', // 'static' prevents closing on clicking outside the modal
      keyboard: false,
    });
  }
}
