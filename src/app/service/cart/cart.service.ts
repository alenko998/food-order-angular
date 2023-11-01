import { Injectable } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { Food } from 'src/app/model/Foot';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item=> item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity + 1);
      return;
    }else{
      this.cart.items.push(new CartItem(food));
    }
  }

  removeFromCart(foodId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(foodId:number,qunatity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem){
      return;
    } cartItem.quantity = qunatity;
  }

  getCart():Cart{
    return this.cart;
  }
}
