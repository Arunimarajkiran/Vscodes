import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  employees:any[]=
  [{ id:1, name:'Ray', age:22, designation:'Manager'},
   { id:2, name:'Niya', age:32, designation:'IT'},
   { id:3, name:'Mishti', age:27, designation:'Operator'},
   { id:4, name:'Mark', age:33, designation:'Manager'},
   { id:5, name:'Magneta', age:21, designation:'Trainee' }
];
  
}
