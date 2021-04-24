import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Note } from 'src/app/models/note.model';
import { NoteService } from '../note.service';


@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.page.html',
  styleUrls: ['./note-detail.page.scss'],
})
export class NoteDetailPage implements OnInit {
  selectedNoteItem:any;
  constructor(public alertCtrl: AlertController,private route:ActivatedRoute,private noteService:NoteService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      noteId=>{
        let id = +noteId.get("idNote");
        console.log(id);
        this.selectedNoteItem=this.noteService.getNote(id);
        console.log(this.selectedNoteItem+"\n"+id);
      }
    )
  }


  async presentAlert () {
    let confirm = this.alertCtrl.create({
      header: 'Warning',
      message: 'Are you sure you want to delete?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            console.log('Delete clicked');
            //here stand the code to remove a note
          }
        }
      ]
    });
    (await confirm).present();
  }

}
