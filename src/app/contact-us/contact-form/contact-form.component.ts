import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
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
     this.nom=this.ctcForm.get('nom')?.value;
     this.prenom=this.ctcForm.get('prenom')?.value;
     this.societe=this.ctcForm.get('societe')?.value;
     this.post=this.ctcForm.get('post')?.value;
     this.email=this.ctcForm.get('email')?.value;
     this.telephone=this.ctcForm.get('telephone')?.value;
     this.intervention=this.ctcForm.get('intervention')?.value;
     this.message=this.ctcForm.get('message')?.value;
    alert(
      'Submit:' +
        this.nom +
        ' ' +
        this.prenom +
        ' ' +
        this.societe +
        ' ' +
        this.post +
        ' \n' +
        this.email +
        ' ' +
        this.telephone+
        ' '+
        this.intervention+
        ' '+
        this.message
    );
  }
  ngOnInit(): void {
  }

}
