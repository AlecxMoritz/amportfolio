import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-hero',
  templateUrl: './box-hero.component.html',
  styleUrls: ['./box-hero.component.css']
})
export class BoxHeroComponent implements OnInit {
  name = "Alecx Moritz";
  title = "Fullstack Developer";
  
  constructor() { }

  ngOnInit() {
  }

}
