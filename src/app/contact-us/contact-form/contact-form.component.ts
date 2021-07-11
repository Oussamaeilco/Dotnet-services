import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  //Init formulaire
  ctcForm: FormGroup;
  //elements du formulaire
  nom: string = '';
  prenom: string = '';
  societe: string = '';
  post: string = '';
  email: string = '';
  telephone: string = '';
  intervention: string = '';
  message: string = '';
  //elements verification
  v_nom: boolean = false;
  v_prenom: boolean = false;
  v_societe: boolean = false;
  v_email: boolean = false;
  v_telephone: boolean = false;
  v_isemail: boolean = false;
  v_istelephone: boolean = false;
  v_intervention: boolean = false;
  v_message: boolean = false;
  //Init Formulaires
  constructor(private formBuilder: FormBuilder) {
    this.ctcForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      societe: '',
      post: '',
      email: '',
      telephone: '',
      intervention: '',
      message: '',
    });
  }
  contact_us(): void {
    let valide: boolean = true;
    //Teste des éléments
    this.nom = this.ctcForm.get('nom')?.value;
    //nom existe
    if (this.nom == '') {
      this.v_nom = true;
      valide = false;
    } else this.v_nom = false;
    this.prenom = this.ctcForm.get('prenom')?.value;
    //prenom existe
    if (this.prenom == '') {
      this.v_prenom = true;
      valide = false;
    } else this.v_prenom = false;
    this.societe = this.ctcForm.get('societe')?.value;
    //societe existe
    if (this.societe == '') {
      this.v_societe = true;
      valide = false;
    } else this.v_societe = false;
    this.post = this.ctcForm.get('post')?.value;
    this.email = this.ctcForm.get('email')?.value;
    //email existe
    if (this.email == '') {
      this.v_email = true;
      valide = false;
    } else this.v_email = false;
    //le mail est valide
    const m =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!m.test(this.email.toLowerCase())) {
      this.v_isemail = true;
      valide = false;
    } else this.v_isemail = false;
    this.telephone = this.ctcForm.get('telephone')?.value;
    //tel existe
    if (this.telephone == '') {
      this.v_telephone = true;
      valide = false;
    } else this.v_telephone = false;
    //tel valide
    const t = /^\d+$/;
    if (!t.test(this.telephone)) {
      this.v_istelephone = true;
      valide = false;
    } else this.v_istelephone = false;
    this.intervention = this.ctcForm.get('intervention')?.value;
    //intervention existe
    if (this.intervention == '') {
      this.v_intervention = true;
      valide = false;
    } else this.v_intervention = false;
    this.message = this.ctcForm.get('message')?.value;
    //Message existe
    if (this.message == '') {
      this.v_message = true;
      valide = false;
    } else this.v_message = false;
    //verification
    if (valide) {
      alert('Boom goes the dynamite!!!');
    }
  }
  ngOnInit(): void {}
}
