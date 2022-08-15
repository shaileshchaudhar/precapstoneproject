import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Validator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ LoginService]
})
export class LoginComponent implements OnInit {
  username:any="";
  password:any="";
  constructor(private router:Router) {  }
  savePerson(form:any){
    console.log(form);
    console.log(form.value);
   }
  
 
  onclick():any{
    if(this.username=="admin"&& this.password=="admin"){
      this.router.navigate(["dashboard"])

    }
    else{
      alert("invalid credentials")
    }
   

  }
  ngOnInit(): void {
   
  }
  

  

  }
  

