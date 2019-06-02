import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  login() {
    localStorage.setItem('token', '1234');
    this.route.navigate(['dashboard'])
  }

}
