import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {
 searchForm: FormGroup;
  matchSearch:any={};
  constructor(private matchService : MatchService ) { }

  ngOnInit() {
  }
searchMatches(){
  console.log("here match object", this.matchSearch);
    // apl service => addMatch(this.match)
    this.matchService.SearchMatches(this.matchSearch).subscribe(
      (response)=>{
        console.log("here response from BE",response);
      
      }
    );


}



}
