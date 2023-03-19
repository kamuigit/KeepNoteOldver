import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note-view/Notes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  data:any;
  @Output()
  search = new EventEmitter();

  searchdat(){
    this.search.emit(this.data);
  }
}
