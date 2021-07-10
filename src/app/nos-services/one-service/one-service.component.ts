import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'one-service',
  templateUrl: './one-service.component.html',
  styleUrls: ['./one-service.component.scss'],
})
export class OneServiceComponent implements OnInit {
  @Input() link: string = '';
  @Input() desc: string = '';
  @Input() detail: string = '';
  constructor() {}

  ngOnInit(): void {}
}
