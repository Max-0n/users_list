/*=======================================
	import MODULES
=======================================*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { HttpModule } from '@angular/http';

/*=======================================
	import COMPONENTS
=======================================*/
import { AppComponent } from './app.component';
import { BotsComponent } from './bots/bots.component';
import { SettingsComponent } from './settings/settings.component';

/*=======================================
	import SERVICES
=======================================*/
import { UsersService } from './shared/users.service';
import { NavigationService } from './shared/navigation.service';
import { UrlService } from './shared/url.service';


@NgModule({
  declarations: [
    AppComponent,
    BotsComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, ReactiveFormsModule,

    //material
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [
    UsersService,
    NavigationService,
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
