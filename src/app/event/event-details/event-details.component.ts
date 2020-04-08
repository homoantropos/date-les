import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Event} from '../event.model';
import {EventService} from '../../servises/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.html',
  styleUrls: ['../event-row.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: Event;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.event = this.eventService.getEvent(+params.id) );
  }

}
