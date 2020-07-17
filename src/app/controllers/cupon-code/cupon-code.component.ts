import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-cupon-code',
  templateUrl: './cupon-code.component.html'
})
export class CuponCodeComponent implements OnInit {
  cuponCodeFrom: FormGroup;
  isCopied = false;

  constructor(private clipboard: Clipboard) { }

  ngOnInit(): void {
    this.cuponCodeFrom = new FormGroup({
      cuponCodeControl: new FormControl('Columbus2018')
    });

  }

  copyCouponCode() {
    this.clipboard.copy(this.cuponCodeFrom.get('cuponCodeControl').value);
    this.isCopied = true;
  }

}
