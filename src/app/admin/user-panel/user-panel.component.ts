import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  user: string = localStorage.getItem('user_name') as string;
  isAdmin: boolean = false;
  constructor() {
    if (this.user == 'admin') {
      this.isAdmin = true;
    }
  }

  ngOnInit(): void {}
}
