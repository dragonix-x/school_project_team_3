import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category.model';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  categoriesList:Category[];

  constructor(private service: CategoryService) { }

  ngOnInit() {
    this.categoriesList=this.service.getCategorieList();
    console.log("Categorie list: "+this.categoriesList);
  }

}
