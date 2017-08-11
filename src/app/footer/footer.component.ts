import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year = 2017;
  constructor() { }

  ngOnInit() {
    const d = new Date();
    this.year = d.getFullYear();
  }

}
