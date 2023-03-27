import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    //  this.matches= JSON.parse(localStorage.getItem("matches")||"[]");

    this.matchService.getAllMatches().subscribe(
      (response) => {

        this.matches = response.matches;
      }
    )
  }

  displayMatch(id: number) {

    this.router.navigate([`matchInfo/${id}`])
  }
  goToEdit(id) {
    this.router.navigate([`editMatch/${id}`])
  }
  deleteMatch(id) {
    this.matchService.deleteMatch(id).subscribe(
      (response) => {
        console.log("here response after delete", response.message);
        this.matchService.getAllMatches().subscribe(
          (data) => {
            this.matches = data.matches;
          }
        )
      })
  }


}