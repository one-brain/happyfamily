import { Component } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent {
  eventsList = [
    { id: 'event1', title: 'Event 1', description: '' }, 
    { id: 'event2', title: 'Event 2', description: '' }, 
    { id: 'event3', title: 'Event 3', description: '' }];
}