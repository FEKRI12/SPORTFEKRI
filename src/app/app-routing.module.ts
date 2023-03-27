import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AdminComponent } from './component/admin/admin.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { MatchComponent } from './component/match/match.component';
import { PlayersComponent } from './component/players/players.component';
import { SearchMatchesComponent } from './component/search-matches/search-matches.component';
import { SignupComponent } from './component/signup/signup.component';
const routes: Routes = [
  // http://localhost:4200 => Home component will be display
{path:"", component: HomeComponent},
{path:"signin", component: LoginComponent},
{path:"subscription", component: SignupComponent},
{path:"signupAdmin", component: SignupComponent},
{path:"allMatchs", component: MatchComponent},
{path:"players", component:PlayersComponent},
{path:"add-match", component:AddMatchComponent},
{path:"add-team", component:AddTeamComponent},
{path:"add-player", component:AddPlayerComponent},
{path:"admin", component:AdminComponent},
{path:"matchInfo/:id", component:MatchInfoComponent},
{path:"editMatch/:id", component:EditMatchComponent},
{path:"searchMatch", component:SearchMatchesComponent},
{path: "matchInfo/:id", component:MatchInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
