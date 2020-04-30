import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  IsSubmitted = false;

  register = this.fb.group({
    empid: ['', [Validators.required]],
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    password: ['', [Validators.required]],
    cpass: ['']
  });
  nomatch: boolean;

  constructor(private fb: FormBuilder) { }

  get control(){
    return this.register.controls;
  }

  submit(){

    this.IsSubmitted = true;
    this.nomatch = this.checkPasswords(this.register);

    if(this.register.valid && !this.nomatch){
      console.log("DONE");
    }else{
      return;
    }

  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('cpass').value;
    return pass !== confirmPass;
  }

}
