import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Event } from '../event/event.model';
import {DateProviderService} from '../servises/date-provider.service';
import {Schedule} from '../schedule/schedule';

@Component({
  selector: 'app-event-creator',
  templateUrl: './event-creator.component.html',
  styleUrls: ['./event-creator.component.css']
})

export class EventCreatorComponent implements OnInit {

@Output() createdZahid: EventEmitter<Event> = new EventEmitter<Event>();
eventCreatorForm: FormGroup;
constructor(private dateProvider: DateProviderService) {
}

ngOnInit() {
  this.eventCreatorForm = new FormGroup({
    title: new FormControl('', Validators.required),
    start: new FormGroup({
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required)
    }),
    end: new FormGroup({
      year: new FormControl('', Validators.required),
      month: new FormControl('', Validators.required),
      day: new FormControl('', Validators.required)
    }),
  });
}
createZahid(valueF: any) {
//  const zahidCreated = (value as Zahid);
  const zahidCreated = new Event (
    new Date().getMilliseconds(),
    valueF.title,
    this.dateProvider.provideDate(valueF.start),
    this.dateProvider.provideDate(valueF.end),
    );
  this.createdZahid.emit(zahidCreated);
  this.eventCreatorForm.reset();
}
}
