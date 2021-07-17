import { MailerService } from './../../services/mailer.service';
import { useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { runInThisContext } from 'vm';

@Component({
  selector: 'join-form',
  templateUrl: './join-form.component.html',
  styleUrls: ['./join-form.component.scss'],
})
export class JoinFormComponent implements OnInit {
  mailer: any;
  joinForm: FormGroup;
  cvToUpload!: File;
  ltToUpload!: File;
  data: FormData = new FormData();
  //elements du formulaire
  message: string = '';
  nom: string = '';
  prenom: string = '';
  email: string = '';
  date: string = '';
  telephone: string = '';
  motivation: string = 'Vide';
  cv: string = '';
  lettre: string = '';
  //validation des éléments
  v_nom: boolean = false;
  v_prenom: boolean = false;
  v_email: boolean = false;
  v_date: boolean = false;
  v_telephone: boolean = false;
  v_cv: boolean = false;
  v_isemail: boolean = false;
  v_istelephone: boolean = false;
  //consturctor
  constructor(
    private mailerService: MailerService,
    private formBuilder: FormBuilder
  ) {
    this.joinForm = this.formBuilder.group({
      nom: '',
      prenom: '',
      email: '',
      date: '',
      telephone: '',
      motivation: '',
      cv: '',
      lettre: '',
    });
  }
  //methodes
  //file
  //CV
  cvFileInput(event: Event) {
    let target = event.target as HTMLInputElement;
    let files = target.files as FileList;
    if (files.length > 0) {
      this.cvToUpload = files.item(0) as File;
      this.v_cv = false;
      this.data.append('cv', this.cvToUpload, this.cvToUpload.name);
    } else {
      this.v_cv = true;
    }
  }
  ltFileInput(event: Event) {
    let target = event.target as HTMLInputElement;
    let files = target.files as FileList;
    if (files.length > 0) {
      this.ltToUpload = files.item(0) as File;
      this.data.append('lettre', this.ltToUpload, this.ltToUpload.name);
    }
  }
  //send
  join_us(): void {
    let valide: boolean = true;
    //Verification des éléments
    this.nom = this.joinForm.get('nom')?.value;
    //nom existe
    if (this.nom == '') {
      this.v_nom = true;
      valide = false;
    } else this.v_nom = false;
    this.prenom = this.joinForm.get('prenom')?.value;
    //prenom existe
    if (this.prenom == '') {
      this.v_prenom = true;
      valide = false;
    } else this.v_prenom = false;

    this.email = this.joinForm.get('email')?.value;
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
    this.telephone = this.joinForm.get('telephone')?.value;
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
    this.date = this.joinForm.get('date')?.value;
    //date existe
    if (this.date == '') {
      this.v_date = true;
      valide = false;
    } else this.v_date = false;

    this.motivation = this.joinForm.get('motivation')?.value;
    if (this.motivation == '') this.motivation = 'Vide';
    this.cv = this.joinForm.get('cv')?.value;
    //cv existe
    if (this.cv == '') {
      this.v_cv = true;
      valide = false;
    } else this.v_cv = false;
    //preparing to send
    if (valide) {
      this.message =
        'Email:' +
        this.email +
        '<br>Tel:' +
        this.telephone +
        '<br>Date de naissance:' +
        this.date +
        '<br>Motivation:' +
        this.motivation;
      this.mailerService.message = this.message;
      this.mailerService.name = this.prenom + ' ' + this.nom;
      this.mailerService.email = this.email;
      this.mailerService.data = this.data;
      //type of message
      this.mailerService.msg_type = true; //is a join us message

      this.mailerService.sendEmail();
    }
  }

  ngOnInit(): void {}
}
