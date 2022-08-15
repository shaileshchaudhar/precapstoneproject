import { Injectable } from '@angular/core';

@Injectable()

export class LoginService {
  user:any[]=[
    {username:'admin',password:'admin'}
  ];
  getuser(){
    return this.user
  }

  constructor() { }
}
