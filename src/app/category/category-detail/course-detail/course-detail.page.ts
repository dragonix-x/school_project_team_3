import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/course.model';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.page.html',
  styleUrls: ['./course-detail.page.scss'],
})
export class CourseDetailPage implements OnInit {

  selectedCourseItem:Course;
  constructor(private categoriesService:CategoryService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(findItem=>{
      let idCat=findItem.get("idCategory");
      let idCourse=findItem.get("idCourse");

      this.selectedCourseItem=this.categoriesService.getCourse(idCat,idCourse);
      console.log("Selected course: "+this.selectedCourseItem);
    });
  }

}
