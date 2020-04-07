import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Zahid} from '../zahid.model';
import {ZahidService} from '../../servises/zahid.service';

@Component({
  selector: 'app-zahid-details',
  templateUrl: '../zahid.component.html',
  styleUrls: ['../zahid.component.css']
})
export class ZahidDetailsComponent implements OnInit {

  zahid: Zahid;
  constructor(
    private route: ActivatedRoute,
    private zahidService: ZahidService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => this.zahid = this.zahidService.getZahid(+params.id) );
  }

}
