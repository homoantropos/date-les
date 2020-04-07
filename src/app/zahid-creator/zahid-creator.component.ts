import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Zahid } from '../zahid/zahid.model';
import {DateProviderService} from '../servises/date-provider.service';
import {Shedule} from '../shedule/shedule';

@Component({
  selector: 'app-zahid-creator',
  templateUrl: './zahid-creator.component.html',
  styleUrls: ['./zahid-creator.component.css']
})

export class ZahidCreatorComponent implements OnInit {

@Output() createdZahid: EventEmitter<Zahid>;
zahidCreatorForm: FormGroup;
constructor(private dateProvider: DateProviderService) {
  this.createdZahid = new EventEmitter<Zahid>();
}
ngOnInit() {
  this.zahidCreatorForm = new FormGroup({
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
    days: new FormControl('', Validators.required)
  });
}
createZahid(valueF: any) {
//  const zahidCreated = (value as Zahid);
  const id = Shedule.zahidIds++;
  const zahidCreated = new Zahid (
    valueF.title,
    this.dateProvider.provideDays(
      this.dateProvider.provideDate(valueF.start),
      this.dateProvider.provideDate(valueF.end)),
    this.dateProvider.provideDate(valueF.start),
    this.dateProvider.provideDate(valueF.end),
    id);
  this.createdZahid.emit(zahidCreated);
  this.zahidCreatorForm.reset();
}
}
