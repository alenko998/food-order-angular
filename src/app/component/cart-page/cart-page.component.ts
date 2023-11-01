import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/Cart';
import { CartItem } from 'src/app/model/CartItem';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{

  cart!: Cart;
  constructor(private cartService:CartService){
    this.setCart();
  }
  ngOnInit(): void {

  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem,qunantityString:string){
    const quantity = parseInt(qunantityString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
  setCart(){
    this.cart = this.cartService.getCart()
  }

}
