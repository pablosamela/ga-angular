import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './controllers/modal/modal.component';
import { InitPageComponent } from './controllers/init-page/init-page.component';
import { CuponCodeComponent } from './controllers/cupon-code/cupon-code.component';
import { EmailSubscriptionComponent } from './controllers/email-subscription/email-subscription.component';
import { EmailSubscriptionService } from './services/email-subscription.service';



@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    InitPageComponent,
    CuponCodeComponent,
    EmailSubscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ClipboardModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EmailSubscriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
