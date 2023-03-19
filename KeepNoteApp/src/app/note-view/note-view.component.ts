import {
  Component,
  Input,
  OnInit,
  ɵsetAllowDuplicateNgModuleIdsForTest,
} from '@angular/core';
import { ServiceService } from '../service.service';
import { Note } from './Notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css'],
})
export class NoteViewComponent implements OnInit {
  @Input()
  open: any;

  data: Note[] = [];
  constructor(private serv: ServiceService) {}
  ngOnInit(): void {
    this.serv.getNote().subscribe((a) => (this.data = a));
  }

  find(dat: string) {
    this.serv.getNote().subscribe(
      (dat1) => {
        dat = dat.toLowerCase();
        if (dat.length == 1) {
          this.data = dat1.filter((a) => a.title?.startsWith(dat));
        } else {
          if (dat.length > 1) {
            this.data = dat1.filter((a) => a.title === dat);
            if (this.data.length == 0) {
              this.data = dat1.filter((a) => a.title?.includes(dat));
            }
          } else {
            this.data = dat1;
          }
        }
      },
      (e) => alert('unable to find' + e)
    );
  }
}
