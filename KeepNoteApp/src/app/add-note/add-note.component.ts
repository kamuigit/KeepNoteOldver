import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  @Input()
  open: any;

  Title = '';
  Content = '';
  ReminderDate = '';
  Category = '';
  Priority = '';

  constructor(private serv: ServiceService) {}

  addNote(dat: any) {
    this.serv.addNew(dat.value).subscribe(
      (r) => {
        alert('New note Added');
        location.reload();
      },
      (e) => alert('unable to add note' + e)
    );
  }
}
