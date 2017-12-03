import { Component, OnInit } from '@angular/core';
import { UsersService } from './shared/users.service';
import { NavigationService } from './shared/navigation.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private usersService: UsersService,
              private navService: NavigationService) {}

  ngOnInit() {
    this.usersService.get();
  }

  isNav(name: string): boolean {
    return this.navService.isNav(name);
  }

}
