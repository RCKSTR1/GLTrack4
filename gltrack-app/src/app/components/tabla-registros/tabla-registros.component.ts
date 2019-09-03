import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MedicionGlucosa } from 'src/app/models/models';

@Component({
  selector: 'app-tabla-registros',
  templateUrl: './tabla-registros.component.html',
  styleUrls: ['./tabla-registros.component.css']
})
export class TablaRegistrosComponent implements OnInit {
  _registros = [] as MedicionGlucosa[];

  @Input()
  set registros(value: MedicionGlucosa[]) {
    this._registros = value;
    this.dataSource.data = this._registros;
  }

  @Input() permitirEliminar = true;

  @Output() itemDeleted = new EventEmitter<string>();

  dataSource: MatTableDataSource<MedicionGlucosa>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this._registros);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Eliminar(id: string) {
    this.itemDeleted.emit(id);
  }

  GetDisplayedColumns() {
    const displayedColumns: string[] = ['fecha', 'nivel', 'comida', 'antesDespues'];

    if (this.permitirEliminar) {
      displayedColumns.push('actions');
    }

    return displayedColumns;
  }

}
