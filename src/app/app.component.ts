import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable,AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'Join Alumini !';
   user : {};

   constructor(private af : AngularFire){
     this.af.auth.subscribe(user => {
       if(user){
         this.user = user;
       }
       else{
         this.user = {};
       }
     });
   }

   loginGoogle() : void {
     this.af.auth.login({
       provider : AuthProviders.Google,
       method : AuthMethods.Redirect
     });
   }

  logoutGoogle() : void {
    this.af.auth.logout();
  }
}
