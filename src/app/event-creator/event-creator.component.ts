import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../event/event.model';
import {DateProviderService} from '../servises/date-provider.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-creator-form',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css']
})

export class EventCreatorComponent implements OnInit {

  @Output() createdEvent: EventEmitter<Event> = new EventEmitter<Event>();
  eventCreatorForm: FormGroup;

  constructor(private dateProvider: DateProviderService) {
  }

  ngOnInit() {
    this.eventCreatorForm = new FormGroup({
      title: new FormControl('', Validators.required),
      startDay: new FormGroup({
        year: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)
      }),
      endDay: new FormGroup({
        year: new FormControl('', Validators.required),
        month: new FormControl('', Validators.required),
        day: new FormControl('', Validators.required)
      }),
    });
  }

  createEvent(eventForm: any) {
    const eventCreated = new Event(
      new Date().getMilliseconds(),
      eventForm.title,
      this.dateProvider.provideDate(eventForm.startDay),
      this.dateProvider.provideDate(eventForm.endDay),
    );
    this.createdEvent.emit(eventCreated);
    this.eventCreatorForm.reset();
  }
}
