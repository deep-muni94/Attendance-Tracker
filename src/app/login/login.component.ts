import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  IsSubmitted = false;

  login = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private fb : FormBuilder) {}

  get control(){
    return this.login.controls;
  }

  submit(){

    this.IsSubmitted = true;

    if(this.login.valid){

    }else{
      return;
    }

  }

}
