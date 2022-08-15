import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { LoginComponent } from '../login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,MatInputModule,
    FormsModule,
    MatCardModule
    
  ],
  exports:[LoginComponent,]
})
export class LoginModule { }
