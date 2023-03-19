import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Note } from '../note-view/Notes';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {
  @Input()
  sample: Note[] | any;
  hoverData: boolean | any;
  editedNote = this.fb.group({
    id: '',
    title: '',
    content: '',
  });
  hoverCard(d: any) {
    this.hoverData = d;
    this.editedNote.setValue({
      id: d.id,
      title: d.title,
      content: d.content,
    });
  }
  edit = true;
  constructor(private serv: ServiceService, private fb: FormBuilder) {}
  deleten(id: any) {
    this.serv.deleteNote(id).subscribe((resp) => {
      location.reload();
    });
  }
  saveEdit(editedNote: any) {
    console.log(editedNote.value);
    this.serv.saveEdited(editedNote.value).subscribe((resp) => {
      location.reload();
    });
  }
}
