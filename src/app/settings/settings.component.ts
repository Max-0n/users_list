import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormArray, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UsersService } from '../shared/users.service';
import { NavigationService } from '../shared/navigation.service';
// import { Subscription } from "rxjs";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.pug',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  settingsForm: FormGroup;
  // addAccSubscribe: Subscription;

  userParam = [
    {value: 0, viewValue: 'Off'},
    {value: 1, viewValue: 'Low'},
    {value: 2, viewValue: 'Middle'},
    {value: 3, viewValue: 'High'}
  ];

  constructor(private _fb: FormBuilder,
              private usersService: UsersService,
              private navService: NavigationService) {
  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.settingsForm = this._fb.group({
      name: this.usersService.selected ? this.usersService.selected.name : '',
      avatar: this.usersService.selected.avatarUrl ? this.usersService.selected.avatarUrl : '',
			param: 1
		});
  }

  back() {
    this.navService.selectNav('bots');
  }

  save() {
    this.usersService.selected.name = this.settingsForm.value.name;
    this.usersService.selected.avatarUrl = this.settingsForm.value.avatar;
    this.usersService.update(this.usersService.selected);
    this.back();
  }

}
