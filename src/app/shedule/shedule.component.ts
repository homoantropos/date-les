import { Component } from '@angular/core';
import { Zahid } from '../zahid/zahid.model';
import { Shedule } from './shedule';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable, pipe, of } from 'rxjs';
import { ZahidService } from '../servises/zahid.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.css']
})

export class SheduleComponent {
shedule$: Observable<Zahid[]>;
id: number;

constructor(
  private router: Router,
  private route: ActivatedRoute,
  private zahidService: ZahidService) {
}

goToCreator() {
    this.router.navigate(['/creator']);
  }

getZahid(id: number | string) {
  const zahid = this.zahidService.getZahid(id);
  console.log('zahid', zahid);
}
getShedule(): Zahid[] {
  return Shedule.shedule;
}

addZahid(zahid: Zahid) {
  zahid.setId(Shedule.shedule.length);
  Shedule.shedule.unshift(zahid);
    // @ts-ignore
  Shedule.shedule = Shedule.shedule.sort((a, b) => a.getStart() - b.getStart());
  }

}
