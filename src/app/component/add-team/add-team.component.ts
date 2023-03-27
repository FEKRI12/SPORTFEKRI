import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';
@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
teamForm:FormGroup;
team:any={};
  constructor( private teamService:TeamService) { }

  ngOnInit() {
  }
  addTeam(){
    alert("clicked")
    console.log("team", this.team);
    this.teamService.addTeam(this.team).subscribe((response)=>{
      console.log("here response after adding team",response.message);
    });
    
  }

}
