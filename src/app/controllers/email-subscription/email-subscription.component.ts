import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailSubscriptionService } from 'src/app/services/email-subscription.service';
import { Observable } from 'rxjs';
import { SubscriptionResponse } from 'src/app/models/subscription-response';

@Component({
  selector: 'app-email-subscription',
  templateUrl: './email-subscription.component.html'
})
export class EmailSubscriptionComponent implements OnInit {
  newsletterFrom: FormGroup;
  newsletterResponse: SubscriptionResponse;

  constructor(private emailSubscriptionService: EmailSubscriptionService) { }

  ngOnInit(): void {
    this.newsletterFrom = new FormGroup({
      emailControl: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  subscribeToNewsletter() {
    if (this.newsletterFrom.valid) {
      this.emailSubscriptionService.sendEmailSubscription(this.newsletterFrom.get('emailControl').value).subscribe({
        next: (data: SubscriptionResponse) => this.newsletterResponse = data,
        error: error => this.newsletterResponse = error.error
      });
    }
  }

}
