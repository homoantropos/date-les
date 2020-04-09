import { Component } from '@angular/core';
import { Event } from '../event/event.model';
import { Schedule } from './schedule';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable, pipe, of } from 'rxjs';
import { EventService } from '../servises/event.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})

export class ScheduleComponent {
  schedule$: Observable<Event[]>;
  id: number;
  addAllowed = false;
  buttonName = 'Додати захід';

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private eventService: EventService) {
}

goToCreator() {
    this.router.navigate(['/creator']);
  }

getEvent(id: number | string) {
  const event = this.eventService.getEvent(id);
  console.log('event', event);
}
getSchedule(): Event[] {
  return Schedule.schedule;
}

addEvent(event: Event) {
  event.id = Schedule.schedule.length;
  Schedule.schedule.unshift(event);
    // @ts-ignore
  Schedule.schedule = Schedule.schedule.sort((a, b) => a.startDay - b.startDay);
  }

  allowAdding() {
    this.addAllowed = !this.addAllowed;
    if (this.addAllowed) {
      this.buttonName = 'Закрити';
    } else {
      this.buttonName = 'Додати захід';
    }
  }

  redirectToEvent(event: Event) {
    this.router.navigateByUrl(`/schedule/${event.id}`);
  }
}
