import { Injectable } from '@angular/core';
import { SearchData } from '../models/search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  saveDocumentData(data:string){
    localStorage.setItem('documentSearch',data)
  }
}
