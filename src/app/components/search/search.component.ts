import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Input() class: string = '';
  DateTimeNow: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
