import { Injectable } from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DateProviderService {

  constructor() { }

  provideDate(value: any): Date {
    return new Date (value.year, value.month, value.day);
  }
  provideDays(start: Date, end: Date): number {
    // @ts-ignore
    return (1 + (end - start) / (1000 * 24 * 60 * 60));
  }
}
