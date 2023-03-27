import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
matchesTab:any=[];
  constructor(private matchService : MatchService) { }

  ngOnInit() {
    // this.matchesTab= JSON.parse(localStorage.getItem("matches")||"[]");
 this.matchService.getAllMatches().subscribe(
  (response)=>{
    this.matchesTab= response.matches
  }
 );


  }
  updateMatches(objs:any) {
    this.matchesTab = objs;
    }
}
