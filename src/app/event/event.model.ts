export class Event {
  title: string;
   startDay: Date;
   finishDay: Date;
   id: number;
  constructor(
              id: number,
              title: string,
              startDay?: Date,
              finishDay?: Date
  ) {
    this.title = title;
    this.startDay = startDay;
    this.finishDay = finishDay;
    this.id = id;
  }

  get days(): number {
    return  this.finishDay.getDate() + 1 - this.startDay.getDate();
  }

  // TODO you don't really need getters in JavaScript

}
