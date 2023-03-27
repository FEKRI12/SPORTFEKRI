import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
teamsTab:any=[
  //  {id:1,name:"asma",stadium:24,owner:"CA",foundation:"1"},
  //  {id:2,name:"asma",stadium:24,owner:"CA",foundation:"1"},
  //  {id:3,name:"asma",stadium:24,owner:"CA",foundation:"1"},
  //  {id:4,name:"asma",stadium:24,owner:"CA",foundation:"1"},
  
  ];
  constructor(private teamService:TeamService) { }

  ngOnInit() {

    this.teamService.getAllTeams().subscribe(
      (response)=>{
        this.teamsTab=response.teams;
      }
    );
  }
  deleteTeamById(x){

    this.teamService.deleteTeamById(x).subscribe(
      (response)=>{
        console.log("here response after delete",response.message);
        this.teamService.getAllTeams().subscribe(
          (response)=>{
            this.teamsTab=response.teams;
          }
        );
      }
    );
  }

  getTeamById(id: number){
    this.teamService.getTeamById(id).subscribe(
    (response)=>{
      
    }

    )
  
    alert("display"+ id);
  }
  editTeam(id){
    alert("Edit"+ id);
  }
  deleteTeam(id){
    alert("Delete"+ id);
  }
}
