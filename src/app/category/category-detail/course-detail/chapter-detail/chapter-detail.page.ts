import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category/category.service';
import { Chapter } from 'src/app/models/chapter.model';

@Component({
  selector: 'app-chapter-detail',
  templateUrl: './chapter-detail.page.html',
  styleUrls: ['./chapter-detail.page.scss'],
})
export class ChapterDetailPage implements OnInit {

  selectedChapterItem:Chapter;
  constructor(private categoriesService:CategoryService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      findItem=>{
        let idCat= findItem.get("idCategory");
        let idCourse=findItem.get("IdCourse");
        let idChap=findItem.get("idChapter");

        console.log(this.categoriesService.getChapiter(idCat,idCourse,idChap));
        this.selectedChapterItem = this.categoriesService.getChapiter(idCat,idCourse,idChap);
      }
    );
  }


}
