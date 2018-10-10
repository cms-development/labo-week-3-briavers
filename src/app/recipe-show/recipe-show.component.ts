import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCallService } from '../services/http-call.service';

@Component({
  selector: 'app-recipe-show',
  templateUrl: './recipe-show.component.html',
  styleUrls: ['./recipe-show.component.css']
})
export class RecipeShowComponent implements OnInit {

  public recipe;
  constructor(
    private httpCall: HttpCallService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getRecipes(id);

  }

  getRecipes(id) {
    this.httpCall.getRecipe(id).subscribe(
      data => {
        console.log(data)
        this.recipe = data;
      },
      err => console.log(err),
      () => console.log('sended the request')
    )
  }
}
