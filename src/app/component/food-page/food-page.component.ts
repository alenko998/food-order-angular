import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/model/Foot';
import { CartService } from 'src/app/service/cart/cart.service';
import { FoodService } from 'src/app/service/food/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!: Food;
  constructor(private route:ActivatedRoute,
    private foodService: FoodService, private cartService:CartService,private router:Router) { 
    route.params.subscribe((params) => {
      if(params['id']){
        this.food = foodService.getFoodById(params['id']);
      }
    })

  }
  ngOnInit(): void {

  }

  addToCart(){
    this,this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
