import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  url: string = '..\\..\\assets\\icones\\';
  listeValues: any[] = [
    {
      src: this.url + 'enthusiast.png',
      title: 'Passions et Engagement',
      desc: 'Une réelle focalisation sur les résultats, une parfaite adéquation avec nos clients, avec leur réussite. Un engagement pour un travail d’excellence, fort d’un professionnalisme sans faille, dans le respect constant des codes éthiques.',
    },
    {
      src: this.url + 'coeur.png',
      title: 'Honnêteté et Ouverture',
      desc: 'Une grande honnêteté intellectuelle pour dire les choses telles qu’elles sont. Une ouverture d’esprit pour accepter de remettre en question nos convictions.',
    },
    {
      src: this.url + 'united.png',
      title: 'Esprit de l’équipe',
      desc: 'Un esprit d’équipe permettant la confiance, le respect et le soutien de tous danschacune de nos interactions, afin de nous mobiliser ensemble pour relever les défis de nos clients.',
    },
    {
      src: this.url + 'procedure.png',
      title: 'Pragmatisme',
      desc: 'Une approche pragmatique et engagée qui nous permet d’obtenir des résultats et de transformer les décisions en actions.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
