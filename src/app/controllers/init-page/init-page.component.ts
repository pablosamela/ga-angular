import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-init-page',
  templateUrl: './init-page.component.html'
})
export class InitPageComponent {

  constructor(private dialog:MatDialog) { }

  openModal(): void{
    this.dialog.open(ModalComponent,{
      width: '800px',
      panelClass: 'modal-dialog-container',
    })
  }

}
