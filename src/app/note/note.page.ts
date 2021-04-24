import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  listNotes:any;
  constructor() { }

  ngOnInit() {
    this.listNotes = JSON.parse(localStorage.getItem('Notes'));
    console.log(this.listNotes);
  }


}
