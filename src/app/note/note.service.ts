import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  saveNote(note){
    let notes=[];
    if(localStorage.getItem('Notes')){
      notes = JSON.parse(localStorage.getItem('Notes'));
      notes = [note, ...notes];
    }else{
      notes = [note];
    }
    localStorage.setItem('Notes',JSON.stringify(notes));
  }

  getNoteList(){
    return [... localStorage.getItem('Notes')];
  }
  getNote(id){
    let table=this.getNoteList();
    return table[id];
  }
}
