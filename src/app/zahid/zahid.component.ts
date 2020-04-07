import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Zahid } from './zahid.model';
import { ZahidService } from '../servises/zahid.service';

@Component ({
  selector: 'app-zahid',
  templateUrl: './zahid.component.html',
  styleUrls: ['./zahid.component.css']
})

export class ZahidComponent implements OnInit {

  @Input() zahid: Zahid;

constructor(
  private router: Router) {}

ngOnInit() {

}
}
