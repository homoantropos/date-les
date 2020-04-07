import { Zahid } from '../zahid/zahid.model';

export class Shedule {

static shedule: Zahid[] = [
  new Zahid('Чемпіонат України з рукопашного бою серед учнів', 3, new Date(2020, 3, 12), new Date(2020, 3, 17), 0),
  new Zahid('Кубок України з лижних гонок серед студентів', 5, new Date(2020, 2, 22), new Date(2020, 2, 77), 1),
  new Zahid('Чемпіонат 1', 4, new Date(2020, 3, 14), new Date(2020, 3, 17), 2)
];

static zahidIds = 2;
}
