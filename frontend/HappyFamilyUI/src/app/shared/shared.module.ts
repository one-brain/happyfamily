import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PartnerCardComponent } from './components/partner-card/partner-card.component';
import { PartnerListComponent } from './components/partner-list/partner-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    LogoComponent,
    EventCardComponent,
    EventListComponent,
    PartnerCardComponent,
    PartnerListComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  exports: [
    LogoComponent,
    EventCardComponent,
    EventListComponent,
    PartnerCardComponent,
    PartnerListComponent,
    FooterComponent
  ]
})
export class SharedModule { }
