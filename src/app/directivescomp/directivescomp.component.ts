import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivescomp',
  templateUrl: './directivescomp.component.html',
  styleUrls: ['./directivescomp.component.css']
})
export class DirectivescompComponent implements OnInit {

  isValid:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  cities:any[]=["Mumbai","Gujrat","Pune","Delhi"];
}
