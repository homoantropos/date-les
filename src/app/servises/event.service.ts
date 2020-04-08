import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Schedule } from '../schedule/schedule';
import { Event } from '../event/event.model';

@Injectable({
  providedIn: 'root'
})

export class EventService {
  getEvent(id: number | string): Event {
    return Schedule.schedule.find(e => e.id === +id);
  }
}
