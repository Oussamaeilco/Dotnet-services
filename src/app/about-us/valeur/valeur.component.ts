import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-valeur',
  templateUrl: './valeur.component.html',
  styleUrls: ['./valeur.component.scss'],
})
export class ValeurComponent implements OnInit {
  @Input() link: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
  constructor() {}

  ngOnInit(): void {}
}
