import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MedicionGlucosa } from 'src/app/models/models';
import { MedicionesService } from 'src/app/services/mediciones.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registros = [] as MedicionGlucosa[];
  nuevoRegistro = {} as MedicionGlucosa;

  constructor(private mediciones: MedicionesService) {
  }

  ngOnInit() {
    this.registros = this.mediciones.GetAll();
  }

  Guardar() {
    if (!this.IsInvalid()) {
      this.mediciones.Create(this.nuevoRegistro);
      this.LimpiarForma();
      this.registros = this.mediciones.GetAll();
    }
  }

  Eliminar(id: string) {
    this.mediciones.Delete(id);
    this.registros = this.mediciones.GetAll();
  }

  LimpiarForma() {
    this.nuevoRegistro = {} as MedicionGlucosa;
  }

  IsInvalid() {
    return this.nuevoRegistro.Nivel === undefined
      || this.nuevoRegistro.Comida === undefined
      || this.nuevoRegistro.AntesDespues === undefined
      || this.nuevoRegistro.Comida === undefined
      || this.nuevoRegistro.Fecha === undefined;
  }
}
