import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  petianoUser = {
    user: {}
  }
  selectedValue = null;
  forme = false;
  registerMsg = null;
  registerFail = false;

  constructor(private router: Router) { }
  petiano = false;

  loginUser() {
    this.router.navigate(['/login']);
  }

  form() {
    this.forme = true;
    if (this.selectedValue === 'Tutor') {
      this.petiano = false;
    } else if (this.selectedValue === 'Petiano') {
      this.petiano = true;
    }
  }

  ngOnInit() {
  }

}
