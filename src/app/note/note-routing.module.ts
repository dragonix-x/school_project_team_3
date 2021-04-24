import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoteDetailPage } from './note-detail/note-detail.page';

import { NotePage } from './note.page';

const routes: Routes = [
  {
    path: '',
    component: NotePage
  },
  {
    path:'detail',
    component:NoteDetailPage,
   children:[
    {
      path: ':idNote',
      loadChildren: () => import('./note-detail/note-detail.module').then( m => m.NoteDetailPageModule)
    },
  ],
  },

  {
    path: 'new-note',
    loadChildren: () => import('./new-note/new-note.module').then( m => m.NewNotePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotePageRoutingModule {}
