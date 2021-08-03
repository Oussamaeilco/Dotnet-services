import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  conForm: FormGroup;
  //elements
  user: string = '';
  password: string = '';
  //elements verification
  v_user: boolean = false;
  v_password: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.conForm = this.formBuilder.group({
      user: '',
      password: '',
    });
  }

  ngOnInit(): void {}

  connect(): void {
    let valide: boolean = true;
    //Teste des éléments
    this.user = this.conForm.get('user')?.value;
    //user existe
    if (this.user == '') {
      this.v_user = true;
      valide = false;
    } else this.v_user = false;
    this.password = this.conForm.get('password')?.value;
    //prenom existe
    if (this.password == '') {
      this.v_password = true;
      valide = false;
    } else this.v_password = false;
    if (valide) {
      localStorage.setItem('user_name', this.user);
      this.router.navigateByUrl('admin_service/userPanel');
    }
    //alert('You are in!');
  }
}
