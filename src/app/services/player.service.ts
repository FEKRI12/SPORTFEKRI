import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl: string = "http://localhost:3000/players"

  constructor(private httpClient: HttpClient) { }

  addPlayer(obj) {
    return this.httpClient.post<{message:string}>(this.playerUrl, obj);
  }

  editPlayer(obj) {
    return this.httpClient.put(this.playerUrl, obj);
  }

  deletePlayer(id) {
    return this.httpClient.delete(`${this.playerUrl}/${id}`)
  }

  getPlayerById(id) {
    return this.httpClient.get(`${this.playerUrl}/${id}`)
  }

  getAllPlayer() {
    return this.httpClient.get(this.playerUrl)
  }
}
