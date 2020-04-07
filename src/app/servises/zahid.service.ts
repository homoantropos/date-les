import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Shedule } from '../shedule/shedule';
import { Zahid } from '../zahid/zahid.model';

@Injectable({
	providedIn: 'root'
})

export class ZahidService {

	getZahid(id: number | string): Zahid {
		return Shedule.shedule.find(z => z.getId() === +id);
	}

}