import { Component, OnInit } from '@angular/core';
import { User } from "../user";
@Component({
  selector: 'app-print-name',
  template: `
    <form (ngSubmit)='show()'>
      userName: <input [(ngModel)]=user.username name='uname'/>
      user Address: <input [(ngModel)]=user.useraddress name='uadd'/>
      user Age: <input [(ngModel)]=user.userage name='uage'/>
      <button type='submit'>Submit</button>
      <!--<img src='{{imagePath}}'/>-->
      <img [src]='imagePath'/>    <!--property binding-->
      <span [innerHTML]='title'></span>
    </form>
  `,
  styles: []
})
export class PrintNameComponent implements OnInit {
  imagePath='assets/unnamed.jpg';
  title='Hello How are you?';

  user=new User();
  constructor() {
    console.log('constructor called');
   }
  ngOnInit(): void {
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
  }

  //to fetch the data to user
  show(){
    console.log(this.user.username+' '+this.user.useraddress+' '+this.user.userage);
  } 

}
