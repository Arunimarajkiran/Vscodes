import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { FirstComponent } from "./firstcomp";
import { LuckynumberComponent } from './luckynumber/luckynumber.component';
import { HelloName } from "./helloname";
import { FormsModule } from '@angular/forms';
import { PrintNameComponent } from './print-name/print-name.component';
import { DirectivescompComponent } from './directivescomp/directivescomp.component';
import { EmptableComponent } from './emptable/emptable.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    LuckynumberComponent,
    HelloName,
    PrintNameComponent,
    DirectivescompComponent,
    EmptableComponent,
    GreetingsComponent,
    LoginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  //bootstrap:[FirstComponent]
  //bootstrap:[CounterComponent]
  //bootstrap:[AppComponent]
  //bootstrap:[PrintNameComponent]
})
export class AppModule { }
