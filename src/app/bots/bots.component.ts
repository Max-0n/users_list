import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/users.service';
import { NavigationService } from '../shared/navigation.service';

@Component({
  selector: 'bots',
  templateUrl: './bots.component.pug',
  styleUrls: ['./bots.component.scss']
})
export class BotsComponent implements OnInit {

  constructor(public usersService: UsersService,
              private navService: NavigationService) { }

  ngOnInit() {
  }

  openSettings(user: any) {
    this.usersService.selected = user;
    this.navService.selectNav('settings');
  }

  prev() {
    if (this.usersService.prev) {
      this.usersService.get(this.usersService.prev);
    }
  }

  next() {
    if (this.usersService.next) {
      this.usersService.get(this.usersService.prev);
    }
  }

}
