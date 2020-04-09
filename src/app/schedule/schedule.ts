import { Event } from '../event/event.model';

export class Schedule {

static schedule: Event[] = [
  new Event(1, 'Чемпіонат України з рукопашного бою серед учнів', new Date(2020, 3, 12), new Date(2020, 3, 17)),
  new Event(2, 'Кубок України з лижних гонок серед студентів', new Date(2020, 2, 22), new Date(2020, 2, 27)),
  new Event(3, 'Чемпіонат 1',  new Date(2020, 3, 14), new Date(2020, 3, 17))
];

}
