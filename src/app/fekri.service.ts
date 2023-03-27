import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FekriService {
fekriUrl: string="http://localhost:3000/fekri"
  constructor(private http:HttpClient) { }

addfekri(objet){
  return this.http.post(this.fekriUrl,objet);
}


}
