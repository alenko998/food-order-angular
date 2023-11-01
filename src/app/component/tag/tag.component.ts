import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/model/Tags';
import { FoodService } from 'src/app/service/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{
  tags:Tag[] = [];
  constructor(private foodService:FoodService){}
  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }

}
