import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

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
  error: boolean;
  exist: boolean;
  success: boolean;
  id;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  get control(){
    return this.register.controls;
  }

  submit(){
    this.exist = false;
    this.error = false;
    this.success = false;
    this.IsSubmitted = true;
    this.nomatch = this.checkPasswords(this.register);

    if(this.register.valid && !this.nomatch){
      const body = this.register.value

      this.http.post<any>("http://localhost:3000/request", body).subscribe(data => {
        if(data['status'] === 'error'){
          this.error = true;
        }else if(data['status'] === 'exist'){
          this.id = data['id'];
          this.exist = true;
        }else if(data['status'] === 'success'){
          this.success = true;
          this.reset();
        }
      })
    }else{
      return;
    }

  }

  checkPasswords(group: FormGroup) {
    let pass = group.get('password').value;
    let confirmPass = group.get('cpass').value;
    return pass !== confirmPass;
  }

  reset() {
    this.IsSubmitted = false;
    this.register.reset();
  }

}
