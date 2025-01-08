import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() data: any[] = [];
  @Output() rowClick = new EventEmitter<string>();

  displayedColumns: string[] = ['name', 'actions'];
}
