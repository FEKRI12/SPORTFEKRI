import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // service BackEnd address
  matchUrl: string = "http://localhost:3000/matches"
  // bib de livreur
  constructor(private httpClient: HttpClient) { }



  // request to Add Match
  // reponse: message

  addMatch(obj) {
    return this.httpClient.post<{ message: string }>(this.matchUrl, obj);
  }


  // Request to get All Matches
  // response : [{},{},{}]
  getAllMatches() {
    return this.httpClient.get<{ matches: any, message: string }>(this.matchUrl);



  }


  // Request to get Match
  // response:{}
  getMatchById(id) {
    return this.httpClient.get<{ findedMatch: any }>(`${this.matchUrl}/${id}`);
  }

  // Request to get Match
  // response:message

  deleteMatch(id) {
    return this.httpClient.delete<{ message: any }>(`${this.matchUrl}/${id}`)
  }

  // Request to edit Match
  // response:message

  editMatch(newobj) {
    return this.httpClient.put<{ message: string }>(this.matchUrl, newobj)
  }



  SearchMatches(obj) {
    return this.httpClient.post(this.matchUrl + "/search", obj)
  }

}
