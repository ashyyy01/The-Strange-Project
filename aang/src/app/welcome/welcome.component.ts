import { Component, OnInit } from '@angular/core';
import { MotogpComponent } from '../motogp/motogp.component';
import { WelcomeService } from './welcome.service';

@Component({
  selector: 'app-welcome',
  styleUrls: ['../styles.css'],
  templateUrl: './welcome.component.html',
  providers: [WelcomeService]
})
export class WelcomeComponent {

  constructor(private welcomeservice: WelcomeService) { }

}
