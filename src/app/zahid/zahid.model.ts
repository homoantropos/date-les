export class Zahid {
  private title: string;
  private start: Date;
  private end: Date;
  private days: number;
  private id?: number;
  constructor(title: string, days?: number, start?: Date, end?: Date, id?: number) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.days = days;
    this.id = id;
  }
  setTitle(title: string) {
    this.title = title;
  }
  getTitle(): string {
    return this.title;
  }
  setStart(start: Date) {
    this.start = start;
  }
  getStart(): Date {
    return this.start;
  }
  setEnd(end: Date) {
    this.end = end;
  }
  getEnd(): Date {
    return this.end;
  }
  setDays(days: number) {
    this.days = days;
  }
  getDays(): number {
    return this.days;
  }
  setId(id: number) {
    this.id = id;
  }
  getId(): number {
    return this.id;
  }
}
