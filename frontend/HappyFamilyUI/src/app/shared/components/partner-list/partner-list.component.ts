import { Component } from '@angular/core';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent {
  partnerList = ['obi', 'obi2', 'obi3', 'obi4', 'obi5'];
}
