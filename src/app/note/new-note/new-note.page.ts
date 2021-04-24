import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/models/note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {
  //note:any={};
  form:FormGroup=this.fb.group({
    title:[
      [],
      Validators.required,
    ],
    content:[
      [],
      Validators.required,
    ]
  })

  constructor(private fb:FormBuilder,private noteService:NoteService,private route:Router) { }

  ngOnInit() {
  }

  addNote(){
    if(this.form.valid){
      let date=new Date();
      let newNote:Note={
        title:this.form.get("title").value,
        content:this.form.get("content").value,
        date:date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+" à "+date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds(),
      }
      //this.note = Object.assign(this.note,this.form.value);
      this.noteService.saveNote(newNote);
      this.form.reset();
      this.route.navigate(['/note']);
      console.log
    }
    else{
      console.log("Invalid form \n");
    }
  }

}
