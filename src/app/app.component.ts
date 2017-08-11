import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(router: Router, title: Title) {
    router.events.subscribe((event) => {
      title.setTitle(router.url.replace('/', '') + ' - Prestige Design');
    });
  }
}
