import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nos-services',
  templateUrl: './nos-services.component.html',
  styleUrls: ['./nos-services.component.scss'],
})
export class NosServicesComponent implements OnInit {
  head: string = '..\\..\\assets\\icones\\';
  listeServices: any[] = [
    {
      src: this.head + 'technical-support (1).png',
      desc: 'Accompagnement et conseil informatique​',
      detail:
        '<b>Une approche métier </b></br>' +
        'nous prêtons une attention particulière à l’identification, à la description et à la valorisation des activités et spécificités de votre organisation. Nous nous impliquons dans le traitement de vos dossiers afin d’être prêt à agir face à des contraintes concrètes' +
        '</br>    </br><b>Un accompagnement sur mesure </b></br>' +
        'La flexibilité de notre offre est directement liée à vos objectifs, vos assujettissements, votre taille, marché ou encore culture. Notre démarche est ainsi personnalisée et calibrée selon ces critères. Enfin, l’écoute de vos retours d’expérience font partie intégrante, et clôture, notre accompagnement.' +
        '</br></br>' +
        '<b>Un accompagnement pragmatique</br></b>' +
        'L’accompagnement que nous vous proposons est pensé et structuré à d’une expérience concrète  dans le domaine du SI et la mise en œuvre de solutions de gestion. Ceci  nous permet donc d’aborder tous  les cas de figure  de manière concrète et opérationnelle.' +
        '</br><b></br>' +
        'Neutralité vis à vis des acteurs du marché</b></br>' +
        'Notre connaissance du marché et de ses valeurs est alimentée par une veille permanente (salons, presse personnalisée, réseaux sociaux…). Les consultations que nous donnons ou les préconisations que nous adressons sont argumentées, justifiées et structurées à partir d’éléments factuels.' +
        '</br><b></br>' +
        'Un engagement de qualité</b></br>' +
        ' => Motivés par une  démarche d’amélioration continue, nous nous engageons à satisfaire au mieux les attentes de nos clients. </br></br>',
    },
    {
      src: this.head + 'rocket.png',
      desc: 'Déploiement, masterisation et inventaire du parc informatique',
      detail:
        'Nous prenons en charge la gestion  du déploiement, masterisation et inventaire de parc informatique, dans leur globalité. De plus,  nous réalisons le transfert de vos données et logiciels pour les intégrer à un nouveau système d’exploitation. Nous mettons en place une stratégie d’optimisation personnalisée qui vous assure une performance optimale de votre infrastructure, toujours adaptée à votre métier. Enfin,, nous répertorions et réalisons la gestion de votre parc informatique.',
    },
    {
      src: this.head + 'server.png',
      desc: 'Installation, retrait logistique et récupération du matériel​',
      detail:
        '<p>On ce charge de l’installation, retrait logistique et récupération de tous vos matériaux informatiques.</p><p><br>L’entièreté de l’équipement informatique, de l’écran d’ordinateur à la souris en passant par l’imprimante, le clavier, la tablette, l’unité centrale, le laptop, mais aussi de multiples autres accessoires.</p>' +
        '<p><br>Le retrait de matériel s’effectue directement auprès de l’enseigne TNT ou bien chez le client, après installation retour de l’ancien matériel, au dépôt de stockage.</p>',
    },
    {
      src: this.head + 'research.png',
      desc: 'Infogérance​',
      detail:
        'Faites le choix de nous confier la gestion de votre système d’information à hauteur de vos besoins :' +
        '<br> <br><B>Infogérance Globale</B> (infrastructure, exploitation, support)<br>' +
        'Vous nous confiez la gestion de l’ensemble de votre système d’information, nous analysons la structure, réalisons une stratégie d’optimisation personnalisée selon votre métier dans l’optique votre évolution digitale.  Bénéficiez également du service support qui se pose comme réponse technique pour  vos demandes d’intervention.Le "Plus" de ce service ?  Une solution efficace, adaptée et rapide ! <br> <br><B>Infogérance Service</B> (exploitation, support)<br>' +
        'Nous prenons en charge les configurations d’exploitation de votre système d’information en' +
        'l’adaptant à votre métier et  apportons une réponse technique aux demandes' +
        'd’intervention.' +
        '<br><br><B>Centre de support</B> (support)<br>' +
        'Nous vous apportons une réponse technique aux demandes d’intervention.',
    },
    {
      src: this.head + 'planing.png',
      desc: 'Gestion des tickets du parc informatique​',
      detail:
        'Nous nous chargeons de solutionner les incidents signalés au sein de votre système informatique.' +
        'Nous sommes également aptes à gérer vos tickets en anglais par des techniciens spécialisés sur place ou à distance.' +
        'Gérer et résoudre les incidents de manière efficace' +
        "Un incident est une interruption inattendue d'un service. Celui-ci perturbe les opérations normales et affecte donc la productivité de l'utilisateur final." +
        "Un incident peut être provoqué par le mauvais fonctionnement d’un actif ou par une panne de réseau. Exemples d'incidents : un problème d'imprimante, de connectivité Wi-Fi, un problème de verrouillage d’une application, un problème de service de messagerie, une panne d'ordinateur portable, une erreur d'authentification AD, un problème de partage de fichier, etc.",
    },
    {
      src: this.head + '24-hours-support.png',
      desc: 'Support téléphonique​',
      detail:
        'Notre support téléphonique est disponible et à votre écoute de 9h à 20h, en prévoyant un délai de réponse d’1h. <br><br>' +
        'Nous restons également joignables par téléphone ou SMS, mais aussi par e-mail..<br>' +
        '<br>' +
        'Tel : (+33) 06 35 35 00 69<br>' +
        'E-mail : support@dotnet-services.fr<br><br>' +
        'Rendez-vous sur notre site internet www.generation-it.net afin d’y remplir le formulaire de contact comprenant  votre demande et nous nous assurerons d’y répondre dans les délais les plus brefs',
    },
    {
      src: this.head + 'technical-support.png',
      desc: 'Prise en main a distance​',
      detail:
        'Pour faciliter les manipulations, nous prenons le contrôle de votre ordinateur à distance et ce peu importe le lieu où vous vous trouvez<br> (France et International).',
    },
    {
      src: this.head + 'content-management-system.png',
      desc: 'Suivi et reporting​',
      detail:
        'Proches de vous en toutes circonstances, nous vous tenons informés de nos actions et communiquons régulièrement avec vous à l’aide de reporting afin que vous puissiez suivre l’avancement du projet.<br><br>' +
        'Installation, retrait logistique et récupération de matériel :<br><br>' +
        'Nous installons, effectuons un retrait logistique et récupérons votre matériel informatique.<br><br>' +
        'Étapes d’installation :<br>' +
        ' 1.	Pré configuration des matériels <br>' +
        '2.	Sauvegarde des anciennes données <br>' +
        '3.	Installation du nouveau matériel <br>' +
        '4.	Personnalisation du poste de travail<br>' +
        '5.	Facilitation de la prise en main de l’utilisateur <br>' +
        '6.	Récupération des numéros de série de l’ancien et nouveau matériel <br><br>' +
        'L’entièreté de l’équipement informatique, de l’écran d’ordinateur à la souris en passant par ' +
        'l’imprimante, le clavier, la tablette, l’unité centrale, le laptop, mais aussi de multiples autres accessoires' +
        'Le retrait de matériel s’effectue directement auprès de l’enseigne TNT ou bien chez le client, après installation retour de l’ancien matériel, au dépôt de stockage.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
