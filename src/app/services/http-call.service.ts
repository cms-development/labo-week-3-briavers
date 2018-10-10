import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {
  
  private baseUrl = 'https://cmsdevelopment.be/briavers/wp-json/wp/v2'
  constructor(private http: HttpClient) { }


  getRecipes(){
    return this.http.get(`${this.baseUrl}/rest_recipes`)
  }
  getRecipe(id){
    return this.http.get(`${this.baseUrl}/rest_recipes/${id}`)
  }
}
