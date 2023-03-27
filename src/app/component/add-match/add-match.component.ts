import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { generateId } from 'src/app/shared/genericFunction';
@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  // form ID
  matchForm: FormGroup;
  // object
  match: any = {};
  constructor(private router: Router, private matchService: MatchService) { }

  ngOnInit() {
  }
  addMatch() {
    console.log("here match object", this.match);
    // apl service => addMatch(this.match)
    this.matchService.addMatch(this.match).subscribe(
      (response)=>{
        console.log("here response from BE",response);
        this.router.navigate(["allMatchs"])
      }
    );

  }


}
