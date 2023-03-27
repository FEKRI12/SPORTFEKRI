import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ScoreComponent } from './component/score/score.component';
import { CupEventComponent } from './component/cup-event/cup-event.component';
import { NewsComponent } from './component/news/news.component';
import { StatsComponent } from './component/stats/stats.component';
import { BlogComponent } from './component/blog/blog.component';
import { InfoComponent } from './component/info/info.component';
import { ArticleComponent } from './component/article/article.component';
import { MatchComponent } from './component/match/match.component';
import { PlayersComponent } from './component/players/players.component';
import { PlayerComponent } from './component/player/player.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AdminComponent } from './component/admin/admin.component';
import { MatchesTableComponent } from './component/matches-table/matches-table.component';
import { PlayersTableComponent } from './component/players-table/players-table.component';
import { TeamsTableComponent } from './component/teams-table/teams-table.component';
import { BannerComponent } from './component/banner/banner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { MyFilterPipe } from './pipes/my-filter.pipe';
import { HttpClientModule } from"@angular/common/http";
import { SearchMatchesComponent } from './component/search-matches/search-matches.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ScoreComponent,
    CupEventComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    ArticleComponent,
    MatchComponent,
    PlayersComponent,
    PlayerComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AddTeamComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    BannerComponent,
    MatchInfoComponent,
    AsterixPipe,
    EditMatchComponent,
    MyFilterPipe,
    SearchMatchesComponent,
    TeamInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
