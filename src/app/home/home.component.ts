import { Component, OnInit } from '@angular/core';
import { HttpCallService } from '../services/http-call.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipes;

  constructor(private httpCall: HttpCallService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getRecipes();

  }

  getRecipes() {
    this.httpCall.getRecipes().subscribe(
      data => {
        console.log(data)
        this.recipes = data;
      },
      err => console.log(err),
      () => console.log('sended the request')
    )
  }
}
