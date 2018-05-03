import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-development',
  templateUrl: './recent-development.component.html',
  styleUrls: ['./recent-development.component.css']
})
export class RecentDevelopmentComponent implements OnInit {
  projectTitle = "project Title"
  projectFlavorText = "Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'?"

  constructor() { }

  ngOnInit() {
  }

}
