import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient:HttpClient) { }

  
  saveUserData(data: any) {
      sessionStorage.setItem('clientData', JSON.stringify(data));
    }

  getUsetStorage(){
    let userData= sessionStorage.getItem('clientData')
    return userData?JSON.parse(userData):null 
  }
  
  getUserData(type:string,document:string){
    return this.httpClient.get(`${environment.baseUrl}${environment.endpoints.user(type,document)}`)
  }
}
