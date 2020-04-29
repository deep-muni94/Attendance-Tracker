import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public items = [
    {'name': 'Login', 'url': 'login'},
    {'name': 'Register', 'url': 'register'},
    {'name': 'Explain', 'url': 'explain'},
    {'name': 'About Us', 'url': 'aboutus'}
  ];

  public showing = false;

  constructor() { }

  ngOnInit() {
  }

  expand(){
    if(this.showing == false){
      this.showing = true;
    }else{
      this.showing = false;
    }
  }

}
