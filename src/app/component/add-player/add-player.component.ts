import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup;
  player:any={};
  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
  }
  addPlayer(){
    // alert("clicked")
    // console.log("object", this.player);
    this.playerService.addPlayer(this.player).subscribe(
      (response)=>{
        console.log("here response from BE",response);
        this.router.navigate(["players"]) 
      }

    )
  }

}
