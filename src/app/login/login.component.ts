import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template:`
    <form>
    Username:<input [(ngModel)]=username name='username'/>
    Password:<input [(ngModel)]=password name='password'/>
    <button (click)=check()>Login</button>
    <span *ngIf='isTrue'>Hello {{display}}</span>
    </form>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  index:number;
  isTrue:boolean=false;
  username:string;
  password:string;
  display:string='Not Logged In..';

  uname:any[]=['Arunima','Harshita','Vibhanshu','Virat','Mishti','Rey','Tim','Sid','Emir','Rehan'];
  pass:any[]=['Aru@123','Har@123','Vib@123','Vir@123','Mis@123','Rey@123','Tim@123','Sid@123','Emi@123','Reh@123'];

  check()
  {
    if(this.uname.indexOf(this.username) != -1)
    {
      this.index = this.uname.indexOf(this.username);
      if(this.pass.indexOf(this.password) == this.index)
      {
        this.isTrue = !this.isTrue;
        this.display = this.username;
      }
      else{
        this.display="Invalid username or password";
      }
    }
    else
    {
      this.display="User Not Found";
    }
  }
}
