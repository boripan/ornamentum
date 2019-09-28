import { Component, Input } from '@angular/core';

import { DataTableColumnComponent } from '../data-table-column/data-table-column.component';

import { DataTableDataStateService } from '../../services/data-table-data-state.service';

/**
 * Data table column selector component. Toggle display state of columns via this popup component.
 */
@Component({
  selector: 'ng-data-table-column-selector',
  templateUrl: './data-table-column-selector.component.html'
})
export class DataTableColumnSelectorComponent {
  constructor(public dataStateService: DataTableDataStateService) {}

  @Input()
  public columns: DataTableColumnComponent[];

  @Input()
  public width: number|string;
}
