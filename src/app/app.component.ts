import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--<app-print-name></app-print-name>-->
    <!--<app-directivescomp></app-directivescomp>-->
    <!--<app-emptable></app-emptable>-->
    <!--<app-greetings></app-greetings>-->
    <app-login></app-login>
  `,
  styles: ['p{font-weight:bold}']
})
export class AppComponent {
  title = 'MyFirstAngularApp';
}
