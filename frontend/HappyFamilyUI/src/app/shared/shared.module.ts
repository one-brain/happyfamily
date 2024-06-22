import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PartnerCardComponent } from './components/partner-card/partner-card.component';
import { PartnerListComponent } from './components/partner-list/partner-list.component';



@NgModule({
  declarations: [
    LogoComponent,
    EventCardComponent,
    EventListComponent,
    PartnerCardComponent,
    PartnerListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    LogoComponent,
    EventCardComponent,
    EventListComponent,
    PartnerCardComponent,
    PartnerListComponent
  ]
})
export class SharedModule { }
