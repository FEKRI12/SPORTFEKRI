import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {
players:any=[
  {id:1,name:"asma",age:24,position:"CA",number:"1"},
  {id:2,name:"sirine",age:24,position:"CA",number:"1"},
  {id:3,name:"ekram",age:25,position:"CA",number:"1"},
  {id:4,name:"abir",age:25,position:"CA",number:"1"},
 ];
  constructor() { }

  ngOnInit() {
  }

  
displayPlayer(id: number){
  
  alert("display"+ id);
}
editPlayer(id){
  alert("Edit"+ id);
}
deletePlayer(id){
  alert("Delete"+ id);
}

}
