import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'liste-service',
  templateUrl: './liste-service.component.html',
  styleUrls: ['./liste-service.component.scss'],
})
export class ListeServiceComponent implements OnInit {
  head: string = '..\\..\\assets\\icones\\';
  listeServices: any[] = [
    {
      src: this.head + 'technical-support (1).png',
      desc: 'Accompagnement et conseil informatique​',
    },
    {
      src: this.head + 'rocket.png',
      desc: 'Déploiement, masterisation et inventaire du parc informatique',
    },
    {
      src: this.head + 'server.png',
      desc: 'Installation, retrait logistique et récupération du matériel​',
    },
    { src: this.head + 'research.png', desc: 'Infogérance​' },
    {
      src: this.head + 'planing.png',
      desc: 'Gestion des tickets du parc informatique​',
    },
    {
      src: this.head + '24-hours-support.png',
      desc: 'Support téléphonique​',
    },
    {
      src: this.head + 'technical-support.png',
      desc: 'Prise en main a distance​',
    },
    {
      src: this.head + 'content-management-system.png',
      desc: 'Suivi et reporting​',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
