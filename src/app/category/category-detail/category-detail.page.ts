import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.page.html',
  styleUrls: ['./category-detail.page.scss'],
})
export class CategoryDetailPage implements OnInit {

  selectedCategorieItem:Category;
  constructor(private categorieService:CategoryService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      categorieId=>{
        let id= categorieId.get("idCategory");

        this.selectedCategorieItem=this.categorieService.getCategorie(id);
        console.log(this.selectedCategorieItem);
      }
    )
  }

}
