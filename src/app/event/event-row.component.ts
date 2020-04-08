import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Event } from './event.model';
import { EventService } from '../servises/event.service';

@Component ({
  // tslint:disable-next-line:component-selector
  selector: 'event-row',
  templateUrl: './event-row.component.html',
  styleUrls: ['./event-row.component.css']
})

export class EventRowComponent {

  @Input() event: Event;

}
