import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {
  matchForm: FormGroup;
  match: any = {};
  matches: any[];
  id: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private matchService: MatchService) { }

  ngOnInit() {
    // get all matches from LS
    // this.matches=JSON.parse(localStorage.getItem("matches")||"[]")
    // get id from path
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    // search object by id
    //   for (let i = 0; i < this.matches.length; i++) {
    //  if (this.matches[i].id==this.id) {
    //    this.match=this.matches[i];
    //    break;
    //  }

    //   }
    this.matchService.getMatchById(this.id).subscribe(
      (response) => {
        this.match = response.findedMatch;
      })
  }
  editMatch() {
    this.matchService.editMatch(this.match).subscribe(
      (response) => {
        console.log("here msg", response.message);
      }
    )
    this.router.navigate(["admin"])
  }
}
